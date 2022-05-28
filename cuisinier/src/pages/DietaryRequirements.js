import React from 'react';
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { DietaryRequirementItem } from "../components/DietaryRequirementItem";
import styled from "styled-components";
import { DataContext } from '../App'

const HeadingContainer = styled.div`
    padding-left: 1.5rem;
    padding-right: 2rem;
`;

function DietaryRequirements() {
    const dataContext = React.useContext(DataContext);

    const onClick = (requirement) => () => {
        dataContext.populateRecipes(requirement);
    };

    return (
        <>
            <HeadingContainer>
                <Heading>Dietary Requirements</Heading>
                <SubHeading>How much do you spend for the week?</SubHeading>
            </HeadingContainer>
            <>
                <DietaryRequirementItem onClick={onClick()} label="No requirements" subLabel="All recipes are suitable" />
                <DietaryRequirementItem onClick={onClick("Vegetarian")} label="Vegetarian" subLabel="Only vegetable-based" />
                <DietaryRequirementItem onClick={onClick("Vegan")} label="Vegan" subLabel="Only plant-based" />
                <DietaryRequirementItem onClick={onClick("Pescaterian")} label="Pescaterian" subLabel="Only seafood" />
                <DietaryRequirementItem onClick={onClick("Keto")} label="Keto" subLabel="Low carbohydrate" />
            </>
        </>
    );
}

export default DietaryRequirements;