import { useState } from "react";

export default function PasswordInputContainer({
  className = "",
}: PasswordInputContainerProps) {
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <div
      className={`flex rounded-lg border border-solid border-[#D0D5DD] px-[13px] py-[9px] drop-shadow-lg focus-within:[box-shadow:0_0_4px_#1e40af] ${className}`}
    >
      <input
        className="flex-grow leading-6 text-[#667085] [min-width:0] [outline:none] placeholder:text-[#667085]"
        placeholder="••••••••"
        id="password-input"
        type="password"
        value={passwordInput}
        onChange={(e) => {
          setPasswordInput(e.target.value);
        }}
       />
    </div>
  );
}

interface PasswordInputContainerProps {
  className?: string;
}
