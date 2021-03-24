import React from "react";

export const PlayAgain = (props) => {
  return (
    <div className='game-done'>
      <button onClick={props.onClick}>PlayAgain</button>
    </div>
  );
};
