export default function ArrowRight2({ className = "" }: ArrowRight2Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16663 9.99996H15.8333M15.8333 9.99996L9.99996 4.16663M15.8333 9.99996L9.99996 15.8333" stroke="#6941C6" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  );
}

interface ArrowRight2Props {
  className?: string;
}
