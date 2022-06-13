import * as React from "react";
import "../App.css";
import Chip from "./Chip/Chip";
import NutritionalLabel from "./NutritionalLabel/NutritionalLabel";

export function MenuDisplay(props) {
    return(
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {props.currentMenuItems.map(function(item) {
              let active = item === props.itemState ? true : false;
              return <Chip onClick={() => {
                props.setItem(item);
                props.currentMenuItems.includes(item) ? props.setAction("allSelected") : props.setAction("noSelectedItem");
                active = item === props.itemState ? true : false;
                }} key={item.item_description} isActive={active} label={item.item_name} onClose={(event) => {
                    event.stopPropagation();
                    active = false;
                    props.setItem(0);
                }}></Chip>;
            })}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {
            props.currentMenuItems.includes(props.itemState) ? (<NutritionalLabel item={props.itemState}></NutritionalLabel>) : (null)
          }
          </div>
        </div>
    );
}

export default MenuDisplay;