export default function DotIcon({ className = "" }: DotIconProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dd_1_11283)"><circle cx="8" cy="8" r="8" fill="url(#paint0_linear_1_11283)"/></g><defs><filter id="filter0_dd_1_11283" x="-3" y="-2" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1"/><feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_11283"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1.5"/><feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/><feBlend mode="normal" in2="effect1_dropShadow_1_11283" result="effect2_dropShadow_1_11283"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_11283" result="shape"/></filter><linearGradient id="paint0_linear_1_11283" x1="4" y1="16" x2="12" y2="-7.7486e-07" gradientUnits="userSpaceOnUse"><stop stop-color="#53389E"/><stop offset="1" stop-color="#6941C6"/></linearGradient></defs></svg>
    </div>
  );
}

interface DotIconProps {
  className?: string;
}
