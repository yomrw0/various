import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import Styled from './Styled';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../modules/actions';

export default function Form(props) {

  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function onChangeNameHandler(e) {
    setName(e.target.value);
  };

  function onChangeDescriptionHandler(e){
    setDescription(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setName('');
    setDescription('');
  };

  return (
    <Styled>
      <button
        type='button'
        className='btn-add-close'
        onClick={() => {
          props.hideDrawer(false);
        }}
      >
        <CloseOutlined />
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='new-todo-input'
          className='input'
          autoComplete='off'
          placeholder='할 일을 입력해 주세요.'
          value={name}
          onChange={onChangeNameHandler}
        />
        <textarea
          id='new-todo-textarea'
          className='textarea'
          placeholder='설명을 입력해 주세요.'
          value={description}
          onChange={onChangeDescriptionHandler}
        ></textarea>
        <div className='form-btn-area'>
          <button type='submit'
            className='btn-add'
            onClick={() => {
              dispatch(addTodo({ name, description }));
              props.hideDrawer(false)
            }}
          >
            Add
          </button>
        </div>
      </form>
    </Styled>
  );
}
