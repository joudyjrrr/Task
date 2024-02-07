import StepContainer from "@/components/aminated/StepContainer";
import AuthContainer from "@/components/auth/AuthContainer";
import AddWallet from "@/components/auth/sign-up/AddWallet";
import CreateAccount from "@/components/auth/sign-up/CreateAccount";
import CreateKitchen from "@/components/auth/sign-up/CreateKitchen";
import SignUpSteps from "@/components/auth/sign-up/SignUpSteps";
import VerifyCommericalId from "@/components/auth/sign-up/VerifyCommericalId";
import VerifyId from "@/components/auth/sign-up/VerifyId";
import VerifyPhoneNumber from "@/components/auth/sign-up/VerifyPhoneNumber";
import { useNavigate, useSearchParams } from "react-router-dom";

const defaultStep = "create-account";
const SignUp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step") || defaultStep;

  const setStepHandler = (step: string) => {
    navigate("?step=" + step);
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full hight-full bg-Gray-25 flex flex-col justify-between items-center gap-8">
      <SignUpSteps step={step} />

      <AuthContainer className="relative">
        <StepContainer currentStep={step} expectedStep={defaultStep}>
          <CreateAccount
            setStep={setStepHandler}
            nextStep="verify-phone-number"
          />
        </StepContainer>

        <StepContainer currentStep={step} expectedStep={"verify-phone-number"}>
          <VerifyPhoneNumber
            nextStep="verfiy-id"
            setStep={setStepHandler.bind(null, "verify-id")}
          />
        </StepContainer>

        <StepContainer currentStep={step} expectedStep={"verify-id"}>
          <VerifyId
            nextStep="verify-commerical-id"
            setStep={setStepHandler.bind(null, "verify-commerical-id")}
          />
        </StepContainer>

        <StepContainer currentStep={step} expectedStep={"verify-commerical-id"}>
          <VerifyCommericalId
            nextStep="kitchen-detials"
            setStep={setStepHandler}
          />
        </StepContainer>

        <StepContainer currentStep={step} expectedStep={"kitchen-details"}>
          <CreateKitchen nextStep="wallet-details" setStep={setStepHandler} />
        </StepContainer>

        <StepContainer currentStep={step} expectedStep={"wallet-details"}>
          <AddWallet />
        </StepContainer>
      </AuthContainer>
    </div>
  );
};

export default SignUp;
