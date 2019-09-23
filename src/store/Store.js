import React, { useContext, useReducer } from 'react'
import CounterContext from '../contexts/CounterContext'
import CounterReducer from '../reducers/CounterReducer'
import TodosContext from '../contexts/TodosContext'
import TodosReducer from '../reducers/TodosReducer'

export default function Store({ children }) {
    const initialCountState = useContext(CounterContext)
    const [state_count, dispatch_count] = useReducer(
        CounterReducer,
        initialCountState
    )
    const initialTodosState = useContext(TodosContext)
    const [state_todos, dispatch_todos] = useReducer(
        TodosReducer,
        initialTodosState
    )
    return (
        <TodosContext.Provider value={{ state_todos, dispatch_todos }}>
            <CounterContext.Provider value={{ state_count, dispatch_count }}>
                {children}
            </CounterContext.Provider>
        </TodosContext.Provider>
    )
}
