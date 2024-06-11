export default function Logomark({ className = "" }: LogomarkProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 29.07 29.33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.77166 13.8788C9.31488 11.8333 11.3985 9.73066 13.4255 9.18249L26.0629 5.76491C28.09 5.21674 29.2928 6.43057 28.7496 8.47608L25.3629 21.2287C24.8197 23.2742 22.7361 25.3768 20.709 25.925L8.07163 29.3426C6.0446 29.8908 4.84174 28.6769 5.38496 26.6314L8.77166 13.8788Z" fill="#E9D7FE"/><path d="M3.70549 8.76623C4.24872 6.72071 6.33232 4.61812 8.35935 4.06994L20.9968 0.65236C23.0238 0.104184 24.2267 1.31802 23.6834 3.36353L20.2968 16.1162C19.7535 18.1617 17.6699 20.2643 15.6429 20.8125L3.00547 24.23C0.97844 24.7782 -0.224425 23.5644 0.318798 21.5189L3.70549 8.76623Z" fill="#D6BBFB"/></svg>
    </div>
  );
}

interface LogomarkProps {
  className?: string;
}
