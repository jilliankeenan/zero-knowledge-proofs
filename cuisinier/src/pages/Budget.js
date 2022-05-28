import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { SteppedInput } from "../components/SteppedInput";
import { BudgetSlider } from "../components/BudgetSlider";
import { useStepper } from '../hooks/useStepper';
import { useBudgetSlider } from '../hooks/useBudgetSlider';

function Budget() {
    const { step, onStepUp, onStepDown } = useStepper();
    const { value, setValue } = useBudgetSlider();

    return (
        <>
            <Heading>Budget</Heading>
            <SubHeading>How much do you spend for the week?</SubHeading>
            <BudgetSlider value={value} onChange={setValue} />

            <SubHeading>How many people?</SubHeading>

            <SteppedInput
                value={step}
                onStepUp={onStepUp}
                onStepDown={onStepDown}
            />
        </>
    );
}

export default Budget;