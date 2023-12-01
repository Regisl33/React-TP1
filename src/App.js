import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Tomato")
      .then((res) => setData(res.data.meals));
  }, []);

  return (
    <main className="main">
      <h1>React Cook</h1>
      <input type="text" placeholder="Tapez le nom d'un aliment (en anglais)" />
      <div className="meals">
        {data.map((meal, index) => (
          <Card key={index} meal={meal} />
        ))}
      </div>
    </main>
  );
};

export default App;
