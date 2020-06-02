import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container" data-id={props.id}>
        <img alt={`${props.name} from bobs burgers`} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
