import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [url, setUrl] = useState('');
  const [ing, setIng] = useState('');
  const [prep, setPrep] = useState('');

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  const deleteHandler=(food)=>{
    setRecipes(recipes.filter((recipe)=> recipe !== food))
  }
  

  
  const nameChange=(evt)=> setName(evt.target.value)
  const cuisineChange=(evt)=> setCuisine(evt.target.value)
  const urlChange=(evt)=> setUrl(evt.target.value)
  const ingChange=(evt)=> setIng(evt.target.value)
  const prepChange=(evt)=>setPrep(evt.target.value)
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  
  const addRecipe=(evt)=>{
    evt.preventDefault()
    const newRecipe={
      name:`${name}`,
      cuisine:`${cuisine}`,
      photo:`${url}`,
      ingredients:`${ing}`,
      preparation:`${prep}`,
    }
    setRecipes([...recipes, newRecipe ])
    setName('')
    setCuisine('')
    setUrl('')
    setIng('')
    setPrep('')
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList RecipeData={recipes} deleteHandler={deleteHandler} />
      <RecipeCreate 
        addRecipe={addRecipe}
        nameChange={nameChange}
        cuisineChange={cuisineChange}
        urlChange={urlChange}
        ingChange={ingChange}
        prepChange={prepChange}
        
        />
    </div>
  );
}



export default App;
