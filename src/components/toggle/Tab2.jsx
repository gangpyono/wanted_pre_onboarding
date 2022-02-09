import React, { useState } from "react";
import styled, { css } from "styled-components";

//선택된 인덱스를 관리하는 currentIdx 설정.
const Tab2 = () => {
  const [tabs, setTabs] = useState([
    { title: "tab1", content: "Tab menu ONE", isActive: true },
    { title: "tab2", content: "Tab menu TWO", isActive: false },
    { title: "tab3", content: "Tab menu THREE", isActive: false },
  ]);
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleTab = (ActiveIndex) => {
    const newTabs = tabs.map((tab, index) => {
      if (tab.isActive === true) {
        tab.isActive = false;

        return tab;
      }

      if (ActiveIndex === index) {
        tab.isActive = true;

        return tab;
      }

      return tab;
    });

    setCurrentIdx(ActiveIndex);
    setTabs(newTabs);
  };

  return (
    <Container>
      <TapContainer>
        {tabs.map((tab, idx) => {
          return (
            <Item
              key={idx}
              isActive={tab.isActive}
              onClick={() => {
                handleTab(idx);
              }}
            >
              {tab.title}
            </Item>
          );
        })}
      </TapContainer>

      <ContentBox>{tabs[currentIdx].content}</ContentBox>
    </Container>
  );
};

export default Tab2;

const Container = styled.div`
  width: 100%;
  height: 80%;
`;

const TapContainer = styled.ul`
  height: 7%;
  background: #e0e0e0;
  display: flex;
  justify-content: center;
`;

const ContentBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

const Item = styled.li`
  flex-grow: 1;

  color: #9e9e9e;

  display: flex;
  align-items: center;

  padding-left: 10px;

  transition: all 200ms ease-in;

  ${({ isActive }) =>
    isActive &&
    css`
      background: #4900ce;
      color: #fff;
    `}
`;
