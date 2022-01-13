import React, { useRef, useState, useEffect } from "react";

export default function Todo(props) {
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);
  const [newName, setNewName] = useState('')
  const [isEditing, setEditing] = useState(false);

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          {props.name} 에서 변경할 일을 입력해주세요
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          취소
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          저장
        </button>
      </div>
    </form>
  );

  const deco = {
    textDecoration : "line-through"
  }

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label"
        htmlFor={props.id}
        style={(props.completed ? deco : null)}
        >
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          변경
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          삭제
        </button>
      </div>
    </div>
  );

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    if (newName === '') {
      e.preventDefault();
      alert('내용을 입력해주세요')
    } else {
      e.preventDefault();
      props.editTask(props.id, newName);
      setNewName("");
      setEditing(false);
    }
  }

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}