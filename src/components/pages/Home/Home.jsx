import React, { useState, useEffect } from "react";
import SearchForm from "../../SearchForm/SearchForm";
import RecipeCard from "../../RecipeCard/RecipeCard";
import Preloader from "../../Preloader/Preloader";
import api from "../../../utils/api";
import "./Home.css";

const Home = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [query, setQuery] = useState(""); // Texto de búsqueda
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllMeals = async () => {
      try {
        setLoading(true);
        setError(null);

        let allMealsData = [];

        const categories = await api.getAllCategories();

        for (const category of categories) {
          const meals = await api.filterByCategory(category.strCategory);

          if (meals) {
            const mealsWithCategory = meals.map((meal) => ({
              ...meal,
              strCategory: category.strCategory,
            }));

            allMealsData = [...allMealsData, ...mealsWithCategory];
          }
        }

        if (allMealsData.length === 0) {
          throw new Error("No meals found in any category.");
        }

        setAllMeals(allMealsData);
        setFilteredMeals(allMealsData);
      } catch (err) {
        console.error("Error cargando recetas:", err);
        setError(`Error loading recipes: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMeals();
  }, []);

  useEffect(() => {
    let filtered = allMeals;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((meal) =>
        selectedCategories.includes(meal.strCategory)
      );
    }

    if (query.length > 0) {
      filtered = filtered.filter((meal) =>
        meal.strMeal.toUpperCase().includes(query.toUpperCase())
      );
    }

    setFilteredMeals(filtered);
  }, [query, selectedCategories, allMeals]);

  return (
    <div className="home">
      <h1 className="home__title">What Should We Eat?</h1>
      <SearchForm
        query={query}
        setQuery={setQuery}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      {loading && <Preloader />}
      {error && <p className="error-message">{error}</p>}
      <div className="home__recipe-list">
        {!loading && filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <RecipeCard key={meal.idMeal} recipe={meal} />
          ))
        ) : !loading && !error ? (
          <p>No results found.</p>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
