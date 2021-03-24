import React from "react";
import { color } from "./../color";

export const SumNumber = (props) => {
  return (
    <button
      className='number'
      style={{ backgroundColor: color[props.status] }}
      onClick={() => props.onClick(props.number, props.status)}>
      {props.number}
    </button>
  );
};
