import DotIcon from "./assets/DotIcon";
import Logo from "./assets/Logo";
import ChevronDownIcon from "./assets/ChevronDownIcon";

export default function Header({ className = "" }: HeaderProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-[458px] gap-y-4 self-stretch border-b border-solid border-[#F2F4F7] px-28 pb-[17px] pt-[18px] font-semibold leading-6 text-[#475467] [min-width:360px] min-[1430px]:flex-nowrap ${className}`}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 min-[1430px]:flex-nowrap" >
        <div className="flex items-center justify-center gap-x-2 self-stretch" >
          <div className="z-0 flex h-8 w-8 flex-shrink-0 rounded-lg">
            <div className="relative flex h-full w-full flex-shrink-0 flex-col items-center justify-end overflow-clip rounded-lg border-[0.3px] border-solid border-[#D0D5DD] [background-image:linear-gradient(180deg,_white,_#D0D5DD)]" >
              <div className="bg-bg-grid absolute inset-0 z-0 bg-cover bg-center" />
              <DotIcon className="z-[1] h-4 w-4 flex-shrink-0" />
              <div className="z-[2] flex h-2 flex-shrink-0 flex-col self-stretch" >
                <div className="-mt-2 h-4 flex-shrink-0 rounded-b-lg bg-white/20 backdrop-blur-[2.5px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-grow items-center justify-center gap-x-8 self-stretch pl-0.5" >
            <Logo className="h-8 w-24 flex-shrink-0" />
            <div className="pl-2">Home</div>
            <div>Products</div>
          </div>
          <ChevronDownIcon className="h-5 w-5 flex-shrink-0" />
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <div>Resources</div>
          <ChevronDownIcon className="h-5 w-5 flex-shrink-0" />
        </div>
        <div>Pricing</div>
      </div>
      <div className="flex items-center justify-center gap-x-[30px]">
        <div>Log in</div>
        <button className="flex items-center justify-center self-stretch rounded-lg border border-solid border-[#7F56D9] bg-[#7F56D9] px-[17px] py-[9px] drop-shadow-lg" >
          <div className="flex-grow text-center text-white">Sign up</div>
        </button>
      </div>
    </div>
  );
}

interface HeaderProps {
  className?: string;
}
