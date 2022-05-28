import { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { GrocerCard } from "../components/GrocerCard";
import styled from "styled-components";

const HeadingContainer = styled.div`
    padding-left: 1.5rem;
    padding-right: 2rem;
`;

const grocersMock = [
    {
        "name": "Tesco",
        "image_path": "/assets/test.jpeg",
        "total": 52.50
    },
];

function Recipe() {
    const [grocers, setGrocers] = useState(grocersMock);

    const selectGrocer = (grocer) => () => {
        console.log({ grocer })
    };

    return (
        <>
            <HeadingContainer>
                <Heading>Checkout</Heading>
                <SubHeading>Choose the most suitable grocer?</SubHeading>
            </HeadingContainer>
            <HeadingContainer>
                {grocers.map((grocer) => (
                    <GrocerCard
                        key={grocer.name}
                        onClick={selectGrocer(grocer)}
                        {...grocer}
                    />
                ))}
            </HeadingContainer>
        </>
    );
}

export default Recipe;