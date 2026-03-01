import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { LogoIcon } from "./LogoIcon";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Games", id: "games" },
    { name: "About", id: "about" },
    { name: "Community", id: "community" },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-4 left-4 right-4 md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-3rem)] max-w-7xl z-50 bg-white/80 backdrop-blur-md border-4 border-shiftlock-text rounded-2xl shadow-solid overflow-hidden">
      <div className="px-6 h-20 flex items-center justify-between relative z-10">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
        >
          <img 
            src="https://i.ibb.co/ksK74Ryw/LOGO-SHIFTLOCK-PNG-1-1.png" 
            alt="Shiftlock Icon" 
            className="w-11 h-11 md:w-12 md:h-12 group-hover:rotate-90 transition-transform duration-300 object-contain"
          />
          <img 
            src="https://i.ibb.co/8gPhd7wB/LOGO-SHIFTLOCK-PNG-2-1.png" 
            alt="Shiftlock" 
            className="h-7 md:h-8 object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9, y: 2 }}
              className="text-base font-bold text-shiftlock-text hover:text-shiftlock-primary transition-colors uppercase tracking-wider relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-shiftlock-primary transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="#discord"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-shiftlock-primary border-2 border-shiftlock-text rounded-xl text-sm font-black text-white uppercase tracking-wider shadow-solid shadow-solid-hover"
          >
            Discord
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-shiftlock-text hover:text-shiftlock-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t-4 border-shiftlock-text overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={`#${link.id}`}
                  whileTap={{ scale: 0.95 }}
                  className="text-xl font-black text-shiftlock-text hover:text-shiftlock-primary transition-colors py-3 uppercase tracking-wider border-b-2 border-shiftlock-bg-alt last:border-0"
                  onClick={(e) => {
                    setIsOpen(false);
                    scrollToSection(e, link.id);
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#discord"
                whileTap={{ scale: 0.95 }}
                className="mt-2 px-6 py-4 bg-shiftlock-primary border-4 border-shiftlock-text text-white rounded-2xl text-center font-black uppercase tracking-wider shadow-solid active:translate-y-1 active:shadow-none transition-all"
                onClick={() => setIsOpen(false)}
              >
                Join Discord
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
