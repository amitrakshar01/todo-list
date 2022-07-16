import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h2 className="text-center">My Todos List</h2>
      {props.todos.length===0?<h4 className="text-center">No Todos</h4>:props.todos.map((todo) => {
        return <TodoItem todo={todo} onDelete={props.onDelete}/>
      })}
      
      
    </div>
  );
}
