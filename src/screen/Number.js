import React from "react";

export const SumNumber = (props) => {
  return (
    <button
      className='number'
      onClick={() => console.log("clikced", props.number)}>
      {props.number}
    </button>
  );
};
