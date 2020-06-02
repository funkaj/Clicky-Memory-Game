import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";
import Instructions from "./components/Instructions";
import characters from "./characters.json";
import Score from "./components/Score";


let charArr = characters;
shuffle(characters);


function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}


class App extends Component {
  // Setting the component's initial state
  state = {
    score: "0"
  };


render() {
  return ( <div class="d-flex justify-content-center">
  <Wrapper>
    <Title >Clicky Memory Game!</Title> 
    <br />
    <Instructions>Instructions go here in text!</Instructions>
    <br />
    <Score score={this.state.score}></Score>
    {charArr.map( x => (
      <Card
      id={x.id}
      name={x.name}
      image={x.image}
    />
    ))}
    </Wrapper>
    </div>
  );
}
}

export default App;