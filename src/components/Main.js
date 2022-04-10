import React, { useState, lazy, Suspense, } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

import { Rudder } from './AllSvgs';
import Intro from './Intro';
import { motion } from 'framer-motion';
import Loading from "../subComponents/Loading";
import { mediaQueries } from "./Themes";



const SocialIcons = lazy(() => import("./../subComponents/SocialIcons"));

const LogoComponent = lazy(() => import("./../subComponents/LogoComponents"));

const MainContainer = styled(motion.div)`
background: ${props => props.theme.body};

height: 100vh;
overflow: hidden;
position: relative;

h2,h3,h4,h5,h6{
    font-family: 'Karla',sans-serif;
    font-weight: 500;
}

h2 {
    ${mediaQueries(40)`
      font-size:1.2em;

  `};

    ${mediaQueries(30)`
      font-size:1em;

  `};
  }
`;

const Container = styled.div`
padding: 2rem;
`



const Contact = styled(NavLink)` 
color: ${props => props.click ?  props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50% , -50%) rotate(-90deg);
text-decoration: none;
z-index: 1;

@media only screen and (max-width: 50em) {
    top: 44%;
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`

const WORK = styled(NavLink)` 
color: ${props => props.click ?  props.theme.body : props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform:rotate(90deg) translate(-50% , -50%);
text-decoration: none;
z-index: 1;

@media only screen and (max-width: 50em) {
    top: 47%;
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`

const BottomBar = styled.div` 
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`
const ABOUT = styled(NavLink)` 
color: ${props => props.click ?  props.theme.body : props.theme.text};

text-decoration: none;
z-index: 1;
`

const SKILLS = styled(NavLink)` 
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const rotate = keyframes` 
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button` 
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
backgorund-color: ${props => props.theme.body};
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
transition: all 1s ease;

&>:first-child{
animation : ${rotate} infinite 6s alternate-reverse;
}

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
}

@media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
  }
`
const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
height: ${props => props.click ? '100%' : '0'};
width: ${props => props.click ? '50%' : '0'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;

${(props) =>
    props.click
      ? mediaQueries(50)`
       height: 50%;
  right:0;
  
  width: 100%;
  transition: width 0.5s ease, height 1s ease 0.5s;

  `
      : mediaQueries(50)`
       height: 0;
  
  width: 0;
  `};
`

const CV = styled(NavLink)`


  top: 2rem;
  
  text-decoration: none;
 
button {
  z-index: 1;
  justify-content: space-around;
  width: 8rem;
  height: 2.5rem;
  color: ${props => props.click ?  props.theme.body : props.theme.text};
  background: ${props => props.click ?  props.theme.text : props.theme.body};
  border-color:  ${props => props.click ?  props.theme.body : props.theme.text};
  cursor: pointer;
  position: fixed;
  right: calc(1rem + 2vw);
  border-radius: 0 10px 0 10px;


  &:focus {
    outline: none;
  }
}
`;


const Main = (props) => {
   const [click, setClick] = useState(false);
   const [path, setpath] = useState("");

   const clickHandler = () => {
        setClick(!click);
   };

   const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "contact" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;

    return (
        <Suspense fallback={<Loading />}>
        <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "about" || path === "skills" ? moveY : moveX}
        transition={{ duration: 0.5 }}
        >
              <DarkDiv click={click} />

              <Container>
                  
                  <LogoComponent theme={click? 'dark' : 'light'} />
                  {mq ? (
            <SocialIcons theme="light" />
          ) : (
            <SocialIcons theme={click ? "dark" : "light"} />
          )}

                <Center click={click}>
                {mq ? (
              <Rudder
                onClick={() => clickHandler()}
                width={click ? 80 : 150}
                height={click ? 80 : 150}
                fill="currentColor"
              />
            ) : (
              <Rudder
                onClick={() => clickHandler()}
                width={click ? 120 : 200}
                height={click ? 120 : 200}
                fill="currentColor"
              />
            )}
                    <span>Click here.</span>
                </Center>



                {mq ? (
            <CV 
              click={+click}
              target="_blank"
              to={{ pathname: "../assets/MarinSamardzic_CV.docx" }} download
            >
              <motion.button
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Download CV
              </motion.button>
            </CV>
          ) : (
            <CV
              click={+false}
              target="_blank"
              to={{ pathname: "../assets/MarinSamardzic_CV.docx" }} download
            >
              <motion.button
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Download CV
              </motion.button>
            </CV>
          )}
               


                  <Contact to="/contact" click={+click}>
                      <motion.h2
                       onClick={() => setpath("contact")}
                      initial={{
                          y:-200,
                          transition: {type:'spring', duration: 1.5, delay:1}
                      }}
                      animate={{
                          y:0,
                          transition: {type:'spring', duration: 1.5, delay:1}
                      }}
                      whileHover={{scale:1.15}}
                      whileTap={{scale: 0.79}}

                      >
                          Say hi...
                      </motion.h2>
                  </Contact>
               
                
                {mq ? (
                <WORK click={+click} onClick={() => setpath("work")} to ="/work">
                <motion.h2
                initial={{
                    y:-200,
                    transition: {type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: {type:'spring', duration: 1.5, delay:1}
                }}
                      whileHover={{scale:1.15}}
                      whileTap={{scale: 0.79}}

                      >
                        WORK
                    </motion.h2>
                </WORK>
                ) : (
                    <WORK click={+false} onClick={() => setpath("work")} to ="/work">
                <motion.h2
                initial={{
                    y:-200,
                    transition: {type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: {type:'spring', duration: 1.5, delay:1}
                }}
                      whileHover={{scale:1.15}}
                      whileTap={{scale: 0.79}}

                      >
                        WORK
                    </motion.h2>
                </WORK>
                )}

                <BottomBar>
                <ABOUT
              onClick={() => setClick(false)}
              click={mq ? +false : +click}
              to="/about"
            >
              <motion.h2
                onClick={() => setpath("about")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About.
              </motion.h2>
            </ABOUT>

            <SKILLS to="/skills">
              <motion.h2
                onClick={() => setpath("skills")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                My Skills.
              </motion.h2>
            </SKILLS>
                </BottomBar>

              </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
        </Suspense>
    );
};

export default Main;
