import React, { useState } from 'react';
import SearchBar from './Components/Common/SearchBar';
import TodoList from './Components/Common/TodoList';
import { Todo } from './Components/Models/TodoModel';

const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleNewTodo = (event: React.FormEvent) => {
    event.preventDefault();

    if(todo) {
      setTodoList([ ...todoList, {id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <div className='flex flex-col [&>*]:mx-auto font-Milkshake'>
        <div className='p-5 text-3xl'>Taskify</div>
        <SearchBar todo={todo} setTodo={setTodo} handleNewTodo={handleNewTodo} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}

export default App;
