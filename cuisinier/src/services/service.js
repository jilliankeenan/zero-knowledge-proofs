import recipes from "./recipe_manual.json";

export function recipesToString() {
  return JSON.stringify(recipes);
}

export function filterDietaryRequirements(requirement) {
  console.log(requirement);
  const filtered = recipes.filter((x) =>
    x.dietary_requirements.includes(requirement)
  );
  console.log(filtered.length);
  return filtered;
}
const modifiers = {
  tesco: 1 + 0.05,
  asda: 1 + 0.1,
  sainsburys: 1 + 0.2,
  mands: 1 + 0.5,
};
function getCost(baseCost, shop) {
  const trueCost = baseCost * modifiers[shop] + Math.random();
  return trueCost.toFixed(2);
}

export function calculateSupermarketPrice(recipes) {
  console.log("recipes", recipes);

  let calculatedRecipeCosts = [];
  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i];
    calculatedRecipeCosts.push({
      recipeName: recipe.name,
      tescoCost: getCost(recipe.cost, "tesco"),
      asdaCost: getCost(recipe.cost, "asda"),
      sainsburysCost: getCost(recipe.cost, "sainsburys"),
      mandsCost: getCost(recipe.cost, "mands"),
    });
  }
  return calculatedRecipeCosts;
}

export function allRecipes() {
  console.log({ recipes })
  return recipes;
}
