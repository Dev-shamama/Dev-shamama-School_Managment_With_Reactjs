import { styled } from "styled-components";

export const MarksComponent = styled.section`
  h1 {
    font-size: 30px;
    color: #606060;
  }
  .studentFees {
    width: 100%;
    /* height: 300px; */
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    border-radius: 20px;
    margin: 20px 0;
    overflow: auto;

    table {
      border-collapse: collapse;
      padding: 10px;
      width: 100%;
      cursor: default;
      thead {
        text-align: left;
        tr {
          th {
            padding: 20px 10px;
            font-size: 18px;
          }
        }
      }

      tbody {
        tr {
          border-top: 1px solid #dadada;
          td {
            padding: 20px 10px;
            .statusBtn {
              margin: 0 5px;
              padding: 6px 18px;
              border-radius: 20px;
              text-decoration: none;
            }
            .statusBtn.warning {
              background-color: #fff9c4;
              color: #ffd600;
            }
            .statusBtn.success {
              background-color: #dcedc8;
              color: #64dd17;
            }
            .statusBtn.danger {
              background-color: #ffcdd2;
              color: #d50000;
            }
            .statusBtn.primary {
              background-color: #bbdefb;
              color: #2962ff;
            }
            .statusBtn.primary {
              background-color: #bbdefb;
              color: #2962ff;
            }
            .statusBtn.disabled {
              background-color: #cfd8dc;
              color: #455a64;
            }
          }
        }
        tr:nth-last-of-type(even) {
          background-color: #f9f9f9;
        }
      }
    }
  }
`;
