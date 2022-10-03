import React from "react";
import "./TodoSearch.css";

function TodoSearch(){
const [searchValue, setSearchValue] = React.useState('');

     const onSearchValueChange = (evento) => {
        console.log(evento.target.value);
        setSearchValue(evento.target.value);
     }
    return[
        <input 
        className="TodoSearch" 
        placeholder='Cebolla'
        value={searchValue}
        onChange={onSearchValueChange}
        />,

        <p>{searchValue}</p>
    ]
}

export {TodoSearch}