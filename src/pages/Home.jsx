import React from "react";
import "./home.css"
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="navigation">
      <h1 id="homeHeading">HomePage</h1>
      <h2> Welcome to my EVOTECH  assessment </h2>
      <h3 id="link">
          <Link to="/mainpage"> <b><i>Go to the Main Page </i></b></Link>
      </h3>
      
    </div>
  );
};
export default Home;
