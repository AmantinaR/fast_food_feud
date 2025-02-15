import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">{
        nutritionFacts.map(function(fact) {
          return <NutritionalLabelFact key={fact.id} item={props.item} id={fact.id} label={fact.label} attribute={fact.attribute}></NutritionalLabelFact>
        })
      }</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.attribute !== "fiber" ? props.item[props.attribute] : props.item["dietary_fiber"]}</span>
    </li>
  )
}

export default NutritionalLabel
