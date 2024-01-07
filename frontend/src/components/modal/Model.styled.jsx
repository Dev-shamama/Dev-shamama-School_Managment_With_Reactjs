import { styled } from "styled-components";

export const ModelContainer = styled.div`
  overflow: auto;
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #02020259;
  z-index: 20;
  transition: all 0.2s;
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  &.active .ModelBox {
    transform: translateY(0px);
  }
  .ModelBox {
    transition: all 0.2s;
    transform: translateY(-100px);
    width: 400px;
    overflow: hidden;
    border-radius: 10px;
    background-color: white;
    .modelTitle {
      width: 100%;
      padding: 10px 20px;
      /* background-color: red; */
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid gray;
      h2 {
        color: ${(props) => props.theme.favColor};
      }
      .modelClose {
        cursor: pointer;
        span {
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 22px;
          background-color: #e1e1e1;
          &:hover {
            background-color: #c3c3c3;
          }
        }
      }
    }
  }
`;
