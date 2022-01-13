import React, { useRef, useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  EllipsisOutlined,
  CheckOutlined,
  CloseOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Modal, Checkbox } from "antd";
import Styled from "./Styled";
import StyledModal from "../../CommonStyled/StyledModal";
import StyledCheckbox from "../../CommonStyled/StyledCheckbox";
import { connect } from "react-redux";
import { editTodo, removeTodo } from "../../../modules/actions";

const AntdModal = StyledModal(Modal);
const AntdCheckbox = StyledCheckbox(Checkbox);

function Todo(props) {
  const { handleEditTodo, handleRemoveTodo } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);
  const [newDesc, setNewDesc] = useState(props.description);
  const [isActive, setActive] = useState(false);

  const editNameRef = useRef(null);
  const editDescRef = useRef(null);
  const editButtonRef = useRef(null);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const showModal = (e) => {
    e.preventDefault();
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  function handleDescChange(e) {
    setNewDesc(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    setEditing(false);
  }

  function isModify() {
    setIsModalVisible(false);
    setEditing(true);
  }

  const editingTemplate = (
    <Styled className="todo-item-edit">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            id={props.id + "name"}
            className="todo-text"
            type="text"
            value={newName}
            onChange={handleNameChange}
            ref={editNameRef}
          />
          <textarea
            id={props.id + "desc"}
            className="textarea"
            value={newDesc}
            onChange={handleDescChange}
            ref={editDescRef}
          ></textarea>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn todo-cancel"
          >
            <CloseOutlined />
          </button>
          <button
            type="submit"
            className="btn btn__primary todo-edit"
            onClick={() =>
              handleEditTodo(props.id, newName, newDesc)
            }  
          >
            <CheckOutlined />
          </button>
        </div>
      </form>
    </Styled>
  );

  const viewTemplate = (
    <Styled className="todo-item-view">
      <div className="c-cb title">
        <AntdCheckbox type="checkbox">{props.name}</AntdCheckbox>
      </div>
      <div className={isActive ? "desc active" : "desc"}>{props.description}</div>
      <div className="date">2021-12-15 오후 05:56:51</div>
      <div className="btn-group">
        <button
          type="button"
          className={`btn-desc ${!props.description && "hidden"}`}
          onClick={handleToggle}
        >
          <DownOutlined />
        </button>
        <button type="button" onClick={showModal}>
          <EllipsisOutlined />
        </button>
      </div>
      <AntdModal
        title={props.name}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="modal-buttons">
          <button
            type="button"
            className="btn"
            onClick={() => isModify()}
            ref={editButtonRef}
          >
            <EditOutlined />
            수정
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => handleRemoveTodo(props.id)}
          >
            <DeleteOutlined />
            삭제
          </button>
        </div>
      </AntdModal>
    </Styled>
  );

  return (
    <li className="todo">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}

const mapStateToProps = todoList => todoList;

const mapDispatchToProps = dispatch => ({
  handleEditTodo: ( id, name, description ) =>
    dispatch(editTodo( id, name, description )),
  handleRemoveTodo: id => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);