import StepContainer from "@/components/aminated/StepContainer";
import CheckEmail from "@/components/auth/sign-in/CheckEmail";
import EmailVerified from "@/components/auth/sign-in/EmailVerified";
import React, { useState } from "react";

const EmailVerfication = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      <StepContainer currentStep={step} expectedStep={1}>
        <CheckEmail setStep={setStep} />
      </StepContainer>

      <StepContainer currentStep={step} expectedStep={1}>
        <EmailVerified setStep={setStep} />
      </StepContainer>
    </div>
  );
};

export default EmailVerfication;
