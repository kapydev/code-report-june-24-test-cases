export default function LoginSubtitle({ className = "" }: LoginSubtitleProps) {
  return (
    <heading
      className={`self-stretch pt-1.5 text-center leading-6 text-[#475467] ${className}`}
    >
      Welcome back! Please enter your details.
    </heading>
  );
}

interface LoginSubtitleProps {
  className?: string;
}
