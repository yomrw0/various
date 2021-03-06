import React, { useEffect } from 'react';
import Todo from './Todo';
import Scrollbars from 'react-custom-scrollbars';
import Styled from './Styled';
import { useDispatch, useSelector } from 'react-redux';
import { view_todo } from '../../modules/actions';

export default function TodoBody() {
  
  const list = useSelector(state => state.todoList.list);
  const dispatch = useDispatch();

  useEffect(() => dispatch(view_todo()), []);

  return (
    <Styled>
      <Scrollbars style={{ height: 'calc(100vh - 250px)' }}>
        {list &&
          list.map(todo =>
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              description={todo.description}
            />
          )}
      </Scrollbars>
    </Styled>
  );
}