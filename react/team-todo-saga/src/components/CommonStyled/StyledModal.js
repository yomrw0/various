import styled from "styled-components";

const StyledModal = (Component) => styled(Component)`
  .ant-modal-content {
    background-color: #333;

    .ant-modal-close {
      .ant-modal-close-icon {
        svg {
          color: #fff;
        }
      }
    }

    .ant-modal-header {
      background-color: #333;
      border-bottom: 0;

      .ant-modal-title {
        color: #fff;
        text-align: center;
      }
    }

    .ant-modal-body {
      .modal-buttons {
        button {
          font-size: 12px;
          width: 25%;
          color: #fff;

          > span {
            position: relative;
            display: block;
            background-color: #666;
            border-radius: 40px;
            width: 40px;
            height: 40px;
            line-height: 40px;
            margin: 0 auto 10px;

            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: #fff;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
`;

export default StyledModal;
