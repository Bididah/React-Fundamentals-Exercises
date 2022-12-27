import "./App.css";
import { useState } from "react";
import Header from "./Header";
import UserInput from "./UserInput";
import Display from "./Display";


const App = () => {
  
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    console.log("submit event")
    setItems([...items, value]);
    console.log('setting state')
    setValue("")
    console.log('setting state')
  };

  const deleteLastItem = (event) => {
    console.log('cliked')
    console.log(`Current State ${items}` )
    setItems(items.slice(0, -1));
  };

  const inputIsEmpty = () => value === "";

  const noItemsFound = () => items.length === 0;

  return (
    <div className="App">
      
    <Header/>
    <UserInput 
    handleSubmit={addItem} 
    inputValue = {value}
    handleChange = {handleChange}
    addButton = {inputIsEmpty}
    handeleDelete = {deleteLastItem}
    deleteButton = {noItemsFound}
    />
    <Display 
    itemsArray={items}
    />

     
    </div>
  );
};

export default App;
