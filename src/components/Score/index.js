import React from "react";
import "./style.css";

function Score(props) {
  return (
    <div className="score">
  <h3>Your Score is {props.score}</h3>
  </div>
  );
}

export default Score;
