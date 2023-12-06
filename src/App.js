import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([""]);
  const fetch = (variable) => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + variable)
      .then((res) => setData(res.data.meals));
  };
  const handleInput = (e) => {
    setValue(e.target.value);
    fetch(value);
  };

  useEffect(() => fetch(value), []);

  return (
    <main className="main">
      <h1>React Cook</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => handleInput(e)}
      />
      <div className="meals">
        {data && data.map((meal, index) => <Card key={index} meal={meal} />)}
      </div>
    </main>
  );
};

export default App;
