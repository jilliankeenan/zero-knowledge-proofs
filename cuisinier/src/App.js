// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import React, { useState }from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Budget from './pages/Budget'
import Profile from './pages/Profile'
import Grocers from './pages/Grocers'
import Splash from './pages/Splash'
import Complete from './pages/Complete'
import Recipe from './pages/Recipe'
import Entry from './pages/Entry'
import Selection from './pages/Selection'


export const DataContext = React.createContext();

function App() {
const [dietary_requirement, setDietary_requirement] = useState('')
const [budget, setBudget] = useState(50)

  return (
    <DataContext.Provider value={{
      dietary_requirement, 
      setDietary_requirement,
      budget,
      setBudget,
    }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/complete" element={<Complete />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/grocers" element={<Grocers />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/splash" element={<Splash />} />
            <Route path="/selection" element={<Selection />} />
            <Route path="/" element={<Entry />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </DataContext.Provider>
  );
}

export default App;
