import React from "react";
import styled from "styled-components";

const Container = styled.div`
    font-size: 1.25rem;
    border-bottom: 1px solid ${(props) => props.theme.color.gray};
    color: ${(props) => props.theme.color.text};
    padding-left: 1.5rem;
    padding-right: 2rem;
`;

const Label = styled.p`
    font-size: 1.25rem;
    margin-bottom: 0;
`;

const SubLabel = styled.p`
    font-size: 1rem;
    margin-top: 0;
`;

export const DietaryRequirementItem = (props) => {
    const { label, subLabel, onClick } = props;


    return (
        <Container onClick={onClick}>
            <Label>{label}</Label>
            <SubLabel>{subLabel}</SubLabel>
        </Container>
    );
};
