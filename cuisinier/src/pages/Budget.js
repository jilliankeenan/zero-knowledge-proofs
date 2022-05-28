import React from 'react';
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { SteppedInput } from "../components/SteppedInput";
import { BudgetSlider } from "../components/BudgetSlider";
import { useStepper } from '../hooks/useStepper';
import { useBudgetSlider } from '../hooks/useBudgetSlider';
import { Button } from '../components/Button';
import styled from "styled-components";
import { DataContext } from '../App'
import { useNavigate } from 'react-router-dom'

const ButtonContainer = styled.div`
    margin-left: 230px;
    margin-top: 80px;
`
function Budget() {
    const dataContext = React.useContext(DataContext);
    const { step, onStepUp, onStepDown } = useStepper();
    const { value, setValue } = useBudgetSlider();
    let navigate = useNavigate();

    const handleButtonClick = () => {
        dataContext.setBudget(value);
        navigate("../dietary-requirements", { replace: true });
    }

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
            <ButtonContainer>
                <Button onButtonClick={() => handleButtonClick()}>Next</Button>
            </ButtonContainer>
        </>
    );
}

export default Budget;