import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img id={props.id} isclicked="test" onClick={props.onClick} alt={`${props.name} from bobs burgers`} src={props.image} />
      </div>
    </div>
  );
}

export default Card;
