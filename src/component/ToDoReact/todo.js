import React, { useState, useEffect } from "react";
import "./style.css";

const Todo = () => {

  const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
  
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };

  const [getData,setData] = useState("");
  const [getItem,setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState(null);
  const [toggleButton, setToggleButton] = useState(false);
  const addItem = ()=>{
    if(!getData) alert("Please write something in the box");
    const newInputList = {
      id: new Date().getTime().toString(),
      name: getData
    }

    setItems([...getItem,newInputList]);
    setData("");
  }

  const editItem = (index) => {
    const item_todo_edited = getItem.find((curElem) => {
      return curElem.id === index;
    });
    setData(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };
   // how to delete items section
   const deleteItem = (index) => {
    const updatedItems = getItem.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={getData}
              onChange={(event)=>setData(event.target.value)}
              
            />
            
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>
          <i className="fas fa-plus add-btn"></i>
          {/* show our items  */}
          <div className="showItems">
            {getItem.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(curElem.id)}></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All">
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo
