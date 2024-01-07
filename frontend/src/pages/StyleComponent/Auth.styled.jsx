import { styled } from "styled-components";

export const AuthContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);

  .authBox {
    width: 800px;
    height: 500px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border-radius: 20px;
    overflow: hidden;
    .leftSide {
      padding: 30px;
      width: 400px;
      height: 100%;
      img {
        object-fit: contain;
        height: 100%;
        width: 100%;
      }
    }
    .rightSide {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      h2 {
        font-size: 36px;
        color: ${(props) => props.theme.favColor};
      }
      p {
        font-size: 11px;
      }
      .platformLogin {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 10px;
        margin: 10px 0;
      }
    }
  }

  @media (max-width: 428px) {
    padding: 30px;
    .authBox {
      height: auto;
      flex-direction: column-reverse;
      .leftSide {
        height: 400px;
      }
      .rightSide {
        width: 100%;
        height: 400px;
      }
    }
  }
`;

export const ContactContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #21d4fd;

  .contactBox {
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffff;
    flex-direction: row-reverse;
    border-radius: 20px;

    .imgBox {
      width: 400px;
      padding: 20px;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }

    .contactBoxLayer {
      width: 400px;
      height: 100%;
      form {
        width: 100%;
        h1 {
          font-size: 30px;
          color: ${(props) => props.theme.favColor};
        }
      }
    }
  }

  @media (max-width: 428px) {
    padding: 30px;
    .contactBox {
      flex-direction: column;
        width: 100%;
        .imgBox  {
          width: auto;
        }
    }
    .contactBoxLayer {
      padding: 30px;
    }
  }
`;
