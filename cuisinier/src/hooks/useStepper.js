import { useState } from "react";

export const useStepper = () => {
    const [step, setStep] = useState(2);

    const onStepUp = () => {
        if (step < 6) {
            setStep(step + 1);
        }
    };

    const onStepDown = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return {
        step,
        onStepUp,
        onStepDown
    };
};