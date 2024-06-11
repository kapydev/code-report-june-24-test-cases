import { useState } from "react";

export default function EmailInputContainer({
  className = "",
}: EmailInputContainerProps) {
  const [emailInput, setEmailInput] = useState("");

  return (
    <div
      className={`flex rounded-lg border border-solid border-[#D0D5DD] px-[13px] py-[9px] drop-shadow-lg focus-within:[box-shadow:0_0_4px_#1e40af] ${className}`}
    >
      <input
        className="flex-grow leading-6 text-[#667085] [min-width:0] [outline:none] placeholder:text-[#667085]"
        placeholder="Enter your email"
        id="email-input"
        type="text"
        value={emailInput}
        onChange={(e) => {
          setEmailInput(e.target.value);
        }}
       />
    </div>
  );
}

interface EmailInputContainerProps {
  className?: string;
}
