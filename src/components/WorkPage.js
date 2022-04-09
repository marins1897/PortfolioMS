import React, {lazy, Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';

import img from "../assets/Images/rey-seven-_nm_mZ4Cs2I-unsplash.jpg";

import { mediaQueries } from "./Themes";
import { Work } from '../data/WorkData';
import WorkComponent from './WorkComponent';
import Loading from "../subComponents/Loading";
import {motion} from 'framer-motion';

const AnchorComponent = lazy(() => import("../subComponents/Anchor"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponents"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));


const MainContainer = styled(motion.div)`
background-image: url(${img}) ;
backgorund-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
width: 100vw;

`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.7)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;

${mediaQueries(30)`
padding-top: 7rem;


`};
`

const Grid = styled(motion.div)`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
${mediaQueries(50)`
grid-template-columns: 100%;



`};
`

const container = {
    hidden : {opacity: 0},
    show: {
      opacity: 1,
  
      transition:{
        staggerChildren : 0.4,
        duration: 0.4,
      }
    }
  };



const WorkPage = () => {
    const [numbers, setNumbers] = useState(0);


    useEffect(() => {
          let num = (window.innerHeight - 70)/30;
          setNumbers(parseInt(num));
    }, []);

    return (
      <Suspense fallback={<Loading />}>
        <MainContainer 
        variants={container} 
        initial='hidden' 
        animate='show' 
        exit={{
               opacity:0, 
               transition: {duration: 0.5 }
        }}>
              <Container>
                  <LogoComponent />
                  <PowerButton />
                  <SocialIcons />
                  <AnchorComponent numbers={numbers} />
                      
                   <Center>
                     <Grid  variants={container} initial="hidden" animate="show" >                       
                     {
                            Work.map((work) => {
                               return <WorkComponent key={work.id} work={work}/>
                            })
                        }                                              
                     </Grid>
                   </Center>
                   
                   <BigTitle text="WORK" top='7%' left="5%" />


              </Container>
        </MainContainer>
        </Suspense>
     
    );
};

export default WorkPage;