import React, { useEffect, useState } from "react";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import StyledDrawer from "../CommonStyled/StyledDrawer";
import Form from "./Form";
import Styled from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { view, searchList } from "../../modules/Service";
import { viewTodo, listSearch } from "../../modules/actions";

const AntdDrawer = StyledDrawer(Drawer);

function Header() {
  const [addVisible, setAddVisible] = useState(false);
  const [searchTodo, setSearchingTodo ] = useState('')
  const [id, setId] = useState('')
  const [description, setDescription] = useState('')

  const showDrawer = () => {
    setAddVisible(true);
  };

  const hideDrawer = () => {
    setAddVisible(false);
  };

  // const dispatch = useDispatch();
  // const viewData = async () => dispatch(viewTodo((await view()).data));

  // useEffect(() => viewData(), [])

  
  const onChangeSearchHandler = e => {
    setSearchingTodo(e.target.value);
  }

  return (
    <Styled>
      <div className="header-top">
        <button
          type="button"
          className="btn-addTask"
          onClick={() => showDrawer(true)}
        >
          <PlusOutlined />
        </button>
        <div className="search-wrapper">
          <input
            type="text"
            id="list_search"
            className="input-search"
            placeholder="검색어를 입력해 주세요."
            onChange={onChangeSearchHandler}
          />
          <button
            type="button"
            className="btn-search"
            onClick={() => searchList({id, name: searchTodo, description})}
          >
            <SearchOutlined />
          </button>
        </div>
      </div>
      <div className="header-title">
        <h1>TO DO LIST</h1>
      </div>

      <AntdDrawer
        closable={false}
        visible={addVisible}
        placement="bottom"
        onClose={hideDrawer}
      >
        <Form hideDrawer={() => hideDrawer()} />
      </AntdDrawer>
    </Styled>
  );
}

export default Header;
