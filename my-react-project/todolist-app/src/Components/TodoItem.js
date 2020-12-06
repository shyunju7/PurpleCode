import React from 'react';
import {TextBox, TodoItemBox} from "../Styled/todoItem-styled";
import {useDispatch} from "react-redux";
import {todoRemove} from "../Reducer/Todo";

const TodoItem = ({todo}) => {

    const {id, text, isCompleted} = todo;
    const dispatch = useDispatch();

    return(

        <TodoItemBox>
            <input type='checkbox' />
            <TextBox> {text} </TextBox>
            <button onClick={() => dispatch(todoRemove(id))}> 지우기 </button>
        </TodoItemBox>
    );

};

export default TodoItem;