import React from "react";
import "../stylesheets/Home.css";
import pizza from "../Images/pizza.jpg";


const Home = () => {
  return (
    <div className="body col-12">
      
      <div className="image-home">
        <img src={pizza} alt="" />
      </div>

      <div className="content-home">
        <h1>Welcome to React Meals!</h1>
        <h3>Serving Fresh and Delecious!</h3>
      </div>
      
    </div>
  );
};

export default Home;
