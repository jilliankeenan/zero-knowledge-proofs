import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { GrocerCard } from "../components/GrocerCard";
import styled from "styled-components";
import { DataContext } from '../App'

const HeadingContainer = styled.div`
    padding-left: 1.5rem;
    padding-right: 2rem;
`;

const grocersMock = [
    {
        "name": "Tesco",
        "image_path": "/assets/logos/tesco.png",
        "total": 52.50
    },
    {
        "name": "Asda",
        "image_path": "/assets/logos/asda.png",
        "total": 52.50
    },
    {
        "name": "Sainsburys",
        "image_path": "/assets/logos/sainsburys.png",
        "total": 52.50
    },
    {
        "name": "Marks & Spencers",
        "image_path": "/assets/logos/mands.png",
        "total": 52.50
    },
];

function Recipe() {
    const { grocers, setGrocers } = React.useContext(DataContext);

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
                {grocers.map((grocer, index) => (
                    <GrocerCard
                        key={grocer.name}
                        onClick={selectGrocer(grocer)}
                        isLowest={index === 0}
                        {...grocer}
                    />
                ))}
            </HeadingContainer>
        </>
    );
}

export default Recipe;