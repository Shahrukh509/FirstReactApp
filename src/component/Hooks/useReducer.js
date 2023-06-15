import {React, useReducer } from "react"
import "./style.css";

const reducer = (state,action) => {
    if(action.type === 'incr') {state = state+1;}
    if(action.type === 'decr') {state=state-1;}
    return state;
};

const UseReducer = () => {
  const initialData = 10;
  const [state,dispatch] = useReducer(reducer,initialData);
 

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({type: "incr"}) }>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => dispatch({type: "decr"}) }>
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

export default UseReducer;