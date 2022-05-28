import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { SteppedInput } from "../components/SteppedInput";
import { BudgetSlider } from "../components/BudgetSlider";
import { DietaryRequirementItem } from "../components/DietaryRequirementItem";
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

            <>
                <DietaryRequirementItem label="No requirements" subLabel="All recipes are suitable" />
                <DietaryRequirementItem label="Vegetarian" subLabel="Only vegetable-based" />
                <DietaryRequirementItem label="Vegan" subLabel="Only plant-based" />
                <DietaryRequirementItem label="Pescaterian" subLabel="Only seafood" />
                <DietaryRequirementItem label="Keto" subLabel="Low carbohydrate" />
            </>
        </>
    );
}

export default Budget;