import styled from "styled-components";

export const StyledButton = styled.button`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 5px;

  width: ${({ isSubmitButton }) => (isSubmitButton ? "92%" : "30%")};
  margin-top: ${({ isSubmitButton }) => (isSubmitButton ? "20px" : "0")};
  color: ${({ isSubmitButton }) => (isSubmitButton ? "white" : "black")};
  border: ${({ isSubmitButton }) => (isSubmitButton ? "none" : "1px solid #0492c2")};
  background-color: ${({ isSubmitButton }) => (isSubmitButton ? "#0492c2" : "transparent")};

  :hover {
  background-color: lightgrey;
}
`;

