import { Button, Card, Input, Typography } from "@mui/material";

type UserNameStepProps = {
  step: number;
  currentStep: number;
  nextStep: () => void;
};

export const UserNameStep = ({
  step,
  currentStep,
  nextStep,
}: UserNameStepProps) => {
  const isConfirmed = currentStep > step;
  const disabled = currentStep < step;

  const onClick = () => {
    nextStep();
  };

  return (
    <Card sx={{ p: 2, m: 2 }}>
      <Typography>Step {step}:</Typography>
      <Input placeholder="name" disabled={disabled || isConfirmed} />
      <Button disabled={disabled || isConfirmed} onClick={onClick}>
        Confirm
      </Button>
    </Card>
  );
};
