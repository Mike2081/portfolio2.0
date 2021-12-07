import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #363d67;
  height: 8vh;
  width: 10vw;
  font-size: 1em;
  color: white;
  position: relative;
  bottom: 95px;
  left: 100px;
  cursor: pointer;

  @media (max-width: 680px) {
    bottom: 112px;
    left: 48px;
  }

  @media (max-width: 500px) {
    font-size: 0.7em;
    bottom: 126px;
    left: 52px;
  }

  @media (max-width: 400px) {
    font-size: 0.5em;
    bottom: 127px;
    left: 47px;
  }
  @media (max-width: 340px) {
    width: 24vw;
    font-size: 1em;
    left: 17px;
  }
  @media (max-height: 470px) {
    font-size: 0.7em;
  }  
  @media (max-width: 640px) {
    font-size: 0.7em;
  }  

  :hover {
    -webkit-transition: 0.5s ease;
    transition: 0.5s ease;
    background: aqua;
  }
`;

// toggles show or hide of modal

const ToggleButton = ({ buttonImage, buttonTitle, button, children }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      {button ? (
        button(show)
      ) : (
        <div className="App__projects__case__chest">
          <img
            className="App__projects__case__chest__demo1"
            src={buttonImage}
            alt={buttonTitle}
          />
          <Button onClick={show}>{buttonTitle}</Button>
        </div>
      )}
      {isShown && children ? children(hide) : null}
    </>
  );
};

ToggleButton.defaultProps = {
  buttonTitle: "Learn More"
};

export default ToggleButton;
