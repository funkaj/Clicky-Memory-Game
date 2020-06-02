import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import Instructions from "./components/Instructions";
import friends from "./friends.json";

function App() {
  return ( <div class="d-flex justify-content-center">
  <Wrapper>
    <Title >Clicky Memory Game!</Title> 
    <br />
    <Instructions>Instructions go here in text!</Instructions>
    <FriendCard
      id={friends[0].id}
      name={friends[0].name}
      image={friends[0].image}
    />
    <FriendCard
      id={friends[1].id}
      name={friends[1].name}
      image={friends[1].image}
    />
    <FriendCard
      id={friends[2].id}
      name={friends[2].name}
      image={friends[2].image}
    />
    <FriendCard
      id={friends[3].id}
      name={friends[3].name}
      image={friends[3].image}
    />
    <FriendCard
      id={friends[4].id}
      name={friends[4].name}
      image={friends[4].image}
    />
    <FriendCard
      id={friends[5].id}
      name={friends[5].name}
      image={friends[5].image}
    />
    <FriendCard
      id={friends[6].id}
      name={friends[6].name}
      image={friends[6].image}
    />
    <FriendCard
      id={friends[7].id}
      name={friends[7].name}
      image={friends[7].image}
    />
    <FriendCard
      id={friends[8].id}
      name={friends[8].name}
      image={friends[8].image}
    />
    <FriendCard
      id={friends[9].id}
      name={friends[9].name}
      image={friends[9].image}
    />
    <FriendCard
      id={friends[10].id}
      name={friends[10].name}
      image={friends[10].image}
    />
    <FriendCard
      id={friends[11].id}
      name={friends[11].name}
      image={friends[11].image}
    />
    
    
    </Wrapper>
    </div>
  );
}

export default App;