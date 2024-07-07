import axios from "axios";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Charts from "./Pages/Charts/Chart/Chart";
import Discover from "./Pages/Discover/Discover";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
//import "./index.scss";

function App() {
  const [recipesSearchResults, setRecipesSearchResults] = useState([]);

  const apiKey = "b4ad83f288d440b0bb543d658905bb83";
  const baseURL = "https://api.spoonacular.com/recipes";

  const fetchRecipesSearchData = async (searchParams) => {
    const {
      mealType,
      searchString,
      ingredients,
      dietaryPreferences,
      allergens,
    } = searchParams;

    let ingredientsQuery = "";
    for (const ingredient in ingredients) {
      if (ingredients[ingredient]) {
        ingredientsQuery += `&includeIngredients=${ingredient}`;
      }
    }

    let dietaryPreferencesQuery = "";
    for (const preference in dietaryPreferences) {
      if (dietaryPreferences[preference]) {
        dietaryPreferencesQuery += `&diet=${preference}`;
      }
    }

    let allergensQuery = "";
    for (const allergen in allergens) {
      if (allergens[allergen]) {
        allergensQuery += `&excludeIngredients=${allergen}`;
      }
    }

    const queryString = `${baseURL}/complexSearch?apiKey=${apiKey}&type=${mealType}&query=${searchString}${ingredientsQuery}${dietaryPreferencesQuery}${allergensQuery}`;

    try {
      const { data: searchResults } = await axios.get(queryString);
      setRecipesSearchResults(searchResults.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/discover"
            element={
              <section className="recipes-section">
                <Discover
                  recipesSearchResults={recipesSearchResults}
                  onSearch={fetchRecipesSearchData}
                />
              </section>
            }
          />
          <Route
            path="/charts"
            element={
              <section className="charts-section">
                <Charts />
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
