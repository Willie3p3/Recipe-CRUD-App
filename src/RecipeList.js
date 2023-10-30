import React from "react";

function RecipeList({ RecipeData, deleteHandler }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  const recipeMap= RecipeData.map((food,index)=>(
    <tr key={index}>
      <td>{food.name}</td> 
      <td>{food.cuisine}</td>
      <td><img src={food.photo} /> </td>
      <td className="content_td"><p>{(food.ingredients)}</p></td>
      <td className="content_td"><p>{food.preparation}</p></td>
      <td><button  onClick={()=> deleteHandler(food)} name="delete">Delete</button></td>
    </tr>
  ))

  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>  
          {recipeMap}
        </tbody>
      </table>
    </div>
  );
}


export default RecipeList;
