import React, { useState } from "react";
import TodoList from "./TodoList";
let App=()=>{
    let[setItem,upItem]=useState("");
    let[setItem1,upItem1]=useState([]);
    let todoList=(event)=>{
      upItem(event.target.value)
    }
    let addItem =(event)=>{
       upItem1((oldItems)=>{
           return[...oldItems,setItem]
       }
       )
       upItem('')
    }
    let deleteItem=(id)=>{
        console.log("Show")
        upItem1((oldItems)=>{
            return oldItems.filter((arrElement,index)=>{
                return index != id
            });
        } )
    }
    return(
        <div className="main">
            <div className="center">
            <br/>
                <h1>ToDo List</h1>
                <br/>
                <div className="type">
                <input type="text" 
                name="one"
                value={setItem} 
                placeholder="Add a item" 
                onChange={todoList}
                autoComplete='off'
                />
                <button onClick={addItem} className="plus-btn">
                    +
                </button>
                </div>
                <ol>
                    {
                        setItem1.map(
                            function(val,index){
                            return (<TodoList
                            key={index}
                            id={index}
                            onSelect={deleteItem}
                            text={val}/>)
                            }
                        )
                    }
                </ol>
            </div>
        </div>
    )
}
export default App;