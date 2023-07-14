import React from "react";
import css from "./RecipeCard.module.css";

function RecipeCard({ recipe, selected, onClick, onContextMenu }) {
  return (
    <div
      style={{
        border: selected ? " 1px solid green" : "inherit",
      }}
      className={css.Beer}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      <img className={css.BeerImage} src={recipe.image_url} alt="" />
      <h3>{recipe.name}</h3>
      <p>{recipe.tagline}</p>
    </div>
  );
}

export default RecipeCard;
