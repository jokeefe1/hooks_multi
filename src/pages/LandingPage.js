import React from 'react'
import Counter from '../components/Counter'
import Layout from '../components/Layout'
import TodosList from '../components/TodosList'

export default function CounterPage() {
    return (
        <Layout>
            <Counter />
            <br />
            <TodosList />
        </Layout>
    )
}
