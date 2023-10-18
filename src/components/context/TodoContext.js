import React from 'react'

const TodoContext = React.createContext({
    changeTodoStatus: () => {},
})

export default TodoContext