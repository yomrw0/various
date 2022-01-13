import styled from "styled-components";

const StyledCheckbox = (Component) => styled(Component)`
  align-items: center;

  .ant-checkbox {
    top: 0;

    .ant-checkbox-inner {
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background-color: #666;
      border: 1px solid #666;

      &::after {
        left: 26.5%;
      }
    }

    & + span {
      color: #fff;
    }
  }

  .ant-checkbox-checked {
    .ant-checkbox-inner {
      border: 1px solid #fc4242;
      background-color: #fc4242;
    }

    & + span {
      text-decoration: line-through;
      color: #999;
    }
  }
`;

export default StyledCheckbox;
