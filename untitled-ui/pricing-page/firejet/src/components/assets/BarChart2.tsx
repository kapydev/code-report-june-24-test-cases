export default function BarChart2({ className = "" }: BarChart2Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 20V10M12 20V4M6 20V14" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  );
}

interface BarChart2Props {
  className?: string;
}
