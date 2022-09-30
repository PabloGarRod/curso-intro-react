import { React } from 'react';
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

    <React.Fragment>
      <TodoCounter/>
    <TodoSearch/>
    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text}/>
      ))}
    </TodoList>
    <CreateTodoButton/>
    </React.Fragment>
    
  );
}

export default App;
