import StepContainer from "@/components/aminated/StepContainer";
import AddOfferFirstSection from "@/components/offers/AddOfferFirstSection";
import React, { FC } from "react";

 

const AddOffer:FC<{step : number ; defaultStep : number , setStepHandler :(arg :number)=>void}> = ({defaultStep , step , se}) => {
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
