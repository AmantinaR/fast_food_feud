import * as React from "react";
import "../App.css";
import Chip from "./Chip/Chip";

export function CategoryColumn(props) {
    return (
        <div className="CategoriesColumn col">
            <div className="categories options">
            <h2 className="title">Categories</h2>
            {props.categories.map(function(category){
                let active = category === props.categoryState ? true : false;
                return <Chip onEffect={props.checkAction} onClick={() => {
                props.setCategory(category);
                props.setItem(0);
                active = category === props.categoryState ? true : false;
                }} key={category} label={category} isActive={active} onClose={(event) => {
                    event.stopPropagation();
                    active = false;
                    props.setCategory(0);
                }}>{category}</Chip>})}
            </div>
        </div>
    );
}

export default CategoryColumn