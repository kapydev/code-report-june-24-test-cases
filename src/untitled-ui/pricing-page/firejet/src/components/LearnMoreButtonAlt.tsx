import ArrowRight2 from "./assets/ArrowRight2";

export default function LearnMoreButtonAlt({
  className = "",
  text = "Learn more",
}: LearnMoreButtonAltProps) {
  return (
    <div className={`flex items-end pt-3 ${className}`}>
      <div className="flex items-center justify-center gap-x-2">
        <div className="font-semibold text-[#6941C6]">{text}</div>
        <ArrowRight2 className="h-5 w-5 flex-shrink-0" />
      </div>
    </div>
  );
}

interface LearnMoreButtonAltProps {
  className?: string;
  text: string;
}
