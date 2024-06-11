export default function Zap({ className = "" }: ZapProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  );
}

interface ZapProps {
  className?: string;
}