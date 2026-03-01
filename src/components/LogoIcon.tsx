export function LogoIcon({ 
  className, 
  stroke, 
  strokeWidth 
}: { 
  className?: string;
  stroke?: string;
  strokeWidth?: number | string;
}) {
  return (
    <svg 
      viewBox="0 0 32 32" 
      fill="currentColor" 
      stroke={stroke}
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <mask id="hole-mask">
        <rect width="32" height="32" fill="white" />
        <circle cx="16" cy="16" r="6" fill="black" />
      </mask>
      <g mask="url(#hole-mask)">
        <circle cx="16" cy="16" r="12" />
        <rect x="11" y="1" width="10" height="30" />
        <rect x="1" y="11" width="30" height="10" />
      </g>
    </svg>
  );
}
