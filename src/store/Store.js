import React from 'react'
import CounterContext from '../contexts/CounterContext'
import CounterReducer from '../reducers/CounterReducer'

export default function Store({ children }) {
    const initialCountState = React.useContext(CounterContext)
    const [ state, dispatch ] = React.useReducer(CounterReducer, initialCountState)

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )
}
