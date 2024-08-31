import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // const foodItems = [];
  let [foodItems, setFoodItems] = useState([]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newFoodArray = [...foodItems, newFoodItem];
      event.target.value = "";
      setFoodItems(newFoodArray);
    }
  };
  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleOnKeyDown={onKeyDown} />
      <FoodItems items={foodItems} />
      <ErrorMessage items={foodItems} />
    </Container>
  );
}

export default App;
