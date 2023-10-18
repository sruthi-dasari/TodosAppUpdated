import styled from "styled-components";

import {AiFillDelete, AiFillEdit} from 'react-icons/ai'

export const TodoItemContainer= styled.div`
    display: flex;
    font-family: Luminary;
    background-color: #ffffff;
    align-items: center;
    padding: 10px;
`

export const TodoItemLabelBox= styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const CheckBox = styled.input`
    height: 30px;
    width: 30px;
    margin-right: 10px;
`

export const TodoLabel= styled.p`
    font-size: 25px;
`

export const EditAndDeleteContainer= styled.div`
    display: flex;
    width: 100px;
    justify-content: space-between;
    align-items: center;
`

export const EditIcon= styled(AiFillEdit)`
    height: 30px;
    width: 30px;
`

export const DeleteIcon= styled(AiFillDelete)`
height: 30px;
    width: 30px;
`





