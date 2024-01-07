import { styled } from "styled-components";

export const AdminProfileComponent = styled.section`
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
  .adminProfile {
    width: 100%;
    /* height: 300px; */
    background-color: white;
    display: flex;
    /* justify-content: center;
    align-items: center; */
    flex-wrap: wrap;
    padding: 30px;
    border-radius: 20px;
    margin: 20px 0;
    flex-direction: column;
    overflow: auto;

    .imgBox {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      .box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        background-color: #282828a2;
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0%;
        top: 0;
        color: white;
        font-size: 40px;
      }
    }
  }

  .profileForm {
    h2 {
      margin: 10px 0;
      color: ${(props) => props.theme.favColor};
    }
    .buttonEditAndUpdate {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }

  @media (max-width: 390px) {
    .adminProfile {
      padding: 8px;
    }
    .profileForm {
      padding: 10px;
    }
  }
`;
