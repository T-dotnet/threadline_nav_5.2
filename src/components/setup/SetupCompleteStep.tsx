import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

interface SetupCompleteStepProps {
  reflectedChildName: string;
  mirroredJourneyStage: string;
  mirroredHardestAreasSentence: string;
  mirroredAvailableInfoSentence: string;
  stepHeadingClass: string;
  stepLeadClass: string;
  onBack: () => void;
  onViewProfile: () => void;
}

export function SetupCompleteStep({
  reflectedChildName,
  mirroredJourneyStage,
  mirroredHardestAreasSentence,
  mirroredAvailableInfoSentence,
  stepHeadingClass,
  stepLeadClass,
  onBack,
  onViewProfile,
}: SetupCompleteStepProps) {
  return (
    <>
      <div className="w-full max-w-2xl mx-auto p-8 sm:p-12 md:p-14 flex flex-col justify-between gap-10 min-h-[600px]">
        <div className="space-y-8 sm:space-y-10">
          <div>
            <h1 className={cn(stepHeadingClass, "max-w-[18ch]")}>
              Thank you. We&apos;ve got enough to get started.
            </h1>
            <p className={stepLeadClass}>Here&apos;s what we&apos;ve understood so far, based only on what you shared.</p>
          </div>

          <div className="bg-[var(--color-thread-off-white)]/70 p-8 rounded-tr-[24px] space-y-6">
            <div className="flex items-start gap-4">
              <Check className="w-5 h-5 text-[var(--color-thread-mid-green)] flex-shrink-0 mt-1" />
              <p className="text-[0.95rem] text-[var(--color-thread-dark-slate)] leading-relaxed">
                {mirroredJourneyStage}
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-5 h-5 text-[var(--color-thread-mid-green)] flex-shrink-0 mt-1" />
              <p className="text-[0.95rem] text-[var(--color-thread-dark-slate)] leading-relaxed">
                {mirroredHardestAreasSentence}
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-5 h-5 text-[var(--color-thread-mid-green)] flex-shrink-0 mt-1" />
              <p className="text-[0.95rem] text-[var(--color-thread-dark-slate)] leading-relaxed">
                {mirroredAvailableInfoSentence}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 w-full flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6">
          <button
            onClick={onBack}
            className="text-[0.84rem] font-medium text-slate-500 hover:text-slate-900 flex items-center justify-center sm:justify-start gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <Button
            onClick={onViewProfile}
            variant="mint"
            className="px-6 shadow-none w-full sm:w-auto"
          >
            See {reflectedChildName} profile <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </>
  );
}
