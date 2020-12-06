import React from 'react';
import {TextBox, TodoItemBox} from "../Styled/todoItem-styled";

const TodoItem = () => {

    return(
        <TodoItemBox>
            <input type='checkbox' />
            <TextBox> text </TextBox>
            <button> 지우기 </button>
        </TodoItemBox>
    );

};

export default TodoItem;