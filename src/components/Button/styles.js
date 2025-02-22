import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => props.backgroundColor || "#444444"};
  color: ${(props) => props.color || "#FFFFFF"};
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
`;