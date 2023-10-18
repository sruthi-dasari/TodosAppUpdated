import styled from 'styled-components'

export const HomeContainer = styled.div`
height: 100vh;
padding: 20px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    
    font-family: Luminary;
`

export const TodosHeading = styled.h1`
    text-align: center;
    color: #ffffff;
    font-family: Luminary;
    background-color: #3dc4d9;
    padding: 10px;
    font-size: 30px;
`
export const TaskCreationContainer = styled.div`
    background-color:#05f5ed;
    padding: 10px;
`
export const CreateTaskHeading = styled.h1`
    font-size: 25px;
    color: #ffffff;
`

export const SearchInputContainer = styled.div`
    padding: 10px;
    background-color: #ffffff;
`

export const SearchInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    font-size: 15px;
`

export const BasicBtn = styled.button`
margin-top: 10px;
    background-color: #000000;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 10px;
`
  
export const AddBtn = styled(BasicBtn)`
    
`

export const CreatedTasksContainer = styled.div`
    background-color: #1ca4e8;
    padding: 10px;
`

export const MyTasksHeading = styled.h1`
font-size: 25px;
color: #ffffff;
`

export const SaveBtn = styled(BasicBtn)`
    margin-top: 10px;
`

export const FormContainer = styled.div`
    
`

export const Form = styled.form`
    
`