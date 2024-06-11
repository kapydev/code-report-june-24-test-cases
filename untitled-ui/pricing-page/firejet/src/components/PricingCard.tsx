import HandDrawnArrow from "./assets/HandDrawnArrow";
import FeatureList from "./FeatureList";

export default function PricingCard({ className = "" }: PricingCardProps) {
  return (
    <div
      className={`flex flex-shrink-0 flex-col items-center justify-center gap-y-1 rounded-2xl border border-solid border-[#E4E7EC] px-8 pb-8 pt-10 [box-shadow:_0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)] ${className}`}
    >
      <div className="text-center text-5xl font-semibold leading-[60px] tracking-[-0.32px] text-[#101828]" >
        $10/mth
      </div>
      <HandDrawnArrow className="absolute right-6 top-0 h-8 w-[69px] flex-shrink-0" />
      <div className="self-stretch pt-3 text-center text-xl font-semibold leading-[30px] text-[#101828]" >
        Basic plan
      </div>
      <div className="self-stretch text-center">Billed annually.</div>
      <FeatureList
        text="Access to all basic features"
        text1="Basic reporting and analytics"
        text2="Up to 10 individual users"
        text3="20GB individual data each user"
        text4="Basic chat and email support"
        containerClassName="self-stretch"
       />
      <div className="flex flex-col justify-end self-stretch pt-9">
        <button className="flex items-center justify-center rounded-lg border border-solid border-[#7F56D9] bg-[#7F56D9] p-[11px] drop-shadow-lg" >
          <div className="flex-grow text-center font-semibold text-white">
            Get started
          </div>
        </button>
      </div>
    </div>
  );
}

interface PricingCardProps {
  className?: string;
}
