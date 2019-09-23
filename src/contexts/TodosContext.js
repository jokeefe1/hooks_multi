import { createContext } from 'react'

const TodosContext = createContext({
    todos: [
        { id: 1, text: 'Clean Room', complete: false },
        { id: 2, text: 'Deploy App', complete: false },
        { id: 3, text: 'Call Candy', complete: false }
    ],
    selected: {}
})

export default TodosContext
