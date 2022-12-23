import React from 'react'
import { Todo } from '../Models/TodoModel';
import saveIcon from '../../assets/saveIcon.png'
import editIcon from '../../assets/edit-round-line-icon.svg'


interface Props{
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todoList, setTodoList}) => {

  const [toggleEdit, setToggleEdit] = React.useState<boolean>(false);

  return (
    <div>
      <div className='p-10'>
        {
          Object.keys(todoList).map((list, index) => {
            return (
              <div className='tasks border border-black rounded-md text-xl py-2 px-2 ml-0 mr-72 my-3 w-full' key={index}>
                {todoList[index]["todo"]}
                <div className='absolute -mt-7 ml-60 cursor-pointer'>Edit</div>
                <div className='absolute -mt-7 ml-[17.4rem] cursor-pointer'>Del</div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default TodoList;