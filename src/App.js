import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";
import Instructions from "./components/Instructions";
import friends from "./friends.json";
import Score from "./components/Score";




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
    <Card
      id={friends[0].id}
      name={friends[0].name}
      image={friends[0].image}
    />
    <Card
      id={friends[1].id}
      name={friends[1].name}
      image={friends[1].image}
    />
    <Card
      id={friends[2].id}
      name={friends[2].name}
      image={friends[2].image}
    />
    <Card
      id={friends[3].id}
      name={friends[3].name}
      image={friends[3].image}
    />
    <Card
      id={friends[4].id}
      name={friends[4].name}
      image={friends[4].image}
    />
    <Card
      id={friends[5].id}
      name={friends[5].name}
      image={friends[5].image}
    />
    <Card
      id={friends[6].id}
      name={friends[6].name}
      image={friends[6].image}
    />
    <Card
      id={friends[7].id}
      name={friends[7].name}
      image={friends[7].image}
    />
    <Card
      id={friends[8].id}
      name={friends[8].name}
      image={friends[8].image}
    />
    <Card
      id={friends[9].id}
      name={friends[9].name}
      image={friends[9].image}
    />
    <Card
      id={friends[10].id}
      name={friends[10].name}
      image={friends[10].image}
    />
    <Card
      id={friends[11].id}
      name={friends[11].name}
      image={friends[11].image}
    />
    
    
    </Wrapper>
    </div>
  );
}
}

export default App;