export default function LoginTitle({ className = "" }: LoginTitleProps) {
  return (
    <h1
      className={`self-stretch pt-[18px] text-center text-3xl font-semibold leading-[38px] text-[#101828] ${className}`}
    >
      Log in to your account
    </h1>
  );
}

interface LoginTitleProps {
  className?: string;
}
