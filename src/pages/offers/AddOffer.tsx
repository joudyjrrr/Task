import StepContainer from "@/components/aminated/StepContainer";
import AddOfferFirstSection from "@/components/offers/AddOfferFirstSection";
import React from "react";

const 

const AddOffer = () => {
  const setStepHandler = () => {};

  return (
    <div>
      <StepContainer currentStep={step} expectedStep={defaultStep}>
        <AddOfferFirstSection
          setStep={setStepHandler}
          nextStep="verify-phone-number"
        />
      </StepContainer>
    </div>
  );
};

export default AddOffer;
