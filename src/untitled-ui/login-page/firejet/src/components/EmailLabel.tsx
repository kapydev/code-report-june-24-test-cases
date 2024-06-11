export default function EmailLabel({ className = "" }: EmailLabelProps) {
  return (
    <label
      className={`self-stretch pr-80 pt-[26px] text-center text-sm font-medium leading-5 text-[#344054] ${className}`}
      htmlFor="email-input"
    >
      Email
    </label>
  );
}

interface EmailLabelProps {
  className?: string;
}
