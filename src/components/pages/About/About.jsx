import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <h1>About The Author</h1>
        <p>
          Hi, I'm <strong>Antonella Portugal</strong>, a developer with a strong
          background in data science. While my expertise lies in analyzing and
          interpreting data, I’ve always been curious about web development.
          This project is my way of exploring that curiosity— learning how to
          build interactive applications while combining structured data with
          user-friendly interfaces.
        </p>

        <h2>About This Project</h2>
        <p>
          This project is a <strong>recipe exploration web app</strong> that
          allows users to discover meals from around the world. The goal is to
          provide an easy-to-use interface where users can search for recipes,
          view detailed ingredients, and explore different cuisines. The app
          follows modern web development best practices, ensuring responsiveness
          and a smooth user experience. This project was made as a submission to
          my final project for TripleTen´s Web Development bootcamp.
        </p>

        <h2>API Integration</h2>
        <p>
          The application fetches data from <strong>TheMealDB API</strong>, a
          free and open-source database for meal recipes. Through this API,
          users can:
        </p>
        <ul>
          <li>🔎 Search for recipes by name</li>
          <li>📂 Filter meals by category</li>
          <li>📖 View recipe instructions and ingredient lists</li>
        </ul>
        <p>
          This integration allows for dynamic and real-time access to an
          extensive collection of recipes, making it a valuable tool for food
          enthusiasts.
        </p>

        <h2>Technologies Used</h2>
        <ul>
          <li>
            <strong>Frontend</strong>: React, Vite, CSS Modules
          </li>
          <li>
            <strong>State Management</strong>: React Hooks
          </li>
          <li>
            <strong>Routing</strong>: React Router
          </li>
        </ul>

        <p>Thank you for visiting! 😊</p>
      </div>
    </div>
  );
};

export default About;
