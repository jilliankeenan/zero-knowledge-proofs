import { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { RecipeCard } from "../components/RecipeCard";
import { RecipeFooter } from "../components/RecipeFooter";
import styled from "styled-components";

const HeadingContainer = styled.div`
    padding-left: 1.5rem;
    padding-right: 2rem;
`;

const Container = styled.div`
position: relative;

`;

const Content = styled.div`
margin-bottom: 50px;

`;

const recipes = [
    {
        "name": "Chicken pasta bake",
        "dietary_requirements": ["Vegetarian"],
        "image_path": "/assets/test.jpeg",
        "cost": 11
    },
    {
        "name": "Tasty Boi",
        "dietary_requirements": ["Vegetarian"],
        "image_path": "/assets/test.jpeg",
        "cost": 9
    },
];

function Recipe() {
    const budget = 50;
    const [selectedRecipes, setSelectedRecipes] = useState([]);

    const addRecipe = (recipe) => () => {
        // remove from recipes list
        setSelectedRecipes([...selectedRecipes, recipe]);
    };

    const removeRecipe = (removalRecipe) => () => {
        // add to recipes list
        setSelectedRecipes(recipes.filter((recipe) => {
            return recipe.name !== removalRecipe.name;
        }));
    };

    return (
        <>
            <HeadingContainer>
                <Heading>Your Mealplan</Heading>
                <SubHeading>What would you like?</SubHeading>
            </HeadingContainer>
            <HeadingContainer>
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.name}
                        onClick={addRecipe(recipe)}
                        {...recipe}
                    />
                ))}
            </HeadingContainer>
            <RecipeFooter
                budget={budget}
                recipes={selectedRecipes}
                removeRecipe={removeRecipe}
            />
        </>
    );
}

export default Recipe;