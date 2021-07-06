import React from "react";
let TodoList=(props)=>{
  
        return(
        <>
        <div className="list">
        <button onClick={()=>{
            props.onSelect(props.id)
        }} className="btn-minus"> - </button>
        <li className="list-items">{props.text}</li>
        </div>
        </>
        )
}

export default TodoList;