import styled from "styled-components";

const Styled = styled.div`
  position: relative;
  border-bottom: 1px solid #555;
  padding: 10px 10px 6px;

  .todo-label {
    font-size: 12px;
    padding: 0 10px;
  }

  .btn-group {
    position: absolute;
    right: 0;
    top: 17px;

    button {
      padding: 0 5px;

      svg {
        color: #fff;
      }

      &.btn-desc {
        &.hidden {
          display: none;
        }
      }
    }
  }

  &.todo-item-edit {
    .form-group {
      &::after {
        content: "";
        display: block;
        border-bottom: 2px solid #000;
        transition: all 0.3s ease-out;
        transform-origin: 100% 50%;
        margin-top: 5px;
      }

      &:hover::after {
        border-bottom: 2px solid #09c78a;
        transform-origin: 0% 50%;
      }

      input {
        width: calc(100% - 60px);
        border: 0;
        background-color: transparent;
        color: #fff;
        border-bottom: 1px solid #999;
        padding: 5px;

        &:focus-visible,
        &:focus {
          outline: 0;
        }
      }

      .textarea {
        overflow: auto;
        background-color: transparent;
        color: #fff;
        border: 1px solid #999;
        resize: none;
        outline: 0;
        width: 99%;
        padding: 5px;
        border-radius: 5px;
        margin: 10px 0 0;
      }
    }
  }

  &.todo-item-view {
    .c-cb {
      padding: 5px 0;
    }

    .desc {
      color: #f7f7f7;
      padding: 0 30px 10px;
      font-size: 11px;
      display: none;

      &.active {
        display: block;
      }
    }

    .date {
      color: #aaa;
      font-size: 10px;
      text-align: right;
    }
  }
`;

export default Styled;
