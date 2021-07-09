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
import { useEffect, useState } from 'react'

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [seenCards, setSeenCards] = useState([]);

  let pokemon = [{name: "abra", image: abra, id:1}, {name: "bulbasaur", image: bulbasaur, id:2}, {name: "charmander", image: charmander, id:3}
                    ,{name: "dratini", image: dratini, id:4}, {name: "growlithe", image: growlithe, id:5}, {name: "machop", image: machop, id:6}
                    ,{name: "pikachu", image: pikachu, id:7}, {name: "squirle", image: squirtle, id:8}, {name: "vulpix", image: vulpix, id:9}]

  useEffect(() => {

  }, []);

  const shuffle = (a) => {
    let j, x, i;

    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
  return a;
  }

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
    setSeenCards([]);
    setPlayerScore(0);
  };

  useEffect(() => {
    if (playerScore > bestScore) {
      setBestScore(playerScore);
    }
  }, [playerScore, bestScore]);

  return (
    <div>
      <Header playerScore = {playerScore} bestScore = {bestScore}></Header>
      <div className="grid">
        {shuffle(pokemon).map((cartoon) => {
          return <Cards name = {cartoon.name} image = {cartoon.image} checkCardSubmission = {checkCardSubmission}></Cards>
        })}
      </div>
    </div>
  );
}

export default App;