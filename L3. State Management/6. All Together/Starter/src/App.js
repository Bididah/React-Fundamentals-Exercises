import logo from "./logo.svg";
import "./App.css";
import UserInput from "./UserInput";
import { useState } from "react";
import Player from "./Player";


const App = () => {
  const [players , setPlayers] = useState([ {userName : 'Bidida', firstName: 'hamza', lastName: 'hanfi',NumberOfGames: 0 }])
  

  const addPlayer = (player) => {
    const userNames = players.map(element => element.userName)
    if(userNames.includes(player.userName)) {
      alert(`${player.userName} allready exist as a userName`)
    } else {
      setPlayers([...players, {...player, NumberOfGames: 0}])
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>

      <UserInput  onAddPlayer={addPlayer} />
      {
        players.map(player => {
          return <Player key={player.userName} player ={player} />} )
      }
        
       

    </div>
  );
};

export default App;
