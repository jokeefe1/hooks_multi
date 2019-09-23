import React, { useContext, useState, useRef, useEffect } from 'react'
import uuidv4 from 'uuid/v4'
import TodosContext from '../contexts/TodosContext'

const ADD_TODO = 'ADD_TODO'
const SELECT_TODO = 'SELECT_TODO'
const UPDATE_TODO = 'UPDATE_TODO'
const DELETE_TODO = 'DELETE_TODO'

export default function Todo() {
    const { state_todos: state, dispatch_todos: dispatch } = useContext(
        TodosContext
    )
    const [todo, setTodo] = useState('')
    const inputFocus = useRef()

    useEffect(() => {
        state.selected.text && setTodo(state.selected.text)
    }, [state.selected.text])

    function handleSubmit(e) {
        e.preventDefault()

        if (state.selected.text) {
            dispatch({ type: UPDATE_TODO, payload: todo })
        } else {
            dispatch({
                type: ADD_TODO,
                payload: {
                    id: uuidv4(),
                    text: todo,
                    complete: false
                }
            })
        }
        setTodo('')
        inputFocus.current.focus()
    }

    function createTodo(todo) {
        return (
            <li key={todo.id}>
                <h3>{todo.text}</h3>
                <button onClick={() => handleSelect(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo)}>Delete</button>
            </li>
        )
    }

    function handleDelete(todo) {
        dispatch({ type: DELETE_TODO, payload: todo })
    }

    function handleSelect(todo) {
        dispatch({ type: SELECT_TODO, payload: todo })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='add todo'
                    onChange={e => setTodo(e.target.value)}
                    value={todo}
                    ref={inputFocus}
                />
                <button type='submit'>{state.selected.text ? 'Update' : 'Add'}</button>
            </form>
            <ul>{state.todos.map(createTodo)}</ul>
        </div>
    )
}
