import * as React from "react"
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick = () => {}, onClose = () => {}, onEffect = () => {} }) {
  let buttonClassName = isActive ? "chip active" : "chip";
  React.useEffect(() => {
    onEffect();
  }); 

  return (
    <button className={buttonClassName} onClick={onClick}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={onClose}>{`X`}</span>
    </button>
  )
}

export default Chip
