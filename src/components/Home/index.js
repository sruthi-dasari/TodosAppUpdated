import { Component } from 'react'

import TodoItem from '../TodoItem'

import {
    HomeContainer,
    TodosHeading,
    TaskCreationContainer,
    CreateTaskHeading,
    SearchInputContainer,
    SearchInput,
    AddBtn,
    CreatedTasksContainer,
    MyTasksHeading,
    FormContainer,
    Form,
    SaveBtn
} from './styledComponents'
import TodoContext from '../context/TodoContext'

class Home extends Component {

    state = {
        todoList: [],
        newTodo: ''
    }

    componentDidMount() {
        this.getInitialTodos()
        this.setTodolistInContext()
    }

    setTodolistInContext = () =>
    <TodoContext.Consumer>
        {value =>{
            const {todoList} = value

        
        }}
    </TodoContext.Consumer>

    getInitialTodos = async () => {

        const options = {
            method: 'GET'
        }

        const url = "https://jsonplaceholder.typicode.com/users/1/todos"

        const response = await fetch(url, options)

        const data = await response.json()
        // console.log(data)

        const updatedData = data.map(eachItem => ({
            completed: eachItem.completed,
            id: eachItem.id,
            title: eachItem.title,
            userId: eachItem.userId
        })
        )

        this.setState({ todoList: updatedData })
    }


    onChangeInput = (event) => {
        this.setState({ newTodo: event.target.value })
    }

    addTodo = () => { }

    onClickAdd = () => {
        this.addTodo()
    }

    changeTodoStatus = (todoId) => {
        const {todoList} = this.state

        const todoItem = todoList.map(eachItem => 
            eachItem.id === todoId
            )
            
    }

    render() {
        const newTodo = this.state
        const { todoList } = this.state

        return (
            <HomeContainer>
                <TodosHeading>Todos</TodosHeading>
                <FormContainer>
                    <Form type="form">
                        <TaskCreationContainer>
                            <CreateTaskHeading>Create Task</CreateTaskHeading>
                            <SearchInputContainer><SearchInput type="search" onChange={this.onChangeInput} placeholder='What needs to be done?' /></SearchInputContainer>
                            <AddBtn type='button' onClick={this.onClickAdd}>Add</AddBtn>
                        </TaskCreationContainer>
                        <CreatedTasksContainer>
                            <MyTasksHeading>My Tasks</MyTasksHeading>
                            {todoList.map(eachItem =>
                                <TodoItem todoDetails={eachItem} key={eachItem.id} todoList={todoList} />
                            )}

                            <SaveBtn type='button'>Save</SaveBtn>
                        </CreatedTasksContainer>
                    </Form>
                </FormContainer>
            </HomeContainer>
        )
    }


}

export default Home