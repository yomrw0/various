import React, { useState } from 'react';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import StyledDrawer from '../CommonStyled/StyledDrawer';
import Form from './Form';
import Styled from './Styled';
// import { useDispatch } from 'react-redux';
//import { list_search } from '../../modules/actions';

const AntdDrawer = StyledDrawer(Drawer);

function Header() {
  const [addVisible, setAddVisible] = useState(false);
  // const [searchTodo, setSearchingTodo ] = useState('')
  // const [id, setId] = useState('')
  // const [description, setDescription] = useState('')

  // const dispatch = useDispatch();

  function showDrawer() {
    setAddVisible(true);
  };

  function hideDrawer() {
    setAddVisible(false);
  };
  
  function onChangeSearchHandler(e) {
    // setSearchingTodo(e.target.value);
  };

  return (
    <Styled>
      <div className='header-top'>
        <button
          type='button'
          className='btn-addTask'
          onClick={() => showDrawer(true)}
        >
          <PlusOutlined />
        </button>
        <div className='search-wrapper'>
          <input
            type='text'
            id='SET_LIST_SEARCH'
            className='input-search'
            placeholder='검색어를 입력해 주세요.'
            onChange={onChangeSearchHandler}
          />
          <button
            type='button'
            className='btn-search'
            // onClick={() => dispatch(list_search({id, name: searchTodo, description}))}
          >
            <SearchOutlined />
          </button>
        </div>
      </div>
      <div className='header-title'>
        <h1>TO DO LIST</h1>
      </div>

      <AntdDrawer
        closable={false}
        visible={addVisible}
        placement='bottom'
        onClose={hideDrawer}
      >
        <Form hideDrawer={() => hideDrawer()} />
      </AntdDrawer>
    </Styled>
  );
};

export default Header;
