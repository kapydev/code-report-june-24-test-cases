export default function LoginSignupButtons({
  className = "",
  outerContainerClassName = "",
  text = "Log in",
  buttonContainerClassName = "",
  buttonTextClassName = "",
  text1 = "Sign up",
}: LoginSignupButtonsProps) {
  return (
    <div
      className={`flex items-center justify-center ${outerContainerClassName} ${className}`}
    >
      <div>{text}</div>
      <div
        className={`flex items-center justify-center self-stretch ${buttonContainerClassName}`}
      >
        <div className={`flex-grow text-center ${buttonTextClassName}`}>
          {text1}
        </div>
      </div>
    </div>
  );
}

interface LoginSignupButtonsProps {
  className?: string;
  outerContainerClassName: string;
  text: string;
  buttonContainerClassName: string;
  buttonTextClassName: string;
  text1: string;
}
