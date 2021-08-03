import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  background-color: cyan;
  font-weight: bold;

  &:hover {
    background-color: lightskyblue;
    text-decoration: underline;
  }
`;
