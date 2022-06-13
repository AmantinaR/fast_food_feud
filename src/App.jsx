import * as React from "react";
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Instructions from "./components/Instructions/Instructions";
import Chip from "./components/Chip/Chip";
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel";
import CategoryColumn from "./components/CategoryColumn";
import RestaurantRows from "./components/RestaurantRows";
import MenuDisplay from "./components/MenuDisplay";
import DataSource from "./components/DataSource";


// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
};
// or this!
const { data, categories, restaurants } = createDataSet();



export function App() {
  //STATE
  const [categoryState, setCategory] = React.useState(0);
  const [restaurantState, setRestaurant] = React.useState(0);
  const [itemState, setItem] = React.useState(0);
  const [actionState, setAction] = React.useState("start");


  let currentMenuItems = data.filter((item) => {
    return item.restaurant === restaurantState && item.food_category === categoryState;  
  });

  //This function is called when a componenet is updated to check what action to display given the state variables
  function checkAction() {
    if(categoryState === 0 && restaurantState === 0){
      
      setAction("start");
    } else if(categoryState !== 0 && restaurantState === 0) {
      setAction("onlyCategory");
    } else if(categoryState === 0 && restaurantState !== 0) {
      setAction("onlyRestaurant");
    } else if(itemState === 0) {
      setAction("noSelectedItem");
    } else {
      setAction("allSelected");
    }
  }
  
  

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <CategoryColumn categories={categories} categoryState={categoryState} checkAction={checkAction} setCategory={setCategory} setItem={setItem}></CategoryColumn>
      
      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}></Header>

        {/* RESTAURANTS ROW */}
        <RestaurantRows restaurants={restaurants} restaurantState={restaurantState} setRestaurant={setRestaurant} setItem={setItem} itemState={itemState} categoryState={categoryState} checkAction={checkAction} setAction={setAction}></RestaurantRows>
        

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={appInfo.instructions[actionState]}></Instructions>
        {/* MENU DISPLAY */}
        <MenuDisplay currentMenuItems={currentMenuItems} restaurants={restaurants} restaurantState={restaurantState} setRestaurant={setRestaurant} setItem={setItem} itemState={itemState} categoryState={categoryState} checkAction={checkAction} setAction={setAction}></MenuDisplay>
        
        <DataSource source={appInfo.dataSource}></DataSource>

      </div>
    </main>
  )
};

export default App;
