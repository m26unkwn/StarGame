import React from "react";

export const PlayAgain = (props) => {
  return (
    <div className='game-done'>
      <button className='btn' onClick={props.onClick}>
        Play Again
      </button>
      <div
        className='mesg'
        style={{
          color: props.gameStatus === "lost" ? "white" : "black",
          fontWeight: "700",
          marginTop: "2em",
          margin: "0 auto",
          backgroundColor: props.gameStatus === "lost" ? "#eb3b5a" : "#26de81",
          width: "120px",
          padding: "0.4rem",
          border: "1px solid black",
          borderRadius: "4px",
        }}>
        {props.gameStatus === "lost" ? "Game Over :(" : "You won"}
      </div>
    </div>
  );
};
