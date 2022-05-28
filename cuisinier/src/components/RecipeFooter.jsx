import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    height: 75px;
    background-color: white;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: .5rem;
    display: flex;
    justify-conten: space-between;
`;

const Image = styled.img`
    height: 50px;
    width: 50px;
    margin-left: .5rem;
`;

const Recipes = styled.div`
    display: flex;
`

const Price = styled.p`
    font-size: 1.25rem;
    margin-bottom: 0rem;
    margin-top: 0rem;
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
                    <Image onClick={removeRecipe(recipe)} src={recipe.image_path} />
                ))}
            </Recipes>
            <Price>
                {budget}
            </Price>
        </Container>
    );
};
