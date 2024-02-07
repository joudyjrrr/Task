import StepContainer from "@/components/aminated/StepContainer";
import AuthContainer from "@/components/auth/AuthContainer";
import AddWallet from "@/components/auth/sign-up/AddWallet";
import CreateAccount from "@/components/auth/sign-up/CreateAccount";
import CreateKitchen from "@/components/auth/sign-up/CreateKitchen";
import SignUpSteps from "@/components/auth/sign-up/SignUpSteps";
import VerifyCommericalId from "@/components/auth/sign-up/VerifyCommericalId";
import VerifyId from "@/components/auth/sign-up/VerifyId";
import VerifyPhoneNumber from "@/components/auth/sign-up/VerifyPhoneNumber";
import { MouseEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const defaultStep = "create-account";
const SignUp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step") || defaultStep;

  const setStepHandler = (
    step: string,
    e: MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    navigate("?step=" + step);
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full hight-full bg-Gray-25 flex flex-col justify-between items-center gap-8">
      <SignUpSteps step={step} />

      <AuthContainer className="relative">
        <StepContainer currentStep={step} expectedStep={defaultStep}>
          <CreateAccount
            setStep={setStepHandler.bind(null, "verify-phone-number")}
            nextStep="verify-phone-number"
          />
        </StepContainer>

        <StepContainer currentStep={step} expectedStep={"verify-phone-number"}>
          <VerifyPhoneNumber setStep={setStepHandler.bind(null, "verify-id")} />
        </StepContainer>

        <StepContainer currentStep={step} expectedStep={"verify-id"}>
          <VerifyId
            setStep={setStepHandler.bind(null, "verify-commerical-id")}
          />
        </StepContainer>

        <StepContainer currentStep={step} expectedStep={"verify-commerical-id"}>
          <VerifyCommericalId
            setStep={setStepHandler.bind(null,"kitchen-details")}
          />
        </StepContainer>

        <StepContainer currentStep={step} expectedStep={"kitchen-details"}>
          <CreateKitchen
            setStep={setStepHandler.bind(null, "wallet-details")}
          />
        </StepContainer>

        <StepContainer currentStep={step} expectedStep={"wallet-details"}>
          <AddWallet />
        </StepContainer>
      </AuthContainer>
    </div>
  );
};

export default SignUp;
