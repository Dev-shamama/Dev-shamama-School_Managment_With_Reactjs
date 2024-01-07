import { styled } from "styled-components";

export const StudentFeeDetailComponent = styled.section`
  .dashboardBox {
    width: 100%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    padding: 40px;
    color: #353535;
    background-color: white;
    box-shadow: 0px 0px 10px #dddcdc;
    overflow: auto;
    .leftSide {
      height: 400px;
      margin-right: 30px;
      min-width: 400px;
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
    .rightSide {
    }
    h1 {
      font-size: 60px;
      color: ${(props) => props.theme.primaryColor};
    }
  }
  @media (max-width: 428px) {
    .dashboardBox {
      justify-content: flex-start;
      flex-direction: column;
      padding: 20px;
      gap: 20px;
      height: 100%;
      .leftSide {
        height: 100%;
      }
      .rightSide {
        min-width: auto;
      }
      h1 {
        font-size: 35px;
      }
    }
  }
`;
