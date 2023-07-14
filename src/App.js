import React, { useEffect, useState } from 'react';
import useStore from './store';
import './App.css';
import RecipeCard from './components/RecipeCard/RecipeCard';
import SingleRecipe from './components/SingleRecipe/SingleRecipe'
import Button from './components/button/Button'


function App() {
  const recipes = useStore((state) => state.recipes);
  const selectedRecipes = useStore((state) => state.selectedRecipes);
  const loadRecipes = useStore((state) => state.loadRecipes);
  const loadMoreRecipes = useStore((state) => state.loadMoreRecipes)
  const currentPage = useStore((state) => state.currentPage);
  const toggleRecipeSelection = useStore((state) => state.toggleRecipeSelection);
  const deleteSelectedRecipes = useStore((state) => state.deleteSelectedRecipes);

  useEffect(() => {
    loadRecipes(currentPage);
  }, [loadRecipes, currentPage]);

  const [selectedRecipeId, setSelectedRecipeId] = useState();

  const handleRecipeClick = (recipeId) => {
    setSelectedRecipeId(recipeId);
  };

  const handleRecipeRightClick = (event, recipeId) => {
    event.preventDefault();
    toggleRecipeSelection(recipeId);
  };

  const handleDeleteClick = () => {
    deleteSelectedRecipes();
    loadMoreRecipes();
  };
  const handleLoadMore = () => {
    loadMoreRecipes();
  };


  const handleBackClick = () => {
    setSelectedRecipeId(null);
  };

  const renderRecipeList = () => {
    return (
      <>
        <div className='Beer-wrapper'>
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              selected={selectedRecipes.has(recipe.id)}
              onClick={() => handleRecipeClick(recipe.id)}
              onContextMenu={(event) => handleRecipeRightClick(event, recipe.id)}
            />
          ))}
          {selectedRecipes.size > 0 && (
            <button className='delete-button' onClick={handleDeleteClick}>Delete</button>
          )}
        </div>
        {recipes.length > 0 && < Button onClick={handleLoadMore} />}
      </>

    );
  };

  const renderSingleRecipe = () => {
    const selectedRecipe = recipes.find((recipe) => recipe.id === selectedRecipeId);
    return (
      <div>
        <SingleRecipe recipe={selectedRecipe} />
        <button className='back-button' onClick={handleBackClick}>Back</button>
      </div>
    );
  };

  return (
    <div className="App">
      {selectedRecipeId ? renderSingleRecipe() : renderRecipeList()}

    </div>
  );
}

export default App;