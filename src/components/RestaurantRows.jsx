import * as React from "react";
import "../App.css";
import Chip from "./Chip/Chip";

export function RestaurantRows(props) {
    return(
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{props.restaurants.map(function(restaurant){
            let active = restaurant === props.restaurantState ? true : false;
            return <Chip onEffect={props.checkAction} onClick={() => {
              props.setRestaurant(restaurant);
              props.setItem(0);
              active = restaurant === props.restaurantState ? true : false;
              }} key={restaurant} label={restaurant} isActive={active} onClose={(event) => {
                event.stopPropagation();
                console.log("closed?");
                active = false;
                props.setRestaurant(0);
              }}>{restaurant}</Chip>})}</div>
        </div>
    );
}

export default RestaurantRows;