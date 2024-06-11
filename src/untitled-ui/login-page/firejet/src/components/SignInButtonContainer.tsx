export default function SignInButtonContainer({
  className = "",
}: SignInButtonContainerProps) {
  return (
    <div className={`flex justify-center self-stretch pt-[18px] ${className}`}>
      <button className="flex items-center justify-center rounded-lg border border-solid border-[#7F56D9] bg-[#7F56D9] px-40 py-[9px] drop-shadow-lg" >
        <div className="flex-grow text-center font-semibold leading-6 text-white" >
          Sign in
        </div>
      </button>
    </div>
  );
}

interface SignInButtonContainerProps {
  className?: string;
}
