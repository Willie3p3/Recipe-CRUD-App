import React, { useState } from "react";

function RecipeCreate({ addRecipe,nameChange,cuisineChange,urlChange,ingChange,prepChange }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form onSubmit={addRecipe} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input onChange={nameChange} name="name" Placeholder="Name"/>
            </td>
            <td>
             <input onChange={cuisineChange} name="cuisine" Placeholder="Cuisine" />
            </td>
            <td>
             <input onChange={urlChange} name="photo" Placeholder="Url" />
            </td>
            <td>
             <textarea onChange={ingChange} name="ingredients" Placeholder="Ingredients" />
            </td>
            <td>
             <textarea onChange={prepChange} name="preparation" Placeholder="Preparation" />
            </td>
            <td>
              <button  type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
