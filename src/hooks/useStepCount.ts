import { useRef } from "react";

export const useStepCount = () => {
  const stepCount = useRef<number>();

  stepCount.current = 0;

  const fn = () => {
    stepCount.current = (stepCount.current || 0) + 1;

    return stepCount.current;
  };

  return [fn, stepCount] as const;
};
