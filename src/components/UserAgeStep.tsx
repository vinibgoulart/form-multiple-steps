import { Button, Card, Input, Typography } from "@mui/material";

type UserAgeStepProps = {
  step: number;
  currentStep: number;
  nextStep: () => void;
};

export const UserAgeStep = ({
  step,
  currentStep,
  nextStep,
}: UserAgeStepProps) => {
  const isConfirmed = currentStep > step;
  const disabled = currentStep < step;

  const onClick = () => {
    nextStep();
  };

  return (
    <Card sx={{ p: 2, m: 2 }}>
      <Typography>Step {step}:</Typography>
      <Input
        placeholder="age"
        type="number"
        disabled={disabled || isConfirmed}
      />
      <Button disabled={disabled || isConfirmed} onClick={onClick}>
        Confirm
      </Button>
    </Card>
  );
};
