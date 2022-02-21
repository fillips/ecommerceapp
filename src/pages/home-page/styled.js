import styled from "styled-components";

export const HomePageHeader = styled.h1`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const HomePageTitle = styled.h2`
  text-align: center;
`;

export const HomeContainer = styled.div`
  width: 100%;
`;

export const HomePageGrid = styled.div`
margin-left: 50px;
margin-right: 50px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;