import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    //not quite sure if I need to pass the state data to header....
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} state={isDarkMode}/> 
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
