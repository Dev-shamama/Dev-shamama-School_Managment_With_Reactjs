import { styled } from "styled-components";

export const Form = styled.form`
  padding: 20px 40px;
`;

export const InputGroup = styled.div`
  width: 100%;
  /* height: 40px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border: 1px solid #3f3f3f;
  border-radius: 10px;
  margin: 20px 0;
`;

export const InputIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-right: 0;
  font-size: 20px;
  color: #3f3f3f;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: none;
  outline: none;
`;

export const SelectMenu = styled.select`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: none;
  outline: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: none;
  outline: none;
`;
