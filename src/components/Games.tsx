import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, MessageSquare, X, Gamepad2, ChevronLeft, ChevronRight } from "lucide-react";

const games = [
  {
    id: 1,
    title: "Project: Zenith",
    image: "https://picsum.photos/seed/zenith/800/600",
    metric: "1.2M+ Visits",
    active: "15K Active",
    robloxLink: "#",
    discordLink: "#",
    description: "Dive into a futuristic world where technology and magic collide. Project: Zenith offers unparalleled combat mechanics, deep character customization, and a sprawling open world to explore with your friends. Will you rise to the top?",
  },
  {
    id: 2,
    title: "Neon Rush",
    image: "https://picsum.photos/seed/neon/800/600",
    metric: "850K+ Visits",
    active: "8K Active",
    robloxLink: "#",
    discordLink: "#",
    description: "Experience the thrill of high-speed racing in a neon-drenched cyberpunk metropolis. Customize your ride, master the drift, and compete against players worldwide in intense multiplayer races.",
  },
  {
    id: 3,
    title: "Blox Battles",
    image: "https://picsum.photos/seed/blox/800/600",
    metric: "5M+ Visits",
    active: "25K Active",
    robloxLink: "#",
    discordLink: "#",
    description: "The ultimate arena brawler. Choose from dozens of unique fighters, each with their own special abilities and playstyles. Team up or go solo in fast-paced, action-packed matches where only the strongest survive.",
  },
  {
    id: 4,
    title: "Shift City",
    image: "https://picsum.photos/seed/shift/800/600",
    metric: "Coming Soon",
    active: "Wishlist",
    robloxLink: "#",
    discordLink: "#",
    description: "A revolutionary roleplay experience. Build your life, choose your career, and interact with thousands of other players in a dynamic, ever-evolving city. Your story begins here.",
  },
];

export function Games() {
  const [selectedGame, setSelectedGame] = useState<typeof games[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isDragging = React.useRef(false);

  const totalGames = games.length;
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGames);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGames) % totalGames);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleGameClick = (game: typeof games[0]) => {
    if (!isDragging.current) {
      setSelectedGame(game);
    }
  };

  return (
    <section 
      id="games" 
      className="pt-12 pb-32 relative border-b-4 border-shiftlock-text overflow-hidden bg-shiftlock-bg-alt/30"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 text-shiftlock-text uppercase"
          >
            OUR <span className="text-shiftlock-primary inline-block bg-white px-6 pt-3 pb-2 border-4 border-shiftlock-text shadow-solid -rotate-2 ml-2">GAMES</span>
          </motion.h2>
        </div>

        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center perspective-[2000px]">
          {/* Mechanical Gear Background Decoration */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none"
            animate={{ 
              rotate: currentIndex * 90,
              scale: 1 + Math.abs(mousePos.x) * 0.1
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <img 
              src="https://i.ibb.co/ksK74Ryw/LOGO-SHIFTLOCK-PNG-1-1.png" 
              alt="Gear" 
              className="w-[700px] h-[700px] grayscale"
            />
          </motion.div>

          {/* Immersive 3D Cards Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {games.map((game, index) => {
                let position = index - currentIndex;
                if (position > totalGames / 2) position -= totalGames;
                if (position < -totalGames / 2) position += totalGames;

                const isActive = position === 0;
                const isVisible = Math.abs(position) <= 1;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={game.id}
                    initial={{ opacity: 0, scale: 0.8, x: position * 400, rotateY: position * 45 }}
                    animate={{ 
                      opacity: isVisible ? 1 : 0,
                      scale: isActive ? 1 : 0.85,
                      x: position * (typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 380),
                      z: isActive ? 100 : -200,
                      rotateY: isActive ? mousePos.x * 15 : position * -35,
                      rotateX: isActive ? mousePos.y * -10 : 0,
                      filter: isActive ? "brightness(1)" : "brightness(0.4) blur(4px)",
                      zIndex: isActive ? 50 : 20,
                    }}
                    exit={{ opacity: 0, scale: 0.5, x: position * 500 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 25 
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragStart={() => {
                      isDragging.current = true;
                    }}
                    onDragEnd={(_, info) => {
                      // Small timeout to allow the click event to be blocked if it happens immediately
                      setTimeout(() => {
                        isDragging.current = false;
                      }, 100);

                      if (info.offset.x < -100) nextSlide();
                      if (info.offset.x > 100) prevSlide();
                    }}
                    className="absolute w-[92%] md:w-[650px] cursor-grab active:cursor-grabbing"
                  >
                    <div className="group relative rounded-[3rem] overflow-hidden bg-white border-4 border-shiftlock-text shadow-solid-lg flex flex-col transform-gpu">
                      {/* Image Container */}
                      <div 
                        className="relative aspect-[16/9] overflow-hidden border-b-4 border-shiftlock-text"
                        onClick={() => isActive && handleGameClick(game)}
                      >
                        <motion.img
                          src={game.image}
                          alt={game.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                          animate={{
                            scale: isActive ? 1.05 + Math.abs(mousePos.x) * 0.05 : 1,
                            x: isActive ? mousePos.x * -20 : 0,
                            y: isActive ? mousePos.y * -20 : 0,
                          }}
                        />
                        
                        {/* Metric Badge */}
                        <div className="absolute top-6 right-6 z-20 flex items-center gap-3 bg-white border-2 border-shiftlock-text px-5 py-2.5 rounded-2xl shadow-solid">
                          <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shiftlock-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-shiftlock-primary"></span>
                          </div>
                          <span className="text-sm font-black text-shiftlock-text uppercase tracking-widest">{game.active}</span>
                        </div>
                        
                        {isActive && (
                          <div className="absolute inset-0 bg-shiftlock-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                            <div className="bg-white text-shiftlock-text font-black px-8 py-4 rounded-2xl border-4 border-shiftlock-text shadow-solid uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-3">
                              <Gamepad2 size={24} />
                              View Details
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-10 bg-white relative">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-l-2 border-b-2 border-shiftlock-text/10 pointer-events-none" />
                        
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                          <div className="flex-1">
                            <p className="text-shiftlock-primary font-black text-sm tracking-[0.3em] uppercase mb-2">
                              {game.metric}
                            </p>
                            <h3 className="text-4xl md:text-5xl font-display font-black text-shiftlock-text uppercase tracking-tight leading-none">
                              {game.title}
                            </h3>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <motion.a
                              href={game.robloxLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-8 py-4 rounded-2xl bg-shiftlock-primary border-4 border-shiftlock-text text-white font-black uppercase tracking-widest text-base shadow-solid active:translate-y-1 active:shadow-none transition-all hover:scale-105"
                            >
                              Play Now
                            </motion.a>
                            <motion.a
                              href={game.discordLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.9, rotate: -5 }}
                              className="w-16 h-16 rounded-2xl bg-white border-4 border-shiftlock-text flex items-center justify-center text-shiftlock-text transform transition-all shadow-solid hover:bg-shiftlock-bg-alt"
                            >
                              <MessageSquare size={28} strokeWidth={3} />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-16 flex items-center gap-12 z-50">
            <button 
              onClick={prevSlide}
              className="group w-20 h-20 bg-white border-4 border-shiftlock-text rounded-[2rem] flex items-center justify-center text-shiftlock-text hover:bg-shiftlock-primary hover:text-white transition-all shadow-solid active:translate-y-1 active:shadow-none"
            >
              <ChevronLeft size={44} strokeWidth={4} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="group w-20 h-20 bg-white border-4 border-shiftlock-text rounded-[2rem] flex items-center justify-center text-shiftlock-text hover:bg-shiftlock-primary hover:text-white transition-all shadow-solid active:translate-y-1 active:shadow-none"
            >
              <ChevronRight size={44} strokeWidth={4} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Game Detail Modal */}
      <AnimatePresence>
        {selectedGame && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGame(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white border-4 border-shiftlock-text rounded-3xl shadow-solid-lg overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedGame(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 bg-white border-2 border-shiftlock-text rounded-full flex items-center justify-center text-shiftlock-text hover:bg-shiftlock-bg-alt transition-colors shadow-solid"
              >
                <X size={20} strokeWidth={3} />
              </button>

              <div className="relative h-64 sm:h-80 shrink-0 border-b-4 border-shiftlock-text">
                <img
                  src={selectedGame.image}
                  alt={selectedGame.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-4xl sm:text-5xl font-display font-black text-white uppercase tracking-tight drop-shadow-md">
                    {selectedGame.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-shiftlock-bg-alt border-2 border-shiftlock-text rounded-xl text-sm font-black uppercase tracking-wider text-shiftlock-text shadow-solid">
                    {selectedGame.metric}
                  </span>
                  <span className="flex items-center gap-3 px-4 py-2 bg-shiftlock-primary/10 border-2 border-shiftlock-primary rounded-xl text-sm font-black uppercase tracking-wider text-shiftlock-primary shadow-solid">
                    <div className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shiftlock-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-shiftlock-primary"></span>
                    </div>
                    {selectedGame.active}
                  </span>
                </div>

                <p className="text-lg text-shiftlock-text-muted font-bold leading-relaxed mb-8">
                  {selectedGame.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedGame.robloxLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-shiftlock-primary border-4 border-shiftlock-text text-white rounded-2xl font-black text-lg uppercase tracking-wider shadow-solid shadow-solid-hover"
                  >
                    <Gamepad2 size={24} strokeWidth={3} />
                    Play on Roblox
                  </a>
                  <a
                    href={selectedGame.discordLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-shiftlock-primary border-4 border-shiftlock-text text-white rounded-2xl font-black text-lg uppercase tracking-wider shadow-solid shadow-solid-hover"
                  >
                    <MessageSquare size={24} strokeWidth={3} />
                    Join Community
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
