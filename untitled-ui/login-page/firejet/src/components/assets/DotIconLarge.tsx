export default function DotIconLarge({ className = "" }: DotIconLargeProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dd_1_11403)"><circle cx="12" cy="12" r="12" fill="url(#paint0_linear_1_11403)"/></g><defs><filter id="filter0_dd_1_11403" x="-4.5" y="-3" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.5"/><feGaussianBlur stdDeviation="1.5"/><feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_11403"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1.5"/><feGaussianBlur stdDeviation="2.25"/><feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/><feBlend mode="normal" in2="effect1_dropShadow_1_11403" result="effect2_dropShadow_1_11403"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_11403" result="shape"/></filter><linearGradient id="paint0_linear_1_11403" x1="6" y1="24" x2="18" y2="-1.16229e-06" gradientUnits="userSpaceOnUse"><stop stop-color="#53389E"/><stop offset="1" stop-color="#6941C6"/></linearGradient></defs></svg>
    </div>
  );
}

interface DotIconLargeProps {
  className?: string;
}
