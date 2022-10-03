import  React  from 'react';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from "./TodoSearch.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
import { TodoList } from "./TodoList.js";
//import logo from './logo.svg';
//import './App.css';

const defaultTodos = [
  {text: 'Cortar cebollas', completed: true},
  {text: 'Tomar curso react', completed: false},
  {text: 'Llorar en la llorería', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos
  }else{
    searchedTodos = todos.filter(todo=>{
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText);
    })
  }

  return (

    <React.Fragment>
      <TodoCounter
        total = {totalTodos}
        completed = {completedTodos}
      />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
    <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}/>
      ))}
    </TodoList>
    <CreateTodoButton/>
    </React.Fragment>
    
  );
}

export default App;
