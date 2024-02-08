import { varSlide } from "@/animation/variants/slide";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface StepContainerProps {
  currentStep: number | string;
  expectedStep: number | string;
  children: React.ReactNode;
  className?: string;
  distance?: number;
  exitDistance?: number;
}

const StepContainer: React.FunctionComponent<StepContainerProps> = ({
  distance,
  exitDistance,
  currentStep,
  expectedStep,
  className,
  children,
}) => {
  
  const { inLeft } = varSlide({
    distance: distance || 600,
    exitDistance: exitDistance || -600,
  });
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
