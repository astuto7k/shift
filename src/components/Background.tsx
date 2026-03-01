export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] bg-shiftlock-bg">
      {/* Subtle Logo Watermark Pattern - Highly visible and highlighted */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none grayscale"
        style={{
          backgroundImage: `url('https://i.ibb.co/ksK74Ryw/LOGO-SHIFTLOCK-PNG-1-1.png')`,
          backgroundSize: '20px 20px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          filter: 'brightness(0) opacity(0.4)',
          maskImage: 'radial-gradient(circle, black 10px, transparent 11px)',
          maskSize: '80px 80px',
          maskPosition: 'center'
        }}
      />
    </div>
  );
}
