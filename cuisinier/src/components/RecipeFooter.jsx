import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Container = styled.div`
    position: fixed;
    height: 60px;
    background-color: white;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Image = styled.img`

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    animation: fadein .2s;
    height: 50px;
    width: 50px;
    margin-left: .5rem;
    border-radius: 8px;
`;

const Recipes = styled.div`
    display: flex;
`

const Price = styled.p`
    font-size: 1.25rem;
    margin-bottom: 0rem;
    margin-top: 0rem;
    margin-right: 1rem;
`;

export const RecipeFooter = (props) => {
    const {
        recipes,
        budget,
        removeRecipe,
        onNext
    } = props;
    const showButton = recipes.length === 5;

    return (
        <Container>
            <Recipes>
                {recipes.map((recipe) => (
                    <Image key={recipe.name} onClick={removeRecipe(recipe)} src={recipe.image_path} />
                ))}
            </Recipes>
            {!showButton && (
                <Price>
                    £{budget}
                </Price>
            )}
            {showButton && (
                <Button onButtonClick={onNext}>Next</Button>
            )}
        </Container>
    );
};
