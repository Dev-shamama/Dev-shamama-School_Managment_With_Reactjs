import { styled } from "styled-components";

export const Button = styled.button`
  padding: 10px 30px;
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.favColor};
  background-color: ${(props) =>
    props.$primary ? "white" : props.theme.favColor};
  color: ${(props) => (props.$primary ? props.theme.favColor : "white")};
  transition: all 0.5s ease;

  &:hover {
    background-color: ${(props) =>
      props.$primary ? props.theme.favColor : "white"};
    color: ${(props) => (props.$primary ? "white" : props.theme.favColor)};
  }
`;

export const PlatformButton = styled.button`
  padding: 4px 10px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
  background: none;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    font-size: 20px;
  }
`;

export const OpeationButton = styled.button`
  padding: 6px 10px;
  border: 1px solid none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
  color: white;
  &.danger {
    border: 1px solid #d50000;
    background: #d50000;
  }
  &.success {
    border: 1px solid #64dd17;
    background: #64dd17;
  }
  &.primary {
    border: 1px solid #2962ff;
    background: #2962ff;
  }
  &.warning {
    border: 1px solid #ffd600;
    background: #ffd600;
  }
`;
