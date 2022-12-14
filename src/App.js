import React from "react";
import Meal from "./componants/Meal";
import { Routes , Route } from "react-router-dom";
import RecipeInfo from "./componants/RecipeInfo";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={ <Meal/>} />
      <Route path="/:MealId" element={<RecipeInfo/> } />
      </Routes>
    </>
);
}

export default App;
