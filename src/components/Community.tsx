import { motion } from "framer-motion";
import { MessageSquare, Youtube, Mail } from "lucide-react";

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
  </svg>
);

const DiscordIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

export function Community() {
  return (
    <section id="community" className="py-32 relative border-y-4 border-shiftlock-text">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Join Our Community */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-shiftlock-primary border-4 border-shiftlock-text p-6 sm:p-8 md:p-12 shadow-solid-lg flex flex-col justify-between"
          >
            {/* Subtle Logo Watermark Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage: `url('https://i.ibb.co/ksK74Ryw/LOGO-SHIFTLOCK-PNG-1-1.png')`,
                backgroundSize: '40px 40px',
                backgroundRepeat: 'repeat',
                filter: 'brightness(0) invert(1)'
              }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-4 sm:mb-6 tracking-tighter uppercase leading-none">
                JOIN OUR <br /> COMMUNITY
              </h2>
              
              <p className="text-white text-base sm:text-lg md:text-xl mb-8 sm:mb-10 font-bold opacity-90">
                Participate in exclusive giveaways, give direct feedback to the devs, and find new friends.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 relative z-10">
              <motion.a
                href="#discord"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 2 }}
                className="flex-1 sm:flex-none group flex items-center justify-center gap-3 bg-white text-shiftlock-text border-4 border-shiftlock-text px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-black text-base sm:text-lg uppercase tracking-wider shadow-solid active:translate-y-1 active:shadow-none transition-all"
              >
                <DiscordIcon size={20} className="text-shiftlock-primary" />
                Discord
              </motion.a>
              <div className="flex gap-3 sm:gap-4">
                <motion.a
                  href="#x"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9, rotate: 5 }}
                  className="group flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white text-shiftlock-text border-4 border-shiftlock-text rounded-2xl shadow-solid active:translate-y-1 active:shadow-none transition-all"
                >
                  <XIcon size={20} />
                </motion.a>
                <motion.a
                  href="#discord"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9, rotate: -5 }}
                  className="group flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white text-shiftlock-text border-4 border-shiftlock-text rounded-2xl shadow-solid active:translate-y-1 active:shadow-none transition-all"
                >
                  <DiscordIcon size={24} className="text-shiftlock-primary" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Brands & Partnerships */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-white border-4 border-shiftlock-text p-6 sm:p-8 md:p-12 shadow-solid-lg flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-shiftlock-primary border-4 border-shiftlock-text flex items-center justify-center mb-6 sm:mb-8 shadow-solid rotate-3">
                <Mail size={24} className="text-white" strokeWidth={3} />
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-shiftlock-text mb-4 sm:mb-6 tracking-tighter uppercase leading-none">
                BRANDS & <br /> <span className="text-shiftlock-primary">PARTNERSHIPS</span>
              </h2>
              
              <p className="text-shiftlock-text-muted text-base sm:text-lg md:text-xl mb-8 sm:mb-10 font-bold">
                Interested in collaborating? We are open to sponsorships and brand integrations.
              </p>
            </div>
            
            <motion.a
              href="mailto:contact@shiftlock.gg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg text-white uppercase tracking-wider bg-shiftlock-primary border-4 border-shiftlock-text rounded-2xl shadow-solid active:translate-y-1 active:shadow-none transition-all"
            >
              contact@shiftlock.gg
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
