import StepContainer from "@/components/aminated/StepContainer";
import AddOfferInfo from "@/components/offers/AddOfferInfo";
import OfferPreview from "@/components/offers/OfferPreview";
import { useNavigate, useSearchParams } from "react-router-dom";

const defaultStep = "create-account";
const AddOffer = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const step = searchParams.get("step") || defaultStep;

  const setStepHandler = (step: string) => {
    navigate("?step=" + step);
  };

  return (
    <div>
      <StepContainer
        currentStep={step}
        expectedStep={defaultStep}
        exitDistance={-1400}
      >
        <AddOfferInfo
          setStep={setStepHandler}
          nextStep="add-offer-eligibility"
        />
      </StepContainer>

      <StepContainer
        currentStep={step}
        expectedStep={"add-offer-eligibility"}
        exitDistance={-1400}
      >
        <AddOfferInfo setStep={setStepHandler} nextStep="preview-offer" />
      </StepContainer>

      <StepContainer
        currentStep={step}
        expectedStep={"preview-offer"}
        exitDistance={-1400}
      >
        <OfferPreview
          setStep={setStepHandler}
          prevStep="add-offer-eligibility"
        />
      </StepContainer>
    </div>
  );
};

export default AddOffer;
