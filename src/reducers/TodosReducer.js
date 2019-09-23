const ADD_TODO = 'ADD_TODO'
const SELECT_TODO = 'SELECT_TODO'
const UPDATE_TODO = 'UPDATE_TODO'
const DELETE_TODO = 'DELETE_TODO'

export default function TodosContext(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case SELECT_TODO:
            return {
                ...state,
                selected: action.payload
            }
        case UPDATE_TODO:
            const updatedTodo = { ...state.selected, text: action.payload }
            const updatedTodos = state.todos.map(todo => {
                if (todo.id === updatedTodo.id) {
                    todo = updatedTodo
                }
                return todo
            })
            return {
                ...state,
                todos: [...updatedTodos],
                selected: {}
            }
        case DELETE_TODO:
            const filteredTodos = state.todos.filter(
                todo => todo.id !== action.payload.id
            )
            return {
                ...state,
                todos: [...filteredTodos]
            }
        default:
            return state
    }
}
