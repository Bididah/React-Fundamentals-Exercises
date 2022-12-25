import corgi from "./corgi.jpg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [likes, setLikes] = useState(0)

  const incrementLikes = () => setLikes(likes + 1)

  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <p>Amount of likes: {`${likes} ${likes > 1 ? 'likes' : 'like'}`} </p>
      <button onClick={() => incrementLikes()}> Like </button>
    </div>
  );
};

export default App;
