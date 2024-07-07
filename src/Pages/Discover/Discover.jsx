import React, { useState } from "react";
import "./Discover.scss";

const Discover = ({ recipesSearchResults, onSearch }) => {
  const [mealType, setMealType] = useState("main course");
  const [searchString, setSearchString] = useState("");
  const [ingredients, setIngredients] = useState({
    chicken: false,
    beef: false,
    egg: false,
    tofu: false,
    vegetables: false,
    avocado: false,
    fruits: false,
    fish: false,
    cheese: false,
  });
  const [dietaryPreferences, setDietaryPreferences] = useState({
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    paleo: false,
    pescetarian: false,
    ketogenic: false,
  });
  const [allergens, setAllergens] = useState({
    treeNuts: false,
    shellfish: false,
    dairy: false,
    sesame: false,
    egg: false,
    soy: false,
    peanut: false,
  });

  const handleSearch = () => {
    const searchParams = {
      mealType,
      searchString,
      ingredients,
      dietaryPreferences,
      allergens,
    };
    onSearch(searchParams);
  };

  return (
    <div className="discover">
      <div className="discover__content">
        <h2>Discover Recipes</h2>
        <div className="search-form">
          <div className="form-group">
            <label>Primary Search</label>
            <select
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
            >
              <option value="main course">Main Course</option>
              <option value="side dish">Side Dish</option>
              <option value="dessert">Dessert</option>
              <option value="appetizer">Appetizer</option>
              <option value="salad">Salad</option>
              <option value="bread">Bread</option>
              <option value="breakfast">Breakfast</option>
              <option value="soup">Soup</option>
              <option value="beverage">Beverage</option>
              <option value="sauce">Sauce</option>
              <option value="marinade">Marinade</option>
              <option value="fingerfood">Fingerfood</option>
              <option value="snack">Snack</option>
              <option value="drink">Drink</option>
            </select>
          </div>

          <div className="form-group">
            <label>What's in your fridge</label>
            <div className="checkbox-group">
              {Object.keys(ingredients).map((ingredient) => (
                <label key={ingredient}>
                  <input
                    type="checkbox"
                    checked={ingredients[ingredient]}
                    onChange={(e) =>
                      setIngredients({
                        ...ingredients,
                        [ingredient]: e.target.checked,
                      })
                    }
                  />
                  {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Dietary Preferences</label>
            <div className="checkbox-group">
              {Object.keys(dietaryPreferences).map((preference) => (
                <label key={preference}>
                  <input
                    type="checkbox"
                    checked={dietaryPreferences[preference]}
                    onChange={(e) =>
                      setDietaryPreferences({
                        ...dietaryPreferences,
                        [preference]: e.target.checked,
                      })
                    }
                  />
                  {preference.charAt(0).toUpperCase() + preference.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Allergens</label>
            <div className="checkbox-group">
              {Object.keys(allergens).map((allergen) => (
                <label key={allergen}>
                  <input
                    type="checkbox"
                    checked={allergens[allergen]}
                    onChange={(e) =>
                      setAllergens({
                        ...allergens,
                        [allergen]: e.target.checked,
                      })
                    }
                  />
                  {allergen.charAt(0).toUpperCase() + allergen.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <button onClick={handleSearch}>Discover</button>
        </div>

        {recipesSearchResults.length > 0 && (
          <div className="search-results">
            <div className="recipes-list">
              {recipesSearchResults.map((recipe) => (
                <div key={recipe.id} className="recipe-card">
                  <h4>{recipe.title}</h4>
                  <img src={recipe.image} alt={recipe.title} />
                  <p>
                    Diets: {recipe.diets ? recipe.diets.join(" | ") : "N/A"}
                  </p>
                  <button>View Recipe</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;
