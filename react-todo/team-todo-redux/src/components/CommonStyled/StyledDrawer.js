import styled from "styled-components";

const StyledDrawer = (Component) => styled(Component)`
  .ant-drawer-content-wrapper {
    height: 265px !important;

    .ant-drawer-content {
      background-color: #333;
    }
  }
`;

export default StyledDrawer;
