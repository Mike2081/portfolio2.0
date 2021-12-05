import React from "react";
import styled from "styled-components";
import { skillsList } from "./skillsList";
import SubHeader from "../SubHeader";

const Container = styled.div`
  background-color: rgb(249, 249, 249);
  height: -webkit-fill-available;
  overflow: hidden;
`;

const SkillsContainer = styled.div`
  background-color: rgb(249, 249, 249);
  margin: 3% 5%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
  @media (max-width: 791px) {
    height: 100vh;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  @media (max-width: 960px) {
    width: 80px;
  }
  @media (max-width: 414px) {
    width: 60px;
  }
`;

const Logo = styled.img`
  height: 14vh;
  width: 8vw;
  object-fit: contain;
  object-position: center;
`;

const SkillTitle = styled.span`
  height: 4vh;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  color: #505050;
  display: flex;
  justify-content: space-evenly;
`;

const Skills = () => {
  return (
    <Container>
      <SubHeader>skills</SubHeader>
      <SkillsContainer>
        {skillsList.map(({ title, img }) => (
          <Skill id={title}>
            <Logo src={img} />
            <SkillTitle>{title}</SkillTitle>
          </Skill>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
