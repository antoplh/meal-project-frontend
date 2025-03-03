/**
 * Normaliza los datos de una comida para usarlos en los componentes.
 * @param {object} meal - Objeto de comida obtenido de la API.
 * @returns {object} - Datos estructurados de la comida.
 */
export const normalizeMealData = (meal) => {
  return {
    id: meal.idMeal,
    name: meal.strMeal,
    category: meal.strCategory,
    area: meal.strArea,
    instructions: meal.strInstructions,
    image: meal.strMealThumb,
    tags: meal.strTags ? meal.strTags.split(",") : [],
    youtube: meal.strYoutube,
  };
};

/**
 * Capitaliza la primera letra de un string.
 * @param {string} str - Texto a capitalizar.
 * @returns {string} - Texto con la primera letra en mayúscula.
 */
export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Función debounce para reducir el número de llamadas a una función en tiempo real.
 * @param {Function} func - Función a ejecutar.
 * @param {number} delay - Tiempo de espera en milisegundos.
 * @returns {Function} - Función optimizada con debounce.
 */
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Genera el color de fondo de la categoría de un meal.
 * @param {string} category - Categoría de la comida.
 * @returns {string} - Código de color HEX.
 */
export const getCategoryColor = (category) => {
  const colors = {
    Beef: "#D72638",
    Chicken: "#F7B538",
    Dessert: "#E76F51",
    Lamb: "#8A1253",
    Miscellaneous: "#5A189A",
    Pasta: "#F4A261",
    Pork: "#C53F3F",
    Seafood: "#0077B6",
    Side: "#2A9D8F",
    Starter: "#E9C46A",
    Vegan: "#38A700",
    Vegetarian: "#76C893",
    Breakfast: "#E36414",
    Goat: "#6A0572",
  };
  return colors[category] || "#605656"; // Color por defecto si no está en la lista
};
