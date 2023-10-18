
import { Component } from 'react'
import TodoContext from '../context/TodoContext'
import {
    TodoItemContainer, TodoItemLabelBox, TodoLabel, EditAndDeleteContainer, DeleteIcon, EditIcon,
    CheckBox
} from './styledComponents'

class TodoItem extends Component {
    state = {
        completed: false,
        title: '',
       
    }

    onClickTodoCheckbox = () =>
    <TodoContext.Consumer>
        {value => {
            const {changeTodoStatus} = value

            const {todoDetails} = this.props
            const { completed, id, userId, title} = todoDetails

            changeTodoStatus(id)
        }}
    </TodoContext.Consumer>
        
    
    // <TodoContext.Consumer>
    //     {value => {
    //         const {todoList} = value

    //         const {todoDetails} = this.props
    //     const { completed, id, userId, title} = todoDetails

    //         const todoItem = todoList.find(eachItem => 
    //                 eachItem.id === id
    //             )

    //         const newTodo = {
    //             completed: !completed,
    //             id,
    //             title,
    //             userId,
    //         }

    //         this.setState(({
    //             todoList: [...todoList, newTodo],
    //             title: '',
    //         }))
    //     }}
    // </TodoContext.Consumer>


render() {

    const { todoDetails } = this.props
    const { title } = todoDetails
    const {todoList} = this.state

    console.log(todoList)

    return (
        <TodoItemContainer>
            <CheckBox type="checkbox" onClick = {this.onClickTodoCheckbox}/>
            <TodoItemLabelBox>
                <TodoLabel>{title}</TodoLabel>
                <EditAndDeleteContainer>
                    <EditIcon />
                    <DeleteIcon />
                </EditAndDeleteContainer>
            </TodoItemLabelBox>
        </TodoItemContainer>
    )
}
        
    }

export default TodoItem