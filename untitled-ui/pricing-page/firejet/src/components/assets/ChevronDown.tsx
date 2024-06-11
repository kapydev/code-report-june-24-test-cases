export default function ChevronDown({ className = "" }: ChevronDownProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.5L10 12.5L15 7.5" stroke="#475467" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  );
}

interface ChevronDownProps {
  className?: string;
}
