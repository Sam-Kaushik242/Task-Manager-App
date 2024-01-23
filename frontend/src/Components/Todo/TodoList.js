import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([])

    const isOverflowHidden = todos.length === 0;
    const addTodo = (todo) => {
        if(!todo.text || /^\s*s$/.test(todo.text) ){
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const editTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*s$/.test(newValue.text)){
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos)
    }
  return (
    <div className={` todoList flex flex-col items-center rounded-lg bg-gray-700  p-8 md:p-10 gap-2 md:gap-5`}>
      <TodoForm className="fixed top-10 "todos={todos} onSubmit={addTodo}/>
      <Todo className={`${isOverflowHidden === 0 ? 'overflow-hidden' : "overflow-y-auto"}`} todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodo={editTodo}/>
    </div>
  )
}

export default TodoList
