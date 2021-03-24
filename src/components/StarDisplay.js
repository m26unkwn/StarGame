import React from "react";
import { utils } from "../util";
export const StarDisplay = (props) => {
  return (
    <>
      {utils.range(1, props.stars).map((starID) => (
        <div key={starID} className='star' />
      ))}
    </>
  );
};
