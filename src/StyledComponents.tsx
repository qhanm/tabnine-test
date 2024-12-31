import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
    transform: scale(1.1);
  }
`;

const App = () => {
  return <StyledButton>Click Me</StyledButton>;
};

export default App;
