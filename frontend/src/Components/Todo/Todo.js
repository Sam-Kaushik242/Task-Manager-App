import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbEdit } from 'react-icons/tb';
import TodoForm from './TodoForm';
function Todo({todos, completeTodo, removeTodo, editTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const submitUpdate = value => {
        editTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit}  onSubmit={submitUpdate}/>
    }
  return todos.map((todo, index)=>(
    <div className={`todo flex justify-between gap-2 md:w-full rounded-md text-slate-200 bg-gradient-to-r from-blue-600 to-indigo-500 p-2 rounded-mg ${todo.isComplete ? 'todo-row complete' : 'todo-row'}`} key={index}>
        <div className='overflow-hidden' key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className="icons flex gap-1 md:text-xl items-center">
        <TbEdit className='cursor-pointer' onClick={() => setEdit({id: todo.id, value: todo.text})}/>
        <AiFillCloseCircle onClick={() => removeTodo(todo.id)} className='cursor-pointer'/>
        </div>
    </div>
  ))
}

export default Todo
