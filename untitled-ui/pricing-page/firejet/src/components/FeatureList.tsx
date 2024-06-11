import CheckIcon from "./assets/CheckIcon";

export default function FeatureList({
  className = "",
  containerClassName = "",
  text = "Access to all basic features",
  text1 = "Basic reporting and analytics",
  text2 = "Up to 10 individual users",
  text3 = "20GB individual data each user",
  text4 = "Basic chat and email support",
}: FeatureListProps) {
  return (
    <div
      className={`flex flex-col gap-y-4 pt-7 ${containerClassName} ${className}`}
    >
      <div className="flex items-center justify-center gap-x-3">
        <CheckIcon className="h-6 w-6 flex-shrink-0 rounded-full" />
        <div className="w-72 flex-shrink-0 self-stretch">{text}</div>
      </div>
      <div className="flex items-center justify-center gap-x-3">
        <CheckIcon className="h-6 w-6 flex-shrink-0 rounded-full" />
        <div className="w-72 flex-shrink-0 self-stretch">{text1}</div>
      </div>
      <div className="flex items-center justify-center gap-x-3">
        <CheckIcon className="h-6 w-6 flex-shrink-0 rounded-full" />
        <div className="w-72 flex-shrink-0 self-stretch">{text2}</div>
      </div>
      <div className="flex items-center justify-center gap-x-3">
        <CheckIcon className="h-6 w-6 flex-shrink-0 rounded-full" />
        <div className="w-72 flex-shrink-0 self-stretch">{text3}</div>
      </div>
      <div className="flex items-center justify-center gap-x-3">
        <CheckIcon className="h-6 w-6 flex-shrink-0 rounded-full" />
        <div className="w-72 flex-shrink-0 self-stretch">{text4}</div>
      </div>
    </div>
  );
}

interface FeatureListProps {
  className?: string;
  containerClassName: string;
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}
