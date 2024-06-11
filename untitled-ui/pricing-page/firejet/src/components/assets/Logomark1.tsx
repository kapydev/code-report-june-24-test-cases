export default function Logomark1({ className = "" }: Logomark1Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 19.16 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.453857" y="12.8" width="6.34216" height="6.39999" fill="#B692F6"/><rect x="19.4803" y="19.2" width="6.34217" height="6.39999" transform="rotate(180 19.4803 19.2)" fill="#B692F6"/><path d="M6.79602 12.7999L13.1382 6.3999V12.7999L6.79602 19.1999V12.7999Z" fill="#F4EBFF"/><path d="M13.1382 19.1999L6.79602 25.5999L6.79602 19.1999L13.1382 12.7999L13.1382 19.1999Z" fill="#E9D7FE"/><path d="M0.453857 12.8L13.1382 0V6.39999L6.79602 12.8H0.453857Z" fill="#D6BBFB"/><path d="M19.4803 19.2L6.79602 32L6.79602 25.6L13.1382 19.2L19.4803 19.2Z" fill="#D6BBFB"/></svg>
    </div>
  );
}

interface Logomark1Props {
  className?: string;
}
