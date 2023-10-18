
import { Component } from 'react'
import TodoContext from '../context/TodoContext'
import {
    TodoItemContainer, TodoItemLabelBox, TodoLabel, EditAndDeleteContainer, DeleteIcon, EditIcon,
    CheckBox
} from './styledComponents'

class TodoItem extends Component {
    state = {
        isChecked: false,
    }

const { todoDetails } = this.props
const { completed, id, title, userId } = todoDetails

render() {

    return (
        <TodoItemContainer>
            <CheckBox type="checkbox" />
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