import ArrowRight from "./assets/ArrowRight";

export default function LearnMoreButton({
  className = "",
  buttonText = "Learn more",
}: LearnMoreButtonProps) {
  return (
    <div className={`flex items-end pt-3 ${className}`}>
      <div className="flex items-center justify-center gap-x-2">
        <div className="font-semibold text-[#6941C6]">{buttonText}</div>
        <ArrowRight className="h-5 w-5 flex-shrink-0" />
      </div>
    </div>
  );
}

interface LearnMoreButtonProps {
  className?: string;
  buttonText: string;
}
