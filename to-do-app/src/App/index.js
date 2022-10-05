import  React  from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   {text: 'Cortar cebollas', completed: true},
//   {text: 'Tomar curso react', completed: false},
//   {text: 'Llorar en la llorería', completed: false},
//   {text: 'Cenar', completed: false},
//   {text: 'Salir de Bronce', completed: false},
// ]

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem= (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ]
  
}

function App() {
  const [patito, savePatito] = useLocalStorage('PATITO_V1', 'FERNANDO');
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

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


  const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos]
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
   }

   const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
 }

  return [
    <p>{patito}</p>,
    <AppUI
    totalTodos = {totalTodos}
    completedTodos = {completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={ searchedTodos }
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}

    />,
  ];
}



export default App;