import React from 'react'
import { Note } from "./Note"
import Todo from "./Todo";
import { Droppable } from 'react-beautiful-dnd'

interface Props {
  todos: Note[];
  setTodos: React.Dispatch<React.SetStateAction<Note[]>>
  completedTodo: Note[];
  setCompletedTodo: React.Dispatch<React.SetStateAction<Note[]>>;
}

const TodoList = ({ todos, setTodos, completedTodo, setCompletedTodo}: Props) => {
  
  return (
      <div className="container">
        <Droppable droppableId="TodosList"  >
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos-heading active">Active Tasks</span>
            {todos?.map((todo, index) => (
              <Todo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
        </Droppable>

        <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos-heading">Completed Tasks</span>
            {completedTodo?.map((todo, index) => (
              <Todo
                index={index}
                todos={completedTodo}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodo}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList