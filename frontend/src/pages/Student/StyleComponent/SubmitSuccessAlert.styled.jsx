import { styled } from "styled-components";

export const SuccessAlert = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  .icon {
    font-size: 100px;
    color: ${props=>props.theme.favColor};
  }
  .detail {
    h1 {
      font-size: 50px;
      margin-bottom: 15px;
    }
    a {
      padding: 10px 30px;
      border: 1px solid ${props=>props.theme.favColor};
      background-color: ${props=>props.theme.favColor};
      color: white;
      &:hover {
        opacity: .8;
      }
    }

  }
  
`;
