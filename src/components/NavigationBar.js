import React, { useEffect } from "react";
import styled from "styled-components";
import scrollToComponent from "react-scroll-to-component";
import ContactModal from "../components/Modal/ContactModal";
import ToggleButton from "../components/ToggleButton";

const Header = styled.nav`
  height: 8vh;
  width: 100%;
  background-color: aqua;
  position: fixed;
  z-index: 2000000000;
  margin: -8px;
  @media (max-height: 455px) {
    height: 12vh;
  }
`;

const Line = styled.nav`
  height: 1.5vh;
  width: 106%;
  background-color: rgb(54, 61, 103);
  position: absolute;
  bottom: 0;
  margin: -8px 0px 0px -8px;
`;

const NavigationBar = ({ about, home, projects, skills }) => {
  useEffect(() => {}, [about, home, projects, skills]);
  return (
    <Header>
      <div className="App__nav__box">
        <button
          className="App__nav__box__switch"
          onClick={() =>
            scrollToComponent(home.current, {
              offset: 0,
              align: "top",
              duration: 1500
            })
          }>
          Home
        </button>
        <button
          className="App__nav__box__switch"
          onClick={() =>
            scrollToComponent(about.current, {
              offset: 0,
              align: "top",
              duration: 1500
            })
          }>
          About
        </button>
        <button
          className="App__nav__box__switch"
          onClick={() =>
            scrollToComponent(skills.current, {
              offset: 0,
              align: "top",
              duration: 1500
            })
          }>
          Skills
        </button>
        <button
          className="App__nav__box__switch"
          onClick={() =>
            scrollToComponent(projects.current, {
              offset: 0,
              align: "top",
              duration: 1500
            })
          }>
          Projects
        </button>
        <ToggleButton
          button={show => (
            <button className="App__nav__box__switch" onClick={show}>
              Contact
            </button>
          )}>
          {hide => <ContactModal onClose={hide} />}
        </ToggleButton>
      </div>
      <Line />
    </Header>
  );
};

export default NavigationBar;
