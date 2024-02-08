import StepContainer from "@/components/aminated/StepContainer";
import AddCouponEligibility from "@/components/coupons/AddCouponEligibility";
import AddCouponInfo from "@/components/coupons/AddCouponInfo";
import { useNavigate, useSearchParams } from "react-router-dom";

const defaultStep = "add-offer-info";

const AddCoupon = () => {
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
        <AddCouponInfo
          setStep={setStepHandler}
          nextStep="add-coupon-eligiblity"
        />
      </StepContainer>

      <StepContainer
        currentStep={step}
        expectedStep={"add-coupon-eligiblity"}
        exitDistance={-1400}
      >
        <AddCouponEligibility
          setStep={setStepHandler}
          prevStep="add-offer-info"
        />
      </StepContainer>
    </div>
  );
};

export default AddCoupon;
