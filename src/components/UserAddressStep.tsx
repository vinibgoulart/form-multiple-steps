import { Button, Card, Input, Typography } from "@mui/material";

type UserAddressStepProps = {
  step: number;
  currentStep: number;
  nextStep: () => void;
};

export const UserAddressStep = ({
  step,
  currentStep,
  nextStep,
}: UserAddressStepProps) => {
  const isConfirmed = currentStep > step;
  const disabled = currentStep < step;

  const onClick = () => {
    nextStep();
  };

  return (
    <Card sx={{ p: 2, m: 2 }}>
      <Typography>Step {step}:</Typography>
      <Input placeholder="address" disabled={disabled || isConfirmed} />
      <Button disabled={disabled || isConfirmed} onClick={onClick}>
        Confirm
      </Button>
    </Card>
  );
};
