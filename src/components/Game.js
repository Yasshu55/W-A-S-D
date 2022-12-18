import React from 'react'
import "../App.css"

function Game(props) {
  return (
    <div className='individual-img'>
     <a href={props.gamelink}>
     <img height={290} width={390} src= {props.link} alt="ERROR 404" />
    </a>
    <h2 className='game-name'>{props.name}</h2>
    </div>
  )
}

export default Game