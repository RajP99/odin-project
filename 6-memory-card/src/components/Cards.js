import React from 'react'

const Cards = ( { name, image, checkCardSubmission } ) => {
    return (
        <div onClick = {() => checkCardSubmission(name)}>
            <img className = "card" src = {image} alt = {name}></img>
            <p className = "card-name">{name}</p>
        </div>
    )
}

export default Cards
