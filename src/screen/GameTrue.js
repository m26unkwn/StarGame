import React from "react";

export const GameTrue = (props) => {
  return (
    <div
      className='game'
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <div className='help'>
        <h3>Pick 1 or more numbers that sum to the number of stars</h3>
      </div>
      <button className='startBtn' onClick={props.onClickHandler}>
        Start Game
      </button>
      <div className='timer'>Time Remaining: 10</div>
    </div>
  );
};
