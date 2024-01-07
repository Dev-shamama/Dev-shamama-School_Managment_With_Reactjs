import { styled } from "styled-components";

export const MarksSingleStudents = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .panelHeading {
    width: 100%;
    h1 {
      font-size: 30px;
      color: #606060;
      text-align: left;
    }
  }
  .studentDetail {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    border-radius: 20px;
    margin: 20px 0;
    flex-direction: row;
    gap: 20px;
    overflow: auto;
    .imageBox {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .img {
        width: 100px;
        height: 100px;
        overflow: hidden;
        border-radius: 50%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        span {
          width: 100%;
          height: 100%;
          background-color: #0000005e;
          color: white;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30px;
        }
      }
    }
    table {
      width: 100%;
      border-collapse: collapse;
      tbody {
        tr {
          border-bottom: 1px solid #dfdfdf;
          th {
            text-align: left;
            white-space: nowrap;
          }
          td {
            text-align: left;
            padding: 15px;
            .operationBox {
              display: flex;
              flex-direction: row;
              gap: 10px;
            }
          }
        }
        tr:last-child {
          border: none;
        }
      }
    }
  }
`;
