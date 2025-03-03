import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../utils/api";
import Preloader from "../../Preloader/Preloader"; // 🔹 Importamos el preloader
import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await api.getMealById(id);
        if (!data) throw new Error("Recipe not found.");
        setMeal(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <Preloader />; // 🔹 Usamos el Preloader en lugar de "Loading..."
  if (error) return <p className="error">{error}</p>;

  const getIngredients = () => {
    return Object.entries(meal)
      .filter(([key, value]) => key.includes("strIngredient") && value)
      .map(([key, value], index) => ({
        ingredient: value,
        measure: meal[`strMeasure${index + 1}`] || "",
      }));
  };

  const formatInstructions = (instructions) => {
    return instructions.split("\n").filter((line) => line.trim() !== "");
  };

  const getYoutubeEmbedUrl = (url) => {
    if (!url) return null;
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h1 className="recipe__title">{meal.strMeal}</h1>
        <img
          className="recipe__image"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
      </div>

      <p className="recipe__category">Category: {meal.strCategory}</p>
      <p className="recipe__area">Origin: {meal.strArea}</p>

      <div className="recipe__content">
        <div className="recipe__ingredients">
          <h3>Ingredients</h3>
          <ul>
            {getIngredients().map((item, index) => (
              <li key={index}>
                {item.measure} {item.ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="recipe__instructions">
          <h3>Instructions</h3>
          {formatInstructions(meal.strInstructions).map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>
      </div>

      {/* 🔹 Video */}
      {meal.strYoutube && (
        <div className="recipe__video-container">
          <iframe
            className="recipe__video"
            src={getYoutubeEmbedUrl(meal.strYoutube)}
            title="Recipe Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Recipe;
