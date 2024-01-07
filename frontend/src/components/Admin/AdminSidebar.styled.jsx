import { styled } from "styled-components";

export const AdminSidebarComponent = styled.div``;

export const AdminNavbar = styled.nav`
  width: 100%;
  padding: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  z-index: 9;

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      list-style-type: none;
      margin: 0 15px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .iconNotification {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .countNotification {
        width: 12px;
        height: 12px;
        position: absolute;
        top: -11%;
        right: -2px;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #d50000;
        color: white;
        border-radius: 50%;
      }
      .account {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: row;
        position: relative;
        cursor: default;

        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        }
        .text {
          height: 100%;
          font-size: 14px;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          flex-direction: row;
          margin: 0 10px;
        }
        .arrow {
          display: flex;
          justify-content: center;
          font-size: 10px;
          align-items: flex-start;
          flex-direction: row;
          cursor: pointer;
        }

        .accountMenu {
          position: absolute;
          right: 0%;
          top: 140%;
          width: 300px;
          height: 0px;
          background-color: white;
          padding: 0 10px;
          border-radius: 6px;
          transition: all 0.2s;
          box-shadow: 0px 5px 14px #d7d1d1c4;
          cursor: default;
          overflow: hidden;
        }
        .accountMenu.active {
          height: 300px;
          padding: 10px;
        }

        /* Option Menu Account */
        .porfile {
          width: 100%;
          height: 80px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          /* padding: 20px; */
          border-bottom: 1px solid #e3e3e3;

          .img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            margin: 10px;

            img {
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
          }
          .detail {
            color: #2e2e2e;
            h4 {
            }
            p {
              font-size: 12px;
            }
          }
        }
        .detailAccount {
          width: 100%;
          height: 100%;
          padding: 10px 0;
          .item {
            cursor: pointer;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 12px;
            text-decoration: none;
            color: black;
            .icon {
              font-size: 20px;
              padding: 0 10px;
            }
            .text {
              font-size: 14px;
            }
          }
          .item:hover {
            background: #d3d0d040;
            border-radius: 6px;
          }
        }
      }
    }
  }
`;

export const AdminMenu = styled.div`
  width: 250px;
  min-height: calc(100% - 67px);
  position: absolute;
  top: 68px;
  left: 0;
  background-color: white;
  box-shadow: 5px 0px 20px #c8c8c8;
  z-index: -1;
  position: fixed;
  transition: all 0.3s;
  overflow-y: hidden;

  &.mainActive {
    width: 100px;
  }

  &.mainActive .profile {
    & .img {
      /* display: none; */
      width: 40px;
      height: 40px;
      transition: all 0.3s ease-in-out;
    }
    & .detail {
      opacity: 0;
      visibility: hidden;
      position: absolute;
      left: -200px;
    }
    & .arrowResponsive .icon {
      transform: rotate(0deg);
    }
  }

  &.mainActive .ItemBox .menuItem {
    & .headingWithIcon h4 {
      /* display: none; */
      transition: all 0.3s ease-in-out;
      visibility: hidden;
      opacity: 0;
    }
    & .notification {
      transition: all 0.3s ease-in-out;
      /* display: none; */
      visibility: hidden;
      opacity: 0;
    }
  }

  .profile {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    transition: all 0.3s;

    .img {
      transition: all 0.3s ease-in-out;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin: 10px;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .detail {
      color: #2e2e2e;
      transition: all 0.3s ease-in-out;
      opacity: 1;
      visibility: visible;
      h4 {
        white-space: nowrap;
      }
      p {
        font-size: 12px;
      }
    }
    .arrowResponsive {
      position: absolute;
      right: 0;

      .icon {
        border: 1px solid ${(props) => props.theme.favColor};
        border-radius: 50%;
        background-color: ${(props) => props.theme.favColor};
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(180deg);
        transition: all 0.5s;
      }
    }
  }

  .ItemBox {
    padding: 5px 0;
    transition: all 0.3s ease-in-out;
    visibility: visible;
    opacity: 1;

    .menuItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      padding: 20px;
      background-color: white;
      margin: 10px 0;
      border-left: 5px solid white;
      transition: all 0.5s ease;
      text-decoration: none;
      cursor: default;
      .headingWithIcon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.5s ease;

        .icon {
          padding: 0 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 25px;
          color: #616161;
        }
        h4 {
          transition: all 0.3s ease-in-out;
          visibility: visible;
          opacity: 1;
          color: #616161;
        }
      }
      .notification {
        /* border: 1px solid black; */
        transition: all 0.3s ease-in-out;
        visibility: visible;
        opacity: 1;
        padding: 4px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        background-color: ${(props) => props.theme.favColor};
        align-items: center;
        span {
          color: white;
          font-size: 12px;
        }
      }
    }

    .menuItem:hover {
      border-left: 5px solid ${(props) => props.theme.favColor};
      transition: all 0.5s ease;
    }
    .menuItem:hover .headingWithIcon .icon {
      transition: all 0.5s ease;
      color: ${(props) => props.theme.favColor};
    }

    .menuItem.active {
      border-left: 5px solid ${(props) => props.theme.favColor};
      transition: all 0.5s ease;
    }
    .menuItem.active .headingWithIcon .icon {
      transition: all 0.5s ease;
      color: ${(props) => props.theme.favColor};
    }
  }
`;

export const MainSectionAdmin = styled.div`
  width: calc(100% - 250px);
  min-height: calc(100% - 67px);
  position: absolute;
  top: 67px;
  left: 250px;
  background-color: #ededed;
  padding: 30px;
  transition: all 0.3s ease-in-out;
  &.active {
    width: calc(100% - 100px);
    left: 100px;
  }
  @media (max-width: 428px) {
    padding: 10px;
  }
`;
