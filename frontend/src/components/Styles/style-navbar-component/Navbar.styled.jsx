import { styled } from "styled-components";

export const NavbarComponents = styled.div`
  padding: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 120px;
  transition: all 0.3s;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
      h1 {
        margin-right: 20px;
        color: ${(props) => props.theme.favColor};
      }
    }
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      list-style-type: none;
      margin: 0 30px;
      a {
        text-decoration: none;
        color: #050250;
      }
    }
  }

  .account {
    button {
      margin: 0 20px;
    }
  }

  .burger {
    display: none;
    font-size: 40px;
  }

  @media (max-width: 428px) {
  background-color: #f5f5f5;
    .menu {
      display: none;
    }
    .account {
      button {
        display: none;
      }
    }
    .account {
      display: none;
    }
    .burger {
      display: block;
    }
    &.active {
      transition: all 0.3s;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      height: 300px;
      overflow: hidden;
      position: relative;
    }
    &.active .menu {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      left: 0;
      top: 120px;
      gap: 50px;
    }
  }
`;
