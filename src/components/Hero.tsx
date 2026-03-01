import { motion } from "framer-motion";
import { Gamepad2, MessageSquare } from "lucide-react";

const Letter = ({ char, className = "" }: { char: string; className?: string; key?: any }) => (
  <motion.span
    className={`inline-block cursor-default ${className}`}
    whileHover={{ 
      y: -2,
      scale: 1.08,
      transition: { type: "spring", stiffness: 400, damping: 15 }
    }}
  >
    {char === " " ? "\u00A0" : char}
  </motion.span>
);

const WordBox = ({ children, rotate = 0, className = "", textColor = "text-shiftlock-text" }: { children: string; rotate?: number; className?: string; textColor?: string }) => (
  <span 
    className={`inline-block bg-white px-2 sm:px-5 pt-1 sm:pt-2.5 pb-0.5 sm:pb-1.5 border-2 sm:border-4 border-shiftlock-text shadow-solid ${className} ${textColor}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    {children.split("").map((c, i) => (
      <Letter key={i} char={c} />
    ))}
  </span>
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* --- ANIMATED BACKGROUND ELEMENTS --- */}
      
      {/* Marquee Tape 1 (Top Diagonal) */}
      <div className="absolute top-[15%] -left-10 w-[120%] h-14 bg-shiftlock-primary border-y-4 border-shiftlock-text transform -rotate-2 flex items-center overflow-hidden z-0 shadow-solid opacity-90">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-white font-black text-2xl tracking-widest uppercase">
          {Array(20).fill("SHIFTLOCK STUDIO • ROBLOX DEVELOPMENT • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>

      {/* Marquee Tape 2 (Bottom Diagonal) */}
      <div className="absolute bottom-[15%] -left-10 w-[120%] h-14 bg-shiftlock-primary border-y-4 border-shiftlock-text transform rotate-3 flex items-center overflow-hidden z-0 shadow-solid opacity-90">
        <div className="animate-marquee-reverse whitespace-nowrap flex gap-8 text-white font-black text-2xl tracking-widest uppercase">
          {Array(20).fill("NEXT GEN EXPERIENCES • PLAY NOW • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center z-10 relative">
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center gap-2 md:gap-4 font-display font-black tracking-tighter mb-12 text-shiftlock-text uppercase"
        >
          {/* GAMES + THAT + HIT */}
          <div className="flex flex-row items-center justify-center gap-1.5 sm:gap-4 md:gap-8 mb-2 md:mb-6 relative">
            <div className="relative">
              <WordBox rotate={1} className="text-3xl sm:text-6xl md:text-8xl lg:text-[100px]">GAMES</WordBox>
              
              <motion.span
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: -12 }}
                whileHover={{ scale: 1.05, rotate: -8 }}
                className="absolute -bottom-3 -right-1 sm:-right-4 md:-right-8 text-shiftlock-primary font-black text-xl sm:text-3xl md:text-5xl italic tracking-tight z-20 select-none drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] md:drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                style={{ 
                  WebkitTextStroke: '1px black',
                  paintOrder: 'stroke fill'
                }}
              >
                {"THAT".split("").map((c, i) => (
                  <Letter key={i} char={c} />
                ))}
              </motion.span>
            </div>
            <WordBox rotate={-2} textColor="text-shiftlock-primary" className="text-3xl sm:text-6xl md:text-8xl lg:text-[100px]">HIT</WordBox>
          </div>

          <WordBox rotate={1} className="text-3xl sm:text-6xl md:text-8xl lg:text-[100px]">DIFFERENT</WordBox>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-shiftlock-text-muted max-w-2xl mb-12 font-bold bg-white/80 backdrop-blur-sm p-4 rounded-2xl border-2 border-shiftlock-text shadow-solid"
        >
          Innovative, fun, and personality-driven games connecting millions of players.
        </motion.p>
      </div>
    </section>
  );
}
