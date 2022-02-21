import styled from "styled-components";

export const ItemPageGrid = styled.div`
  @media only screen and (min-width: 300px) {
    margin-left: 50px;
    margin-right: 50px;
    grid-template-columns: repeat(auto-fit, minmax(450px, 2fr));
  }

  @media only screen and (max-width: 599px) {
    margin-left: 20px;
    margin-right: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  }

  display: grid;
  align-items: center;

  grid-gap: 2rem;
`;
