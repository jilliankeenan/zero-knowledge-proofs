import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { RecipeCard } from "../components/RecipeCard";
import { RecipeFooter } from "../components/RecipeFooter";
import styled from "styled-components";
import { DataContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { calculateSupermarketPrice } from "../services/service";

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

const recipesMock = [
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
    const { budget, recipes, setRecipes, selectedRecipes, setSelectedRecipes, setGrocers } = React.useContext(DataContext);
    let navigate = useNavigate();

    const [isDirty, setIsDirty] = useState(false);


    const selectedRecipeValue = selectedRecipes.map((recipe) => (recipe.cost)).reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );

    const addRecipe = (thisRecipe) => () => {
        setIsDirty(true);
        if (selectedRecipes.length < 5) {
            setRecipes(recipes.filter((recipe) => {
                return recipe.name !== thisRecipe.name;
            }));
            setSelectedRecipes([...selectedRecipes, thisRecipe]);
        }
    };

    const removeRecipe = (removalRecipe) => () => {
        setRecipes([...recipes, removalRecipe]);
        setSelectedRecipes(selectedRecipes.filter((thisRecipe) => {
            return thisRecipe.name !== removalRecipe.name;
        }));
    };

    const onNext = () => {
        console.log('test', calculateSupermarketPrice(selectedRecipes))
        navigate("../grocers");

        setGrocers(calculateSupermarketPrice(selectedRecipes))
    };

    return (
        <>
            <HeadingContainer>
                <Heading>Your Mealplan</Heading>
                <SubHeading>What would you like?</SubHeading>
            </HeadingContainer>
            <HeadingContainer>
                {recipes.map((recipe, index) => (
                    <RecipeCard
                        key={recipe.name}
                        onClick={addRecipe(recipe)}
                        isLowest={!isDirty && index === 0}
                        {...recipe}
                    />
                ))}
            </HeadingContainer>
            <RecipeFooter
                budget={budget - selectedRecipeValue}
                recipes={selectedRecipes}
                removeRecipe={removeRecipe}
                onNext={onNext}
            />
        </>
    );
}

export default Recipe;