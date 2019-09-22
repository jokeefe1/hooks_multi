import React from 'react'
import CounterContext from '../contexts/CounterContext'

export default function Navbar() {
    const { state } = React.useContext(CounterContext)

    return <div>Navbar: {state.count}</div>
}
