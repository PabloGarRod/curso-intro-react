//import { React } from 'react';
import { Fragment } from 'react';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from "./TodoSearch.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
import { TodoList } from "./TodoList.js";
//import logo from './logo.svg';
//import './App.css';

const todos = [
  {text: 'Cortar cebollas', completed: false},
  {text: 'Tomar curso react', completed: false},
  {text: 'Llorar en la llorería', completed: false},
]

function App(props) {
  return (

    <Fragment>
      <TodoCounter/>
    <TodoSearch/>
    <TodoList>
      {todos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}/>
      ))}
    </TodoList>
    <CreateTodoButton/>
    </Fragment>
    
  );
}

export default App;
