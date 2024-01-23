import React, { useState, useEffect, useRef} from 'react'

function TodoForm(props, todos) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const inputRef = useRef(null)

    useEffect(()=> {
        inputRef.current.focus()
    })

    const handleOnChange = (e) =>{
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }


  return (
    <form className='todoForm mb-4 todo-form flex md:w-full md:text-sm text-xs justify-center p-2 md:justify-between text-slate-300' onSubmit={handleSubmit}>
      {props.edit ? (<>
        <input type="text" placeholder='Update your item...' autoComplete='off' value={input} name='text' className='todo-input edit outline-0 border-0 text-white bg-transparent' onChange={handleOnChange} ref={inputRef} /><button className=' todo-button edit  py-2 px-3 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500'>Update</button></>):  (<><input type="text" placeholder="What's your plan today..." autoComplete='off' value={input} name='text' className='todo-input outline-0 border-slate-100 text-white bg-transparent' onChange={handleOnChange} ref={inputRef} /><button className='todo-button py-2 px-3 bg-gradient-to-br text-sm from-sky-600 to-indigo-700 rounded-md px-2'>Add Task</button></>)}
    </form>
  )
}

export default TodoForm
