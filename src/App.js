import { Component } from 'react'
import './App.css'
import Home from './components/Home'
import TodoContext from './components/context/TodoContext'

class App extends Component {
    state = {
        todoList: [],
    }
    changeTodoStatus = (todoId) => {
        
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
