import React from "react";
import styled from "styled-components";

import Toggle from "./components/toggle/Toggle.jsx";
import Modal from "./components/toggle/Modal.jsx";
import Tab from "./components/toggle/Tab.jsx";
import Tab2 from "./components/toggle/Tab2.jsx";
const App = () => {
  return (
    <>
      <Box>
        <Title>Toggle</Title>
        <div>
          <Toggle />
        </div>
      </Box>
      <Box>
        <Title>Modal</Title>
        <div>
          <Modal />
        </div>
      </Box>
      <Box>
        <Title>Tab</Title>
        <Tab />
      </Box>
      <Box>
        <Title>Tab2</Title>
        <Tab2 />
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
