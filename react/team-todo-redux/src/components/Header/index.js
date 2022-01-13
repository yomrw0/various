import React, { useState } from "react";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import StyledDrawer from "../CommonStyled/StyledDrawer";
import Form from "./Form";
import Styled from "./Styled";

const AntdDrawer = StyledDrawer(Drawer);

function Header() {
  const [addVisible, setAddVisible] = useState(false);

  const showDrawer = () => {
    setAddVisible(true);
  };

  const hideDrawer = () => {
    setAddVisible(false);
  };
  
  function searchFilter() {
    let search = document.getElementById("list-search").value.toLowerCase();
    let listInner = document.getElementsByClassName("todo");

    for (let i = 0; i < listInner.length; i++) {
      let todo = listInner[i].getElementsByClassName("title");

      if (todo[0].innerHTML.toLowerCase().indexOf(search) !== -1) {
        listInner[i].style.display = "block";
      } else {
        listInner[i].style.display = "none";
      }
    }
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
            id="list-search"
            className="input-search"
            placeholder="검색어를 입력해 주세요."
            onKeyUp={searchFilter}
          />
          <button type="button" className="btn-search">
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
