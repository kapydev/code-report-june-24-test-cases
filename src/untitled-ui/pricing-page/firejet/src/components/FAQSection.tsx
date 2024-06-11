export default function FAQSection({ className = "" }: FAQSectionProps) {
  return (
    <div
      className={`flex flex-shrink-0 flex-col gap-y-2 self-stretch ${className}`}
    >
      <div className="text-lg font-semibold leading-7 text-[#101828]">
        Is there a free trial available?
      </div>
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
      </p>
      <div className="pt-14 text-lg font-semibold leading-7 text-[#101828]">
        Can other info be added to an invoice?
      </div>
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
      </p>
    </div>
  );
}

interface FAQSectionProps {
  className?: string;
}
