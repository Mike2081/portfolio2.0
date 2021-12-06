import React, { useRef } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import useOnClickOutside from "./useOnClickOutside";

const Container = styled.div`
  height: 71vh;
  width: 82vw;
  background: white;
  position: fixed;
  bottom: 70px;
  right: 109px;
  border: solid 8px;
  border-radius: 12px;
  border-color: #363d67;
  display: flex;
  box-shadow: 30px 30px 7px rgba(0, 0, 0, 0.5);
  z-index: 1000000;
`;

const CloseButton = styled.button`
  height: 4rem;
  width: 4rem;
  border: 0px;
  font-size: 3em;
  color: rgb(54, 61, 103);
  background-color: white;
  vertical-align: top;
`;
const Container2 = styled.div`
`;

const Container3 = styled.div`
  display: flex;
`;

const Movie = styled.video`
  height: auto;
  width: 52%;
  margin: 2rem 0rem 0rem 1.5rem;
  border: solid 9px;
  border-color: #363d67;
  border-radius: 12px;
`;

const TitleBox = styled.div`
  margin: 0rem 0rem 0rem 1.5rem;
  font-family: "Ubuntu Condensed",sans-serif;
`;

const Title = styled.h1`

`;

const Description = styled.div`
  font-size: 1.6rem;
  height: auto;
  width: 51rem;
  margin: 1rem 0rem 0rem 7rem;
  font-family: "Ubuntu Condensed",sans-serif;
`;

const Tech = styled.div`

`;

const TechTitle = styled.h2`

`;

const TechLogo = styled.img`
  height: 5rem;
  margin: 9px;
`;

const Site = styled.button`
  border: solid 8px;
  border-radius: 28px;
  border-color: #363d67;
  height: 4rem;
  width: 9rem;
  font-size: 1.6rem;
  background: aqua;
  font-family: "Ubuntu Condensed",sans-serif;
`;


const Modal = ({ hide, modalvideo, modalTitle, technologies1, technologies2, technologies3, technologies4, modalDescription }) => {
  const node = useRef();
  useOnClickOutside(node, hide);

  return (
    <Container ref={node}>
      <Container2>
        <CloseButton onClick={hide}>
          <FaIcons.FaTimes/>
        </CloseButton>
        <Container3>
          <Movie 
            src={modalvideo}
            controls
            loop
          />
          <TitleBox>
            <Title>{modalTitle}</Title>
            <Tech>
                <TechTitle>
                  Technologies:
                </TechTitle>
                <TechLogo src={technologies1}/>
                <TechLogo src={technologies2}/>
                <TechLogo src={technologies3}/>
                <TechLogo src={technologies4}/>
            </Tech>
            <Site>Try Here!</Site>
          </TitleBox>
        </Container3>
          <Description>{modalDescription}</Description>
      </Container2>
    </Container>
  );
};

export default Modal;
