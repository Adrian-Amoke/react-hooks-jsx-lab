import React from "react";
import { name, city } from "../data/data.js";


const mwa = {
  color: 'firebrick',
};

function Home() {
  // update the JSX being returned!
  return (
    <div id="home">
      <h1 style={mwa}>{name} is a Web Developer from {city}</h1>
    </div>
  );
}

export default Home;
