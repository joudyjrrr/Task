import { varSlide } from "@/animation/variants/slide";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface StepContainerProps {
  currentStep: number | string;
  expectedStep: number | string;
  children: React.ReactNode;
  className?: string;
}

const { inLeft } = varSlide({ distance: 600, exitDistance: -600 });

const StepContainer: React.FunctionComponent<StepContainerProps> = ({
  currentStep,
  expectedStep,
  className,
  children,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={inLeft.initial}
        animate={currentStep === expectedStep ? inLeft.animate : inLeft.exit}
        className={cn(
          "w-full",
          className,
          currentStep !== expectedStep && "absolute top-0"
        )}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default StepContainer;
