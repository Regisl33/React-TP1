import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="card">
      <h2>{meal.strMeal}</h2>
      <h3>Origin: {meal.strArea}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Card;
