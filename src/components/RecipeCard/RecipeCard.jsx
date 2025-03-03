import { Link } from "react-router-dom";
import { getCategoryColor } from "../../utils/helpers";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.idMeal}`} className="recipe-card-link">
      <div className="recipe-card">
        <h3
          className="recipe-card__category"
          style={{ backgroundColor: getCategoryColor(recipe.strCategory) }}
        >
          {recipe.strCategory}
        </h3>
        <img
          className="recipe-card__image"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <h3 className="recipe-card__title">{recipe.strMeal}</h3>
      </div>
    </Link>
  );
};

export default RecipeCard;
