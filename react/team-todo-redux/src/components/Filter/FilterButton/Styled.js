import styled from "styled-components";

const Styled = styled.button`
  display: inline-block;
  width: calc(33.333% - 10px);
  text-align: center;
  border: 1px solid #fff;
  margin-right: 15px;
  padding: 2px 0;

  span {
    color: #fff;
    font-size: 12px;
  }

  &:hover {
    background-color: #fff;

    span {
      color: #333;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default Styled;
