import React from "react";
import Header from "./components/Header"
import Cards  from "./components/Cards";

import abra from "./Images/Abra.png"
import bulbasaur from "./Images/Bulbasaur.png"
import charmander from "./Images/Charmander.png"
import dratini from "./Images/Dratini.png"
import growlithe from "./Images/Growlithe.png"
import machop from "./Images/Machop.png"
import pikachu from "./Images/Pikachu.png"
import squirtle from "./Images/Squirtle.png"
import vulpix from "./Images/Vulpix.png"
import { useState } from 'react'

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [seenCards, setSeenCards] = useState([]);

  const pokemon = [{name: "abra", image: abra}, {name: "bulbasaur", image: bulbasaur}, {name: "charmander", image: charmander}
                    ,{name: "dratini", image: dratini}, {name: "growlithe", image: growlithe}, {name: "machop", image: machop}
                    ,{name: "pikachu", image: pikachu}, {name: "squirle", image: squirtle}, {name: "vulpix", image: vulpix}]

  const checkCardSubmission = (card) => {
    if (seenCards.includes(card)) {
      resetGame();
    } else {
      setSeenCards([...seenCards, card]);
      incrementCount();
    }
  }

  const incrementCount = () => {
    setPlayerScore(playerScore + 1);
  };

  const resetGame = () => {
    if (playerScore > bestScore) {
      setBestScore(playerScore);
    }
    setSeenCards([]);
    setPlayerScore(0);
  };

  return (
    <div>
      <Header playerScore = {playerScore} bestScore = {bestScore}></Header>
      <div>
        {pokemon.map((cartoon) => {
          return <Cards name = {cartoon.name} image = {cartoon.image} checkCardSubmission = {checkCardSubmission}></Cards>
        })}
      </div>
    </div>
  );
}

export default App;