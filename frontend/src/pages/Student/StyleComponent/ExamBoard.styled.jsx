import { styled } from "styled-components";

export const ExamBoardComponent = styled.section`
  h1 {
    font-size: 30px;
    color: #606060;
  }
  .examBoard {
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    border-radius: 20px;
    margin: 20px 0;
    overflow: auto;

    .questionLayer {
      width: 100%;
      border: 1px solid gray;
      padding: 0 20px;
      margin: 15px 0;
      border-radius: 6px;
      .question {
        list-style: none;
        padding: 20px 5px 0 0;
        .answerLayer {
          margin: 10px 0px;
          border-top: 3px solid red;
          border: none;
          .answer {
            padding: 10px;
            list-style: none;
            span {
              margin: 0 10px;
            }
          }
        }
      }
    }
  }
`;
