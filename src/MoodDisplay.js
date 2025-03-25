import React from "react";

function MoodDisplay({mood}) {
    const moods={
        Happy:"Keep Smiling!😀",
        Sad:"It's okay to be sad sometimes😔",
        Excited:"Let's Celebrate!🤩",
        Angry:"Take a deep breath😡",
    };
  return (
    <div>
        {mood? <p> {moods[mood]}</p> :<p> Select your mood above the button</p>}

    </div>
  );
}
export default MoodDisplay;