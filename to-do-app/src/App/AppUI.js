import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";

function AppUI(){
    return (
        
    <React.Fragment>
    <TodoCounter/>
    <TodoSearch/>
   <TodoContext.Consumer>

      {({
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo
          })=>(
          <TodoList>
          {error && <p>Error fatal...</p>}
          {loading && <p>Estamos cargando...</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete = {()=>completeTodo(todo.text)}
            onDelete = {()=>deleteTodo(todo.text)}/>
          ))}
        </TodoList>
    )}

   </TodoContext.Consumer>
  <CreateTodoButton/>
  </React.Fragment>

    );
}

export { AppUI };