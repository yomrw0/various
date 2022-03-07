import React from "react";
import Todo from "./Todo";
import Scrollbars from "react-custom-scrollbars";
import Styled from "./Styled";
import { connect } from "react-redux";

function TodoBody(props) {

  const { todoList } = props;

  return (
    <Styled>
      <Scrollbars style={{ height: "calc(100vh - 250px)" }}>
        {todoList.map(todo => (
          <Todo
            id={todo.id}
            key={todo.id}
            name={todo.name}
            description={todo.description}
          />
        ))}
      </Scrollbars>
    </Styled>
  );
}

const mapStateToProps = todoList => todoList;

export default connect(mapStateToProps)(TodoBody);
