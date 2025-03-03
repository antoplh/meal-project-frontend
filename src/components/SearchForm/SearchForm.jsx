import React from "react";
import "./SearchForm.css";

const SearchForm = ({
  query,
  setQuery,
  selectedCategories,
  setSelectedCategories,
}) => {
  // 🔥 Lista fija de categorías (como ahora las obtenemos en Home.jsx, ya no llamamos al API aquí)
  const categories = [
    "Beef",
    "Chicken",
    "Dessert",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
    "Breakfast",
    "Goat",
  ];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setQuery(""); // 🔥 Borra el texto de búsqueda cuando se cambia una categoría
  };

  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <div className="categories">
        {categories.map((category) => (
          <label key={category} className="category-checkbox">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
