import Mail from "./assets/Mail";
import LearnMoreButton from "./LearnMoreButton";

export default function FeatureCard({ className = "" }: FeatureCardProps) {
  return (
    <div className={`flex flex-shrink-0 flex-col gap-y-2 ${className}`}>
      <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-full bg-[#F4EBFF] p-3" >
        <Mail className="h-6 w-6 flex-shrink-0" />
      </div>
      <div className="pt-3 text-xl font-semibold leading-[30px] text-[#101828]" >
        Share team inboxes
      </div>
      <p>
        Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
      </p>
      <LearnMoreButton buttonText="Learn more" />
    </div>
  );
}

interface FeatureCardProps {
  className?: string;
}
