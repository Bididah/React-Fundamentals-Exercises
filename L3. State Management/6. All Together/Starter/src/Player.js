import React, { useState } from 'react'


const Player = ({player}) => {
  const [display , setDisplay] = useState(true)
  const handelClik = () => {setDisplay(!display)}
  return (
    <div>
        <button onClick={handelClik}>Show the Number of Games Played</button>
        <p>{`User Name: ${player.userName}`}</p>
        <p>{`Number of Games: ${display ? player.NumberOfGames : "*"}`}</p>
    </div>
  )
}

export default Player
