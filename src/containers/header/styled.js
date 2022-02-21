import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding-top: 10px;
  background-color: lightgrey;
  margin-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;

  @media only screen and (max-width: 599px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
