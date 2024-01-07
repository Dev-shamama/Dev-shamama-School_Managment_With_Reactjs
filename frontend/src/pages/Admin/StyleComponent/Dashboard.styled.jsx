import { styled } from "styled-components";

export const DashboardComponent = styled.section`
  overflow: auto;
    .panelHeading {
    width: 100%;
    h1 {
      font-size: 30px;
      color: #606060;
      text-align: left;
    }
  }
  .countCartItem {
    width: 100%;
    /* height: 300px; */
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    border-radius: 20px;
    margin: 20px 0;

    .item {
      width: 300px;
      height: 150px;
      border-radius: 20px;
      margin: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0px;
      color: white;
      box-shadow: 0px 0px 10px #dddcdc;

      .icon {
        font-size: 50px;
        padding: 10px;
      }
      .detail {
        h2 {
          font-size: 22px;
        }
        h4 {
          font-size: 18px;
        }
      }
    }
    .item.a {
      background-color: #21d4fd;
      background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
    }
    .item.b {
      background-color: #d9afd9;
      background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
    }
    .item.c {
      background-color: #8bc6ec;
      background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
    }
    .item.d {
      background-color: #0093e9;
      background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    }
  }

  .ActiveStudentAnalyicAndRequest {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-radius: 20px;
    overflow: hidden;
    .ActiveStudentChart {
      width: 500px;
      /* height: 400px; */
      background-color: white;
      border-radius: 20px;
      overflow: hidden;
      .text {
        text-align: center;
        padding: 20px;
        width: 100%;
        color: ${(props) => props.theme.favColor};
        font-size: 20px;
      }
      .chart {
        padding: 10px;
        width: 100%;
        height: 100%;
      }
    }
    .RequestChart {
      width: 90%;
      background-color: white;
      border-radius: 20px;
      overflow: hidden;
      margin-left: 20px;
      .text {
        text-align: center;
        padding: 20px;
        width: 100%;
        color: ${(props) => props.theme.favColor};
        font-size: 20px;
      }
      .chart {
        padding: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: red; */
      }
    }
  }

  @media (max-width: 390px) {
    .countCartItem {
      padding: 8px;
    }

    .ActiveStudentAnalyicAndRequest {
      flex-direction: column;
      gap: 20px;
      .ActiveStudentChart {
        width: auto;
        overflow: scroll;
        .text {
          font-size: 16px;
        }
      }
      .RequestChart {
        width: auto;
        overflow: scroll;
        margin: 0;
      }
    }
  }
`;
