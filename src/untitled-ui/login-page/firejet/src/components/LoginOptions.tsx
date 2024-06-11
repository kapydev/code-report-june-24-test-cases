export default function LoginOptions({ className = "" }: LoginOptionsProps) {
  return (
    <div
      className={`flex items-end justify-center self-stretch pt-[18px] ${className}`}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-[69px] gap-y-2.5 text-sm leading-5 min-[1430px]:flex-nowrap" >
        <div className="flex items-center justify-center gap-x-2 self-stretch" >
          <div className="h-4 w-4 flex-shrink-0 rounded border border-solid border-[#D0D5DD] bg-white" />
          <div className="font-medium text-[#344054]">
            Remember for 30 days
          </div>
        </div>
        <div className="font-semibold text-[#6941C6]">
          Forgot password
        </div>
      </div>
    </div>
  );
}

interface LoginOptionsProps {
  className?: string;
}
