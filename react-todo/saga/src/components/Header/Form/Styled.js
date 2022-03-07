import styled from "styled-components";

const Styled = styled.div`
  position: relative;
  height: 100%;
  padding-top: 25px;

  .btn-add-close {
    position: absolute;
    right: 0;
    top: 0;

    svg {
      color: #fff;
    }
  }

  input {
    width: 100%;
    background-color: transparent;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    color: #fff;
    padding: 5px;
    font-size: 12px;
  }

  textarea {
    background-color: transparent;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 3px;
    height: 90px;
    color: #fff;
    padding: 5px;
    font-size: 12px;
  }

  .form-btn-area {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;

    .btn-add {
      display: block;
      width: 100%;
      height: 35px;
      line-height: 35px;
      color: #fff;
      background-color: #fc4242;
      border-radius: 3px;
    }
  }
`;

export default Styled;
