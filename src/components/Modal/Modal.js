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
  @media (max-width: 670px) {
    right:55px;
  }
  @media (max-height: 515px) {
    bottom: 29px;
    right: 39px;
  }  
  @media (max-width: 515px) {
    bottom: 29px;
    right: 39px;
  }  
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
  height: 15rem;
  width: auto;
  @media (max-height: 513px) {
    height: 11rem;
  }
  @media (max-height: 431px) {
    height: 7rem;
  }
  @media (max-height: 334px) {
    height: 5rem;
  }
`;

const Movie = styled.video`
  height: auto;
  width: 52%;
  margin: 0rem 0rem 0rem 1.5rem;
  @media (max-width: 1030px) {
    height: -3rem;
  }
`;

const TitleBox = styled.div`
  margin: -2rem 0rem 0rem 1.5rem;
  font-family: "Ubuntu Condensed",sans-serif;
  @media (max-height: 334px) {
    margin: -4rem 0rem 0rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-decoration-line: underline;
  @media (max-width: 535px) {
    font-size: 1rem;
  }
  @media (max-height: 535px) {
    font-size: 1rem;
  }  
`;

const Tech = styled.div`
  font-size: 1.5rem;
  @media (max-width: 535px) {
    font-size: 0.7rem;
  }  
  @media (max-height: 535px) {
    font-size: 0.7rem;
  }  
`;

const Description = styled.div`
  font-size: 1.3rem;
  margin: 3rem 0rem 0rem 7rem;
  font-family: "Ubuntu Condensed",sans-serif;
  @media (max-width: 800px) {
    margin: 1rem 0rem 0rem 1rem;
    font-size: 1rem;
  }
  @media (max-height: 631px) {
    font-size: 0.8rem;
  }
  @media (max-height: 570px) {
    font-size: 0.6rem;
  }
  @media (max-height: 288px) {
    font-size: 0.6rem;
    margin: 0rem 0rem 0rem 1rem;
  }
`;

const TechTitle = styled.h2`

`;

const TechLogo = styled.img`
  height: 4rem;
  margin: 9px;
  @media (max-width: 1030px) {
    height: 3rem;
  }
  @media (max-width: 850px) {
    height: 2rem;
  }
  @media (max-width: 670px) {
    height: 1.5rem;
  }
  @media (max-height: 431px) {
    height: 0.6rem;
  }
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
  @media (max-width: 535px) {
    height: 2.5rem;
    width: 6rem;
    font-size: 1rem;
  }
  @media (max-height: 431px) {
    height: 2rem;
    font-size: 0.9rem;
  }
`;


const Modal = ({ hide, modalvideo, modalTitle, technologies1, technologies2, technologies3, technologies4, modalDescription, site }) => {
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
            <a
              href={site}
              target="_blank"
              rel="noreferrer"
            >
              <Site>Try Here!</Site>
            </a>
          </TitleBox>
        </Container3>
          <Description>{modalDescription}</Description>
      </Container2>
    </Container>
  );
};

export default Modal;
