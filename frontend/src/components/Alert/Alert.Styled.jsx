import { styled } from "styled-components";

export const AlertComponent = styled.div`
  z-index: 999;
  border-left: 3px solid ${props=>props.status};
  
  position: fixed;
  background-color: ${props=>props.bg};
  bottom: 30px;
  right: 30px;
  width: 350px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
  .alertIcon {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    .icon {
      height: 100%;
      padding: 8px;
      font-size: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props=>props.status};
    }
    .alertMessage {
      color: ${(props) => props.theme.darkColor};
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      h3 {
        color: ${props=>props.status};
      }
      p {
        color: #292929;
      }
    }
  }
`;
