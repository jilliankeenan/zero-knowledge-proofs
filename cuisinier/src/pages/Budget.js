import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { SteppedInput } from "../components/SteppedInput";
import { BudgetSlider } from "../components/BudgetSlider";
import { useStepper } from '../hooks/useStepper';
import { useBudgetSlider } from '../hooks/useBudgetSlider';
import styled from "styled-components";

const Container = styled.div`
    padding-left: 1.5rem;
    padding-right: 2rem;
`;

function Budget() {
    const { step, onStepUp, onStepDown } = useStepper();
    const { value, setValue } = useBudgetSlider();

    return (
        <Container>
            <Heading>Budget</Heading>
            <SubHeading>How much do you spend for the week?</SubHeading>
            <BudgetSlider value={value} onChange={setValue} />

            <SubHeading>How many people?</SubHeading>

            <SteppedInput
                value={step}
                onStepUp={onStepUp}
                onStepDown={onStepDown}
            />
        </Container>
    );
}

export default Budget;