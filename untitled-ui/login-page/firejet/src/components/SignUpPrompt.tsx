export default function SignUpPrompt({ className = "" }: SignUpPromptProps) {
  return (
    <div
      className={`flex items-end justify-center self-stretch pt-[26px] ${className}`}
    >
      <div className="flex items-center justify-center gap-x-1 text-sm leading-5" >
        <div className="text-[#475467]">Don’t have an account?</div>
        <button className="font-semibold text-[#6941C6]">Sign up</button>
      </div>
    </div>
  );
}

interface SignUpPromptProps {
  className?: string;
}
