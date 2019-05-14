import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>Recipe: {title}</h1>
      <img className={style.image} src={image} alt='' />
      <ul>
        {ingredients.map(ingredients => (
          <li>{ingredients.text}</li>
        ))}
      </ul>
      <p>Calories: {calories}</p>
    </div>
  );
};

export default Recipe;
