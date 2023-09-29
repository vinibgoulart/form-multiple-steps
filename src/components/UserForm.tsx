import { useState } from "react";
import { useStepCount } from "../hooks/useStepCount";
import { UserNameStep } from "./UserNameStep";
import { UserAgeStep } from "./UserAgeStep";
import { Button, Card, Stack, Typography } from "@mui/material";
import { UserAddressStep } from "./UserAddressStep";

const USER_FORM_STEPS = {
  NAME: "NAME",
  AGE: "AGE",
  ADDRESS: "ADDRESS",
};

export const UserForm = () => {
  const [count] = useStepCount();
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(currentStep + 1);

  const steps = {
    [USER_FORM_STEPS.NAME]: count(),
    [USER_FORM_STEPS.AGE]: count(),
    [USER_FORM_STEPS.ADDRESS]: count(),
  };

  const resetForm = () => {
    setCurrentStep(steps[USER_FORM_STEPS.NAME]);
  };

  const disabled = currentStep <= Object.keys(steps).length;

  const onSubmit = () => {
    alert("Finished");
    resetForm();
  };

  return (
    <Stack>
      <Card sx={{ p: 2, m: 2 }} variant="outlined">
        <Typography>Current step {currentStep}:</Typography>
      </Card>
      <UserNameStep
        nextStep={nextStep}
        currentStep={currentStep}
        step={steps[USER_FORM_STEPS.NAME]}
      />
      <UserAgeStep
        nextStep={nextStep}
        currentStep={currentStep}
        step={steps[USER_FORM_STEPS.AGE]}
      />
      <UserAddressStep
        nextStep={nextStep}
        currentStep={currentStep}
        step={steps[USER_FORM_STEPS.ADDRESS]}
      />
      <Button disabled={disabled} onClick={onSubmit}>
        Finish Form
      </Button>
    </Stack>
  );
};
