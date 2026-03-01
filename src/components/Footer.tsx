import { LogoIcon } from "./LogoIcon";

export function Footer() {
  return (
    <footer className="relative bg-shiftlock-primary overflow-hidden">
      {/* Interactive Marquee Divider */}
      <div className="bg-white border-y-4 border-shiftlock-text transform -rotate-1 w-[110%] -ml-[5%] relative z-10 py-3 mb-16 shadow-solid">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-shiftlock-text font-black text-xl tracking-widest uppercase">
          {Array(15).fill("SHIFTLOCK STUDIO • ROBLOX DEVELOPMENT • JOIN THE REVOLUTION • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16 relative z-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border-4 border-shiftlock-text shadow-solid">
            <img 
              src="https://i.ibb.co/ksK74Ryw/LOGO-SHIFTLOCK-PNG-1-1.png" 
              alt="Shiftlock Icon" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            <img 
              src="https://i.ibb.co/8gPhd7wB/LOGO-SHIFTLOCK-PNG-2-1.png" 
              alt="Shiftlock" 
              className="h-8 md:h-10 object-contain"
            />
          </div>

          <p className="text-white text-base font-black uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Shiftlock Studio
          </p>

          <div className="flex gap-8 text-base font-black uppercase tracking-wider text-white">
            <a href="#" className="hover:text-shiftlock-text transition-colors">Terms</a>
            <a href="#" className="hover:text-shiftlock-text transition-colors">Privacy</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
