import {React, useState, useEffect } from "react";
import "./style.css";

const UseState = () => {
  // const initialData = 15;
  const [myNum, setMyNum] =useState(0);

  useEffect(() => {
    console.log('hiiiiiiiiiiiii');
  });
 

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(myNum - 1))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;