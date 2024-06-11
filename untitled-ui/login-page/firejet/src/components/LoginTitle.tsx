export default function LoginTitle({ className = "" }: LoginTitleProps) {
  return (
    <heading
      className={`self-stretch pt-[18px] text-center text-3xl font-semibold leading-[38px] text-[#101828] ${className}`}
    >
      Log in to your account
    </heading>
  );
}

interface LoginTitleProps {
  className?: string;
}
