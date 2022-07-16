import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
// import { TodoItem } from "./MyComponents/TodoItem";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("GG Boi its deleted",todo);

    setTodos(todos.filter(t => t.id !== todo.id));
  }

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", desc: "Learn React from CodeWithHarry" },

    { id: 2, text: "Learn Vue", desc: "Learn Vue from CodeWithHarry" },

    { id: 3, text: "Learn Angular", desc: "Learn Angular from CodeWithHarry" },
  ]);

  return (
    <>
      <Header title="Todos-List" searchBar={true} />
      <Todos todos={todos} onDelete={onDelete} />
      {/* <TodoItem  /> */}
      <Footer />
    </>
  );
}

export default App;
