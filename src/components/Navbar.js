import React, { useContext } from 'react'
import CounterContext from '../contexts/CounterContext'

export default function Navbar() {
    const { state_count: state } = useContext(CounterContext)

    return <div>Navbar: {state.count}</div>
}
