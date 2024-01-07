import { styled } from "styled-components";

export const ExamLoginComponent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .panelHeading {
    width: 100%;
    h1 {
      font-size: 30px;
      color: #606060;
      text-align: left;
    }
  }
  .examLogin {
    width: 450px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 30px;
    border-radius: 20px;
    margin: 20px 0;
    overflow: auto;
    h2 {
      font-size: 30px;
      color: ${(props) => props.theme.favColor};
    }
    p {
      font-size: 15px;
      cursor: pointer;
      &:active {
        color: blue;
      }
    }
  }
  @media (max-width: 428px) {
    .examLogin {
      width: 100%;
      padding: 10px;
      form {
        padding: 0px;
      }
    }
  }
`;
