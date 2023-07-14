import css from "./SingleRecipe.module.css";
function SingleRecipe({ recipe }) {
  return (
    <div className={css.PageWrapper}>
      <img className={css.Image} src={recipe.image_url} alt="" />
      <div className={css.TextBox}>
        <h2>{recipe.name}</h2>
        <h3>{recipe.tagline}</h3>
        <p>{recipe.description}</p>
        <h3>Description</h3>
        <p>
          <strong>First Brewed:</strong> {recipe.first_brewed}
        </p>
        <p>
          <strong>ABV (Alcohol by Volume):</strong> {recipe.abv}%
        </p>
        <p>
          <strong>IBU (International Bitterness Units):</strong> {recipe.ibu}
        </p>
        <p>
          <strong>Target Final Gravity:</strong> {recipe.target_fg}
        </p>
        <p>
          <strong>Target Original Gravity:</strong> {recipe.target_og}
        </p>
        <p>
          <strong>EBC (European Brewery Convention):</strong> {recipe.ebc}
        </p>
        <p>
          <strong>SRM (Standard Reference Method):</strong> {recipe.srm}
        </p>
        <p>
          <strong>pH:</strong> {recipe.ph}
        </p>
        <p>
          <strong>Attenuation Level:</strong> {recipe.attenuation_level}
        </p>
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.malt.map((malt) => (
            <li key={malt.name}>
              {malt.name}: {malt.amount.value} {malt.amount.unit}
            </li>
          ))}
          {recipe.ingredients.hops.map((hop) => (
            <li key={hop.name}>
              {hop.name} ({hop.add}, {hop.attribute}): {hop.amount.value}{" "}
              {hop.amount.unit}
            </li>
          ))}
          <li>Yeast: {recipe.ingredients.yeast}</li>
        </ul>
        <h3>Method</h3>
        <p>
          <strong>Mash Temp:</strong> {recipe.method.mash_temp[0].temp.value}°C
        </p>
        <p>
          <strong>Fermentation Temp:</strong>{" "}
          {recipe.method.fermentation.temp.value}°C
        </p>
        <h3>Food Pairing</h3>
        <ul>
          {recipe.food_pairing.map((food) => (
            <li key={food}>{food}</li>
          ))}
        </ul>
        <h3>Brewer's Tips</h3>
        <p>{recipe.brewers_tips}</p>
        <h3>Contributor</h3>
        <p>{recipe.contributed_by}</p>
      </div>
    </div>
  );
}

export default SingleRecipe;
