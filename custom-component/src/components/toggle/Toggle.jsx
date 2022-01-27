import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [active, setActive] = useState(false);

  const handleSwitch = () => {
    setActive(!active);
  };

  return (
    <div>
      <ToggleBox active={active} onClick={() => handleSwitch()}>
        <ToggleButtonBox active={active}>
          <ToggleButton active={active} />
        </ToggleButtonBox>
      </ToggleBox>
      <span>{active ? "Toggle Switch ON" : "Toggle Switch OFF"}</span>
    </div>
  );
};

export default Toggle;

const ToggleBox = styled.div`
  margin: auto;
  margin-bottom: 20px;
  border-radius: 30px;
  width: 50px;
  height: 30px;
  background: #c5c5c5;

  display: flex;
  align-items: center;

  padding: 0px 5px;
  cursor: pointer;

  transition: all 300ms ease-in;
  ${(props) => props.active && `background: #4900ce`};
`;

const ToggleButtonBox = styled.div`
  width: 100%;
  transition: all 300ms ease-in;
  ${(props) => props.active && `transform: translateX(100%)`};
`;

const ToggleButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fff;
  transition: all 300ms ease-in;
  ${(props) => props.active && `transform: translateX(-100%) `}
`;
