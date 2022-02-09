import React, { useState } from "react";
import styled from "styled-components";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <ModalBackground>
          <ModalBox>
            <ClosedBtn onClick={handleModal}>x</ClosedBtn>
            <Content>HELLO CODESTATES!</Content>
          </ModalBox>
        </ModalBackground>
      )}

      <OpenButton onClick={handleModal}>Open Modal</OpenButton>
    </>
  );
};

export default Modal;

const ModalBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  background-color: rgba(173, 173, 173, 0.5);
  width: 100vw;
  height: 70vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const OpenButton = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 20px;
`;

const ModalBox = styled.div`
  width: 300px;
  height: 80px;
  background: #fff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClosedBtn = styled.button`
  color: #000;
  background: #fff;
`;

const Content = styled.p`
  height: 100%;
  display: flex;
  align-items: center;
  color: #4900ce;
`;
