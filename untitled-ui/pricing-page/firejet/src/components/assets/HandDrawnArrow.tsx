export default function HandDrawnArrow({
  className = "",
}: HandDrawnArrowProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 68.66 56.96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.5158 9.90092C25.6315 17.6817 18.4779 31.9118 14.1785 45.8288C13.9575 46.544 13.6873 47.2618 13.4404 47.9604C12.75 46.5676 8.03917 34.9997 6.13728 35.707C5.02576 36.1204 5.66158 37.6059 5.90619 38.2051C7.67675 42.5372 9.40645 46.4208 11.522 50.6101C13.1143 53.7639 16.0773 52.9417 19.0124 51.9819C23.4934 50.5164 23.8571 50.0963 28.4466 48.4096C29.203 48.1315 29.9979 47.9067 30.699 47.5592C31.5233 47.1502 32.4071 46.2845 31.9695 45.3409C31.4735 44.2715 30.3945 44.347 29.4728 44.7397C29.2803 44.8221 29.0849 44.8977 28.8877 44.9685C26.7215 45.7463 16.8895 49.895 16.562 49.1936C16.4515 48.9574 16.4888 48.6826 16.5306 48.4254C17.7342 41.0033 20.9214 33.933 24.6866 27.4731C27.2199 23.126 30.4713 19.1994 34.2601 15.8873C37.3047 13.2257 40.7371 10.9659 44.4762 9.40622C48.4857 7.73342 52.366 7.38875 56.6492 7.13433C59.1151 6.98811 57.162 4.63885 55.7901 4.37423C54.2823 4.08296 52.668 4.60603 51.2031 4.91097C46.5692 5.87805 42.3375 7.59319 38.5158 9.90092Z" fill="#6941C6"/></svg>
    </div>
  );
}

interface HandDrawnArrowProps {
  className?: string;
}
