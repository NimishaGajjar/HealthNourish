import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import foodImg from "../../assets/images/food_img.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/discover");
  };

  return (
    <section className="home">
      <div className="hero">
        <img src={foodImg} alt="Healthy Food" className="hero__image" />
        <div className="hero__content">
          <h1>Welcome to HealthNourish</h1>
          <p>
            Taking care of your body is essential for maintaining good health
            and well-being. A balanced diet, regular exercise, and sufficient
            rest are the key components of a healthy lifestyle.
          </p>
          <p>
            Discover recipes that cater to your dietary preferences, track your
            health trends, and make informed decisions about your nutrition.
          </p>
          <button className="hero__button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
