import React from 'react'

const Cards = ( { name, image, checkCardSubmission } ) => {
    return (
        <div onClick = {() => checkCardSubmission(name)}>
            <img src = {image}></img>
            <p>{name}</p>
        </div>
    )
}

export default Cards
