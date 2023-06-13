import React from 'react'
import '../App.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdding: (e: React.FormEvent) => void;
}
const SearchInput = ({ todo, setTodo, handleAdding }: Props ) => {
  return (
    <>
      <form className="input" onSubmit={(e) => handleAdding(e)}>
        <input 
          value = {todo} 
          onChange={(e)=>setTodo(e.target.value)}
          type="input" 
          placeholder="The task is..." 
          className="input-box">
        </input>
        <button className="input-submit" type="submit">ADD</button>
      </form>
    </>
  )
}

export default SearchInput