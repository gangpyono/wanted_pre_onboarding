import React from "react";
import styled from "styled-components";

import Toggle from "./components/toggle/Toggle.jsx";

const App = () => {
  return (
    <>
      <Box>
        <Title>Toggle</Title>
        <div>
          <Toggle />
        </div>
      </Box>
    </>
  );
};

export default App;

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 70vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0;
`;
