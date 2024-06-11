export default function ArrowRight3({ className = "" }: ArrowRight3Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16675 9.99996H15.8334M15.8334 9.99996L10.0001 4.16663M15.8334 9.99996L10.0001 15.8333" stroke="#6941C6" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  );
}

interface ArrowRight3Props {
  className?: string;
}
