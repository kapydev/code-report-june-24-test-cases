import DotIconLarge from "./assets/DotIconLarge";

export default function LoginHero({ className = "" }: LoginHeroProps) {
  return (
    <div
      className={`flex items-end justify-center self-stretch px-[696px] pt-[90px] ${className}`}
    >
      <div className="z-0 flex h-12 w-12 flex-shrink-0 rounded-xl">
        <div className="relative flex h-full w-full flex-shrink-0 flex-col items-center justify-end overflow-clip rounded-xl border-[0.45px] border-solid border-[#D0D5DD] [background-image:linear-gradient(180deg,_white,_#D0D5DD)]" >
          <div className="bg-bg-grid-0 absolute inset-0 z-0 bg-cover bg-center" />
          <DotIconLarge className="z-[1] h-6 w-6 flex-shrink-0" />
          <div className="z-[2] flex h-3 flex-shrink-0 flex-col self-stretch">
            <div className="-mt-3 h-6 flex-shrink-0 rounded-b-xl bg-white/20 backdrop-blur-[3.8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface LoginHeroProps {
  className?: string;
}
