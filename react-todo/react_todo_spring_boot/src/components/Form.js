import React, { useState } from "react";

export default function Form(props) {
    const [name, setName] = useState('');
  
    function handleChange(e) {
      setName(e.target.value);
    }
  
    function handleSubmit(e) {
      if(name === '') {
        e.preventDefault();
        alert("할 일을 적어주세요!!!")
      } else {
        e.preventDefault();
        props.addTask(name);
        setName("");
      }
    }
  
    return (
      <form method="post" onSubmit={handleSubmit} >
        <h2 className="label-wrapper"></h2>
        <input
          type="text"
          id="new-todo-on"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
          placeholder="할 일을 적어주세요!"
          autoFocus
        />
        <button type="submit" className="btn btn__primary btn__lg">
          추가
        </button>
      </form>
    );
  }