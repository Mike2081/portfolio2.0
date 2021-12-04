import React, { useRef } from "react";
import "../styles/App.css";
import Skills from "../components/Skills";
import ToggleButton from "../components/ToggleButton";
import ModalList from "./Modal/ModalList.js";
import Modal from "./Modal/Modal";
import NavigationBar from "../components/NavigationBar";
import SubHeader from "../components/SubHeader";

const App = () => {
  const about = useRef();
  const projects = useRef();
  const home = useRef();
  const skills = useRef();

  return (
    <div className="App" ref={home}>
      <NavigationBar about={about} projects={projects} home={home} skills={skills} />
      <div className="container">
        Hi, I'm
        <div className="flip">
          <div>
            <div>Michael DoHo.</div>
          </div>
          <div>
            <div>Michael DoHo.</div>
          </div>
          <div>
            <div>Michael DoHo.</div>
          </div>
        </div>
        A Front End Developer.
      </div>
      <div className="App__background" />
      <div className="App__about" ref={about}>
        <SubHeader>About</SubHeader>

        <div className="App__about__square">
          <div className="App__about__square__holder">
            <img
              className="App__about__square__holder__face"
              src={require("../Images/part1.gif")}
            />
            <div>
              <p className="App__about__square__holder__description">
                Hi! I'm a Front-End Developer based in Toronto. I'm a
                graduate of BrainStation's Full-Stack Web Development program. Before
                the program, I was a carpenter who knew nothing about code, so
                I'm not afraid to adapt and rise up to the challenge of learning
                a new skill. Always looking for ways to improve my code. Love to 
                look at code and helping others with their problems, as opportunity 
                to solve a puzzle. Love to bring peoples ideas to life with programming, 
                let’s talk!
              </p>
              <p className="App__about__square__holder__award">
                "If you want to go fast, go alone; but if you want to go far, go together."
              </p>
            </div>
          </div>
          <div ref={skills}>
            <Skills/>
          </div>
        </div>
      </div>
      <div className="App__projects" ref={projects}>
        <SubHeader>Projects</SubHeader>
        <div className="App__projects__case">
          {ModalList.map(
            ({ buttonImage, modalvideo, modalTitle, modalDescription }) => (
              <ToggleButton key={modalTitle} buttonImage={buttonImage}>
                {hide => (
                  <Modal
                    hide={hide}
                    modalvideo={modalvideo}
                    modalTitle={modalTitle}
                    modalDescription={modalDescription}
                  />
                )}
              </ToggleButton>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
