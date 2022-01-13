import React from "react";
import Styled from "./Styled";

function FilterButton() {
  return (
    <Styled
      type="button"
      className="btn toggle-btn"
    >
      <span className="visually-hidden">Show </span>
      <span>필터버튼</span>
      <span className="visually-hidden"> tasks</span>
    </Styled>
  );
}

export default FilterButton;
