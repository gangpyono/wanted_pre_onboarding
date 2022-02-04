import React, { useState } from "react";
import styled, { css } from "styled-components";

const tabs = [
  { title: "tab1", content: "Tab menu ONE", isActive: false },
  { title: "tab2", content: "Tab menu TWO", isActive: false },
  { title: "tab3", content: "Tab menu THREE", isActive: false },
];

const useTabs = (initialIdx, tabs) => {
  const [currentIdx, setCurrentIdx] = useState(initialIdx);

  tabs.map((tab) => (tab.isActive = false));
  tabs[currentIdx].isActive = true;

  return {
    currentTab: tabs[currentIdx],
    setCurrentTab: setCurrentIdx,
  };
};

const Tab = () => {
  const { currentTab, setCurrentTab } = useTabs(0, tabs);
  const handleTab = (idx) => {
    setCurrentTab(idx);
  };

  return (
    <Container>
      <TapContainer>
        {tabs.map((tab, idx) => {
          return (
            <Item
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

      <ContentBox>{currentTab.content}</ContentBox>
    </Container>
  );
};

export default Tab;

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
