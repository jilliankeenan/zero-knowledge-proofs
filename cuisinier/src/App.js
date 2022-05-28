// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import React, { useState } from "react";
import { filterDietaryRequirements, allRecipes } from "./services/service";
import {
  Route,
  Routes
} from "react-router-dom";
import Budget from './pages/Budget'
import DietaryRequirements from './pages/DietaryRequirements'
import Grocers from './pages/Grocers'
import Complete from './pages/Complete'
import Recipe from './pages/Recipe'
import Entry from './pages/Entry'
import { useNavigate } from 'react-router-dom'

export const DataContext = React.createContext();

function App() {
  let navigate = useNavigate();
  const [dietary_requirement, setDietary_requirement] = useState('')
  const [budget, setBudget] = useState(50);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [grocers, setGrocers] = useState([]);

  const populateRecipes = (requirement) => {
    if (requirement) {
      setRecipes(filterDietaryRequirements(requirement));
    } else {
      setRecipes(allRecipes());
    }
    console.log('test')
    navigate("../recipe");
  };

  return (
    <DataContext.Provider value={{
      dietary_requirement,
      setDietary_requirement,
      budget,
      setBudget,
      populateRecipes,
      recipes,
      setRecipes,
      selectedRecipes,
      setSelectedRecipes,
      setGrocers,
      grocers
    }}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/complete" element={<Complete />} />
          <Route path="/grocers" element={<Grocers />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/dietary-requirements" element={<DietaryRequirements />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/" element={<Entry />} />
        </Routes>
      </ThemeProvider>
    </DataContext.Provider>
  );
}

export default App;
