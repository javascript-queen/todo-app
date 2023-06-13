import React, { useState, useEffect } from 'react';
import './App.css';
import SearchInput from "./components/SearchInput";
import { Note } from "./components/Note";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Note[]>([])
  const [completedTodo, setCompletedTodo] = useState<Note[]>([])
  
  useEffect(()=>{
    if(localStorage.getItem("localTasks")){
        const storedList = JSON.parse(localStorage.getItem("localTasks") || "{}");
        setTodos(storedList);
    }
},[])

  const handleAdding = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      const newTodo = { id: Date.now(), todo, isDone: false };
      setTodos([...todos, newTodo]);
      localStorage.setItem("localTasks", JSON.stringify([...todos, newTodo]));
      setTodo("")
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = completedTodo;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodo(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading"><span className="simple">simply</span><span className="todo">DO</span></span> 
        <SearchInput todo={todo} setTodo={setTodo} handleAdding={handleAdding}/>
        <TodoList 
          todos={todos} 
          setTodos={setTodos}
          completedTodo={completedTodo}
          setCompletedTodo={setCompletedTodo}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
