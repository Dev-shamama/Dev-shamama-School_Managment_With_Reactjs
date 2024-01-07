import { styled } from "styled-components";

export const SectionHeading = styled.div`
  padding: 80px 0px;
  h1 {
    font-size: 60px;
    padding: 10px;
    color: ${(props) => props.theme.primaryColor};
    box-shadow: 0px 0px 4px #cbcbcb;
  }

  @media (max-width: 428px) {
    h1 {
      font-size: 30px;
      text-align: center;
    }
  }
`;

export const HomeContainer = styled.section`
  width: 1000px;
  /* min-height: 100vh; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .leftSide {
    width: 600px;
    height: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 50px;
    h3 {
      font-size: 30px;
      color: ${(props) => props.theme.primaryColor};
    }
    h1 {
      font-size: 50px;
      color: ${(props) => props.theme.favColor};
    }
    p {
      margin: 30px 0;
      line-height: 26px;
    }
  }
  .rightSide {
    width: 600px;
    /* border: 1px solid red; */
    /* height: 500px; */
    img {
      object-fit: cover;
      width: 100%;
    }
  }

  @media (max-width: 428px) {
    width: auto;
    flex-direction: column;
    .leftSide {
      width: 100%;
      height: auto;
      padding: 20px;
    }
    .rightSide {
      width: 100%;
      margin: 40px 0px;
    }
  }
`;

export const CardContainer = styled.section`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  .item {
    width: 300px;
    height: 400px;
    margin: 10px;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    flex-direction: column;
    color: white;
    border-radius: 6px;
    &.a {
      background-color: #0093e9;
      background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    }
    &.b {
      background-color: #fbab7e;
      background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
    }
    &.c {
      background-color: #d9afd9;
      background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
    }
    &.d {
      background-color: #4158d0;
      background-image: linear-gradient(
        43deg,
        #4158d0 0%,
        #c850c0 46%,
        #ffcc70 100%
      );
    }
    &.e {
      background-color: #08aeea;
      background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
    }
    &.f {
      background-color: #ff9a8b;
      background-image: linear-gradient(
        90deg,
        #ff9a8b 0%,
        #ff6a88 55%,
        #ff99ac 100%
      );
    }

    h1 {
      padding-top: 20px;
    }
    .line {
      min-width: 200px;
      min-height: 2px;
      background-color: white;
      margin: 20px 0;
    }
    p {
      line-height: 30px;
    }
  }

  @media (max-width: 428px) {
    width: auto;
    /* flex-direction: column; */
  }
`;

export const StudentContainer = styled.section`
  width: 1000px;
  /* min-height: 100vh; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media (max-width: 428px) {
    width: auto;
  }
`;

export const StudentItem = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  flex-direction: ${(props) => props.id};
  /* border: 2px solid salmon; */
  margin: 60px 0;

  .leftSide {
    width: 500px;
    height: auto;
    overflow: hidden;
    margin: 0 70px;
    box-shadow: ${(props) => props.boxshadow} 50px 0px
      ${(props) => props.theme.favColor};
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      /* border: 1px solid black; */
    }
  }
  .rightSide {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: ${(props) => props.textalign};
    flex-direction: column;
    /* border: 2px solid salmon; */
    h1 {
      font-size: 40px;
      color: ${(props) => props.theme.primaryColor};
    }
    p {
      margin: 20px 0;
      color: ${(props) => props.theme.darkColor};
    }
  }

  @media (max-width: 428px) {
    height: auto;
    flex-direction: column;
    align-items: center;

    .leftSide {
      width: 80%;
      box-shadow: none;
      margin: 0;
      img {
        border: none;
      }
    }
    .rightSide {
      width: 80%;
      align-items: flex-start;
    }
  }
`;

export const PointContainer = styled.section`
  width: 1000px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  /* background-color: ${(props) => props.theme.favColor}; */
  margin-top: 120px;
  .galleryContoller {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .leftSide {
    width: 80%;
    /* height: 400px; */
    .imgBox {
      width: 100%;
      /* height: 700px; */
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }
  .rightSide {
    width: 50%;
    .item {
      /* height: 100px; */
      margin: 30px 0;
      background-color: white;
      padding: 30px;
      border-radius: 6px;
      box-shadow: 20px 20px 0 ${(props) => props.theme.favColor};
      border: 1px solid ${(props) => props.theme.favColor};
      h1 {
        color: ${(props) => props.theme.primaryColor};
      }
      p {
        color: ${(props) => props.theme.darkColor};
      }
    }
  }

  @media (max-width: 428px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    margin-bottom: 100px;

    .galleryContoller {
      flex-direction: column;
    }
    .rightSide {
      width: 85%;
    }
  }
`;

export const GalleryContainer = styled.section`
  width: 1300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  .galleryBox {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
    .galleryContent {
      width: 100%;
      min-height: 100%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      .content {
        background-color: #ffffff;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        .item {
          width: 300px;
          height: 600px;
          display: flex;
          justify-content: center;
          align-items: center;

          .img {
            width: 300px;
            height: 300px;
            box-sizing: border-box;
            position: relative;
            img {
              box-sizing: border-box;
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
          }
          .img::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #0094e93d;
            background-image: linear-gradient(
              160deg,
              #0094e967 0%,
              #80d0c76b 100%
            );
          }
          .detail {
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            padding: 20px;
            h1 {
              color: ${(props) => props.theme.primaryColor};
            }
            p {
              color: ${(props) => props.theme.darkColor};
            }
          }
        }
      }
    }
  }

  @media (max-width: 428px) {
    display: none;
  }
`;

export const FooterContainer = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.favColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 40px;
  padding: 70px;
  .item {
    width: 600px;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .logo {
      h1 {
        font-size: 50px;
      }
    }
    .social-icon {
      font-size: 30px;
      margin: 30px 0;
      a {
        color: white;
        margin: 0 15px;
      }
    }
    .menu {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      li {
        list-style-type: none;
        margin: 0 20px;
        a {
          white-space: nowrap;
          color: white;
          text-decoration: none;
        }
      }
    }
  }
`;
