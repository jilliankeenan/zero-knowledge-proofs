import recipes from "./recipe_manual.json";

const tescoLogoPath = "public/assets/logos/teso.png";
const asdaLogoPath = "public/assets/logos/asda.png";
const sainsburysLogoPath = "public/assets/logos/sainsburys.png";
const mandsLogoPath = "public/assets/logos/mands.png";

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
  return trueCost;
}

function getTotalCost() {}

export function calculateSupermarketPrice(recipes) {
  console.log("recipes", recipes);

  let calculatedRecipeCosts = [];
  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i];
    calculatedRecipeCosts.push({
      tescoCost: getCost(recipe.cost, "tesco"),
      asdaCost: getCost(recipe.cost, "asda"),
      sainsburysCost: getCost(recipe.cost, "sainsburys"),
      mandsCost: getCost(recipe.cost, "mands"),
    });
  }

  const tescoTotalCost = calculatedRecipeCosts
    .map((x) => x.tescoCost)
    .reduce((previous, current) => {
      return previous + current;
    }, 0);
  const asdaTotalCost = calculatedRecipeCosts
    .map((x) => x.asdaCost)
    .reduce((previous, current) => {
      return previous + current;
    }, 0);
  const sainsburysTotalCost = calculatedRecipeCosts
    .map((x) => x.sainsburysCost)
    .reduce((previous, current) => {
      return previous + current;
    }, 0);
  const mandsTotalCost = calculatedRecipeCosts
    .map((x) => x.mandsCost)
    .reduce((previous, current) => {
      return previous + current;
    }, 0);
  let totalCosts = [
    {
      name: "Tesco",
      imagePath: tescoLogoPath,
      total: tescoTotalCost.toFixed(2),
    },
    {
      name: "Asda",
      imagePath: asdaLogoPath,
      total: asdaTotalCost.toFixed(2),
    },
    {
      name: "Sainsburys",
      imagePath: sainsburysLogoPath,
      total: sainsburysTotalCost.toFixed(2),
    },
    {
      name: "M&S",
      imagePath: mandsLogoPath,
      total: mandsTotalCost.toFixed(2),
    },
  ];
  return totalCosts;
}

export function allRecipes() {
  console.log({ recipes })
  return recipes;
}
