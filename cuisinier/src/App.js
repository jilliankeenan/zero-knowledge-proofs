// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import React from "react";
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

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/complete" element={<Complete />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/grocers" element={<Grocers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/" element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
