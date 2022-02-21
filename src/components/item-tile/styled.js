import styled from "styled-components";

export const ItemTileContainer = styled.div`
  min-height: 600px;
  border-bottom: 1px solid lightgrey;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: capitalize;
  padding-bottom: 40px;
`;

export const ItemTitle = styled.div`
  margin-top: 10px;
`;

export const ItemPrice = styled.div`
  margin-top: 10px;
`;

export const ItemText = styled.p`
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: bold;
`;