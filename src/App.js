import { Component } from 'react'
import './App.css'
import Home from './components/Home'
import TodoContext from './components/context/TodoContext'

class App extends Component {
    state = {
        todoList: [],
    }
    changeTodoStatus = (todoId) => {
        const todoItem = todoList.find(eachItem => 
                            eachItem.id === todoId
                        )

            console.log(todoItem)
    }

    render() {
        return (
            <TodoContext.Provider
                value={{
                    changeTodoStatus: this.changeTodoStatus,
                }}
            >
                <Home />
            </TodoContext.Provider>

        )
    }

}


export default App
