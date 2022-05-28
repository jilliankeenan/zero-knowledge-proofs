import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { DietaryRequirementItem } from "../components/DietaryRequirementItem";
import styled from "styled-components";

const HeadingContainer = styled.div`
    padding-left: 1.5rem;
    padding-right: 2rem;
`;

function Profile() {
    return (
        <>
            <HeadingContainer>
                <Heading>Dietary Requirements</Heading>
                <SubHeading>How much do you spend for the week?</SubHeading>
            </HeadingContainer>
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

export default Profile;