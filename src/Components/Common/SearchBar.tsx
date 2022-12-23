import React, { FormEvent } from 'react'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleNewTodo: (event: React.FormEvent) => void;
}



const SearchBar:React.FC<Props> = ({ todo, setTodo, handleNewTodo }) => {

  const inputRef = React.useRef<HTMLInputElement>(null);

  const focusOnInput = () => {
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={(event) => { handleNewTodo(event); focusOnInput }}>
      <input className='border border-black hover:shadow-[0_0_5px] transition-shadow duration-500 outline-none opacity-1 px-2 py-2 rounded-full text-xl pr-12'
        ref={inputRef}
        type='input'
        placeholder='Watchu wanna do?'
        value={todo}
        onChange={event => setTodo(event?.target.value)}
      />
      <button className='absolute py-0.5 mt-2 -ml-10 px-1 rounded-full transition-all duration-500 bg-black text-white  text-base hover:bg-white hover:text-black hover: border hover: border-black hover:duration-300 shadow-[0_0_3px] shadow-black'
        onClick={focusOnInput}
        type="submit"
      >
        Go
      </button>
    </form>
  )
}

export default SearchBar;
