export default function PasswordLabel({ className = "" }: PasswordLabelProps) {
  return (
    <label
      className={`self-stretch pr-72 pt-3.5 text-center text-sm font-medium leading-5 text-[#344054] ${className}`}
      htmlFor="password-input"
    >
      Password
    </label>
  );
}

interface PasswordLabelProps {
  className?: string;
}
