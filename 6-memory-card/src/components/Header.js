import React from 'react'

const Header = ({ playerScore, bestScore}) => {
    return (
        <div id="scoreboard">
            <h1>Memory Game</h1>
            <span>Current Score: {playerScore}</span>
            <span>Best Score: {bestScore}</span>
        </div>
    )
}

export default Header
