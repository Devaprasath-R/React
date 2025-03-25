
import './App.css';
import React from "react";
import MoodDisplay from'./MoodDisplay';
import {useState} from"react";

function App() {
  const[mood,setMood]=useState("");
  return (
    <div className={`container ${mood}`}>
      <h1>How are you Feeling today?</h1>
      <div className="buttons">
        <button onClick={() => setMood("Happy")}>😀Happy</button>
        <button onClick={() => setMood("Sad")}>😔Sad</button>
        <button onClick={() => setMood("Excited")}>🤩Excited</button>
        <button onClick={() => setMood("Angry")}>😡Angry</button>
        
      </div>
      <MoodDisplay mood={mood} />


    </div>
  );
}

export default App;
