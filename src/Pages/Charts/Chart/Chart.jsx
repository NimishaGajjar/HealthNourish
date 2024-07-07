import React from "react";
import LineChart from "../LineChart/LineChart";
import "./Chart.scss";

const Charts = () => {
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Energy",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: false,
      },
      {
        label: "Mood",
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: false,
      },
    ],
  };

  const recipes = [
    {
      id: 1,
      title: "Peanutty Quinoa Bowls for Two + How To Make Your Own Baked Tofu",
      image: "path/to/image1.jpg",
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    },
    {
      id: 2,
      title: "Sweet Chili Lime Tofu With Wok Steamed Collards And Quinoa",
      image: "path/to/image2.jpg",
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    },
    // Add more recipes as needed
  ];

  return (
    <div className="charts">
      <h2>Total Health & Nutrition Chart</h2>
      <LineChart data={lineData} />
      <div className="nutrients">
        <button>Iron</button>
        <button>Zinc</button>
        <button>Magnesium</button>
        <button>Calcium</button>
      </div>
      <div className="health-fields">
        <button>Energy</button>
        <button>Sleep</button>
        <button>Mood</button>
      </div>
      <div className="entry">
        <h3>Entry from: 2022-12-04</h3>
        <button>Next Week</button>
        <p>How you felt:</p>
        <p>Energy: 3</p>
        <p>Sleep: 7</p>
        <p>Mood: 7</p>
        <p>Nutrition Totals: Iron: 22mg</p>
        <p>Comment: Tofu was tasty and slept well but had low energy.</p>
      </div>
      <div className="recipes-section">
        <h3>What you ate:</h3>
        <div className="recipes-list">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h4>{recipe.title}</h4>
              <img src={recipe.image} alt={recipe.title} />
              <p>Diets: {recipe.diets.join(" | ")}</p>
              <button>View Recipe</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Charts;
