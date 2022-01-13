import styled from "styled-components";

const Styled = styled.div`
  position: relative;
  padding: 20px 20px 30px;

  .header-top {
    position: relative;
    margin-bottom: 25px;
    text-align: right;

    .search-wrapper {
      position: relative;
      display: inline-block;
      width: 60%;
      border: 1px solid #fff;
      border-radius: 50px;
      height: 32px;
      padding: 0 15px 0 40px;

      .input-search {
        background-color: transparent;
        width: 100%;
        color: #fff;
        font-size: 12px;
        border: 0;
        height: 100%;
        outline: 0;
      }

      .btn-search {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
      }
    }

    .btn-addTask {
      position: absolute;
      left: 0;
      width: 40px;
      height: 40px;
      text-align: center;

      span {
        font-size: 25px;
        color: #fff;
      }
    }
  }

  .header-title {
    position: relative;
    text-align: center;

    h1 {
      display: inline-block;
      background-color: transparent;
      border-radius: 40px;
      padding: 7px 20px;
      margin: 0;
      border: 2px solid #fc4242;
      color: #fc4242;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

export default Styled;
