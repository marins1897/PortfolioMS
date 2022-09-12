import React, { lazy, Suspense} from 'react';
import styled, {keyframes, ThemeProvider} from 'styled-components';
import { darkTheme, mediaQueries} from './Themes';
import Loading from '../subComponents/Loading';
import { motion } from 'framer-motion';

import astronaut from '../assets/Images/spaceman1.png';
const SocialIcons = lazy(() => import('../subComponents/SocialIcons'))
const PowerButton = lazy(() => import('../subComponents/PowerButton'))
const LogoComponent = lazy(() => import('../subComponents/LogoComponents'))
const ParticleComponent = lazy(() =>
  import('../subComponents/ParticleComponent')
);
const BigTitle= lazy(() =>import ('../subComponents/BigTitle')) ;

const Box = styled(motion.div)` 
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;

${mediaQueries(40)`
h1{
left: 5%;}
`}
`;

const float = keyframes`
0% {
    transform: translateY(-10px)
} 
50% {
    transform: translateY(15px) translateX(15px)
} 
100% {
    transform: translateY(-10px)
} 

`


const Spaceman = styled(motion.div)`
position: absolute;
top: 10%;
right: 5%;

width: 20vw;

animation: ${float} 7s ease infinite;

img{
    width: 100%;
    height: auto;
}

`
const Main = styled(motion.div)`
border: 2px solid ${(props) => props.theme.text};
color: ${(props) => props.theme.text};
padding: 2rem;
width: 50vw;
height: 70vh;

line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(6px);

position: absolute;
left: calc(5rem + 5vw);
top: 7rem;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;

${mediaQueries(40)`
width: 60vw;
height: 50vh;
top:50%;
left:50%;
transform:translate(-50%,-50%);


`};
${mediaQueries(30)`
width: 50vw;
height: auto;
backdrop-filter: none;
margin-top:2rem;

`};

${mediaQueries(20)`
padding: 1rem;
font-size: calc(0.5rem + 1vw);
`};
`


const AboutPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
             <Suspense fallback={<Loading/>}>
            <Box
             key='skills'
             initial={{ opacity: 0 }}
             animate={{ opacity: 1, transition: { duration: 0.5 } }}
             exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
    <LogoComponent theme='dark' />
    <SocialIcons theme='dark' />
    <PowerButton />
<ParticleComponent theme='dark' />
       
       <Spaceman
       initial={{ right: '-20%', top: '100%' }}
       animate={{
         right: '5%',
         top: '10%',
         transition: { duration: 2, delay: 0.5 },
       }}
       >
       <motion.img
                      whileHover={{scale:1.25}}
                      whileTap={{scale: 0.75}}

                      src={astronaut} alt="spaceman" > 
                      </motion.img>
           
       </Spaceman>
             <Main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
             > 

            I am a front-end and blockchain developer located in Croatia. 
            I am focused on creating beautiful and user-friendly applications while writing clean code, and I love what I do.
             <br/><br/>
            Well-organised person, logical thinker and problem solver with high of attention to details. 
            Likes football, outdoor activities and animals. A lover of the sea. 
            

                 <br/><br />
            “There are three responses to a piece of code - yes, no, and WOW! Wow is the one to aim for”
                  <br /><br/>
            Interesed in the entire Frontend and Blockchain stack while working on ambitious projects with positive people.
                <br/>
            You can connect with me via social links.{' '}

             
             </Main>
             <BigTitle text="ABOUT" top='7%' left="60%" />
            </Box>
            </Suspense>
        </ThemeProvider>
    );
};

export default AboutPage;
