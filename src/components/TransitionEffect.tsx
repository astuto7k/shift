import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TransitionHandle {
  trigger: (callback: () => void) => void;
}

export const TransitionEffect = forwardRef<TransitionHandle>((props, ref) => {
  const [isActive, setIsActive] = useState(false);
  const [pendingCallback, setPendingCallback] = useState<(() => void) | null>(null);

  useImperativeHandle(ref, () => ({
    trigger: (callback: () => void) => {
      setIsActive(true);
      setPendingCallback(() => callback);
    }
  }));

  const handleAnimationComplete = () => {
    if (pendingCallback) {
      pendingCallback();
      setPendingCallback(null);
      // Keep active for a bit to show the "opening" animation
      setTimeout(() => setIsActive(false), 300);
    }
  };

  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col">
          {/* Top Shutter */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => isActive && !pendingCallback ? null : handleAnimationComplete()}
            className="flex-1 bg-shiftlock-text border-b-8 border-shiftlock-primary relative"
          >
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white font-black uppercase tracking-[0.5em] text-sm opacity-20">
                <span>Shiftlock</span>
                <div className="w-2 h-2 bg-shiftlock-primary animate-pulse" />
                <span>Engaged</span>
             </div>
          </motion.div>
          
          {/* Bottom Shutter */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 bg-shiftlock-text border-t-8 border-shiftlock-primary relative"
          >
             <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white font-black uppercase tracking-[0.5em] text-sm opacity-20">
                <span>System</span>
                <div className="w-2 h-2 bg-shiftlock-primary animate-pulse" />
                <span>Shifting</span>
             </div>
          </motion.div>

          {/* Center Logo Flash */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <img 
              src="https://i.ibb.co/ksK74Ryw/LOGO-SHIFTLOCK-PNG-1-1.png" 
              alt="Shiftlock" 
              className="w-32 h-32 brightness-0 invert"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});
