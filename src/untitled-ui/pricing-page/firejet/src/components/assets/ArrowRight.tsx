export default function ArrowRight({ className = "" }: ArrowRightProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16669M15.8333 10L9.99996 15.8334" stroke="#6941C6" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  );
}

interface ArrowRightProps {
  className?: string;
}
