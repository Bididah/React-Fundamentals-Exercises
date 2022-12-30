import React, { useState } from 'react'


const UserInput = ({onAddPlayer}) => {
  const [player, setPlayer] = useState({userName : '', firstName: '', lastName: '' })
  

  const handelChange = (event) => {
    const id = event.target.id
    switch (id) {
      case 'userName':
        setPlayer({
          userName: event.target.value,
          firstName: player.firstName,
          lastName: player.lastName
        })
        break;
      case 'lastName':
        setPlayer({
          userName: player.userName,
          firstName: player.firstName,
          lastName: event.target.value
        })
        break;
      case 'firstName':
        setPlayer({
          userName: player.userName,
          firstName: event.target.value,
          lastName: player.lastName
        })
        break;
      default:
        setPlayer(player)
        break;
    }
    
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddPlayer(player)
    setPlayer({userName : '', firstName: '', lastName: '' })
  }

  const inputsAreEmpty = () => player.firstName === '' || player.userName === '' || player.lastName === ''

  return (
    <div className='userInput'>
      <form onSubmit={handleSubmit}>
        
        <input id='userName'
        onChange={handelChange} 
        value = {player.userName}
        placeholder = "enter user name"
        />
        
        
        <input id='firstName'
        onChange={handelChange}
        value = {player.firstName}
        placeholder = 'enter first Name'/>

        
        <input id="lastName"
        onChange={handelChange}
        value = {player.lastName}
        placeholder = 'Enter last name'/>

        <button disabled = {inputsAreEmpty()}> Add New Player </button>
      </form>
    </div>
  )
}

export default UserInput
