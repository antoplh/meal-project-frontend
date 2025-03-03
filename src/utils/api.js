class Api {
  constructor() {
    this._baseUrl = "https://www.themealdb.com/api/json/v1/1";
  }

  _checkResponse(response) {
    if (!response.ok) {
      return Promise.reject(`Error: ${response.status}`);
    }
    return response.json();
  }

  _request(endpoint) {
    return fetch(`${this._baseUrl}/${endpoint}`).then(this._checkResponse);
  }

  /**
   * Busca comidas por nombre.
   * @param {string} name - Nombre de la comida a buscar.
   * @returns {Promise} - Lista de comidas o array vacío si no hay resultados.
   */
  searchMealByName(name) {
    return this._request(`search.php?s=${name}`).then(
      (data) => data.meals || []
    );
  }

  /**
   * Obtiene comidas por la primera letra.
   * @param {string} letter - Letra inicial de la comida.
   * @returns {Promise} - Lista de comidas o array vacío si no hay resultados.
   */
  listMealsByFirstLetter(letter) {
    return this._request(`search.php?f=${letter}`).then(
      (data) => data.meals || []
    );
  }

  /**
   * Obtiene detalles de una comida por su ID.
   * @param {string} id - ID de la comida.
   * @returns {Promise} - Datos de la comida o null si no se encuentra.
   */
  getMealById(id) {
    return this._request(`lookup.php?i=${id}`).then((data) =>
      data.meals ? data.meals[0] : null
    );
  }

  /**
   * Obtiene una comida aleatoria.
   * @returns {Promise} - Datos de una comida aleatoria o null si falla.
   */
  getRandomMeal() {
    return this._request("random.php").then((data) =>
      data.meals ? data.meals[0] : null
    );
  }

  /**
   * Obtiene todas las categorías de comidas.
   * @returns {Promise} - Lista de categorías o array vacío si falla.
   */
  getAllCategories() {
    return this._request("categories.php").then(
      (data) => data.categories || []
    );
  }

  /**
   * Filtra comidas por categoría.
   * @param {string} category - Categoría de la comida.
   * @returns {Promise} - Lista de comidas o array vacío si no hay coincidencias.
   */
  filterByCategory(category) {
    return this._request(`filter.php?c=${category}`).then(
      (data) => data.meals || []
    );
  }
}

// Exportamos una instancia única de la API
const api = new Api();
export default api;
