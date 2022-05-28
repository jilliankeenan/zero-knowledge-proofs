import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    height: 2rem;
`;

const Button = styled.button`
    height: 46px;
    width: 46px;
    font-size: 1.25rem;
`;

const Input = styled.input`
    height: 40px;
    text-align: center;
    font-size: 1.25rem;
`;

export const SteppedInput = (props  ) => {
    const { onStepUp, onStepDown, value } = props;


    return (
        <Container>
            <Button onClick={onStepDown}>-</Button>
            <Input value={value} />
            <Button onClick={onStepUp}>+</Button>
        </Container>
    );
};
