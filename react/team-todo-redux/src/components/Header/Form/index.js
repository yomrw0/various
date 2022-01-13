import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import Styled from "./Styled";
import { connect } from "react-redux";
import { addTodo } from "../../../modules/actions";

function Form(props) {
  const { handleAddTodo } = props;
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onChangeNameHandler = event => {
    setName(event.target.value);
  };

  const onChangeDescriptionHandler = event => {
    setDescription(event.target.value);
  };
  return (
    <Styled>
      <button
        type="button"
        className="btn-add-close"
        onClick={() => {
          props.hideDrawer(false);
        }}
      >
        <CloseOutlined />
      </button>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          id="new-todo-input"
          className="input"
          name="text"
          autoComplete="off"
          placeholder="할 일을 입력해 주세요."
          onChange={onChangeNameHandler}
        />
        <textarea
          id="new-todo-textarea"
          className="textarea"
          placeholder="설명을 입력해 주세요."
          onChange={onChangeDescriptionHandler}
        ></textarea>
        <div className="form-btn-area">
          <button type="submit"
            className="btn-add"
            onClick={() =>
              handleAddTodo({ id: Math.random() * 2, name, description }
                , props.hideDrawer(false))
            }
          >
            Add
          </button>
        </div>
      </form>
    </Styled>
  );
}

const mapStateToProps = todoList => todoList;

const mapDispatchToProps = dispatch => ({
  handleAddTodo: ({ id, name, description }) =>
    dispatch(addTodo({ id, name, description }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);