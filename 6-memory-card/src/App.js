import React from "react";
import Header from "./components/Header"
import Cards  from "./components/Cards";
import { useState } from 'react'

function App() {
  const [playerScore, setPlayerScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const incrementCount = () => {
    setPlayerScore(playerScore + 1);
  };

  const resetGame = () => {
    setPlayerScore(0);
  };

  return (
    <div>
      <Header playerScore = {playerScore} bestScore = {bestScore}></Header>
    </div>
  );
}

export default App;
