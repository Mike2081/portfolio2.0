import styled from "styled-components";

const SubHeader = styled.h2`
  font-family: "Ubuntu Condensed", sans-serif;
  color: black;
  width: max-content;
  font-size: 3em;
  height: 10vh;
  border-bottom: 5px solid black;
  margin: 0 auto;

  @media (max-width: 792px) {
    margin: 0em 1.2em;
  }
`;

export default SubHeader;
