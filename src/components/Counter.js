import React from 'react'
import CounterContext from '../contexts/CounterContext'

export default function Counter() {
    const {state, dispatch } = React.useContext(CounterContext)

    const INCREMENT = 'INCREMENT'
    const DECREMENT = 'DECREMENT'
    const RESET = 'RESET'

    return (
        <div>
            <h3>Count: {state.count}</h3>
            <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
            <button onClick={() => dispatch({ type: RESET })}>Reset</button>
        </div>
    )
}
