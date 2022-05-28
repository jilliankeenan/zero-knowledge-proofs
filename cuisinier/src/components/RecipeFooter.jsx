import React from "react";
import styled from "styled-components";

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
        removeRecipe
    } = props;

    return (
        <Container>
            <Recipes>
                {recipes.map((recipe) => (
                    <Image key={recipe.name} onClick={removeRecipe(recipe)} src={recipe.image_path} />
                ))}
            </Recipes>
            <Price>
                £{budget}
            </Price>
        </Container>
    );
};
