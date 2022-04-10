import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Github, Instagram,  LinkedIn } from '../components/AllSvgs';
import styled from 'styled-components';
import { darkTheme, mediaQueries } from '../components/Themes';
import {motion} from 'framer-motion';

const Icons = styled.div` 
 display: flex;
 flex-direction: column;
 align-items: center;

position: fixed;
bottom: 0;
left: calc(0.5rem + 1.5vw);

z-index: 3;


&>*:not(:last-child) {
    margin: 0.5rem 0;
    ${mediaQueries(20)`
    margin: 0.3rem 0;


`};
}
${mediaQueries(40)`
left: 1rem;

    svg{
      width:30px;
      height:30px
    }

`};

`

const Line = styled(motion.span)` 
width:2px;
height:8rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
`

const SocialIcons = (props) => {
    const mq = window.matchMedia("(max-width: 40em)").matches;
    return (
        <Icons>
            <motion.div
            initial={{transform: "scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
                <NavLink style={{color: 'inherit'}} target='_blank' to ={{pathname: "https://github.com/marins1897"}}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>

            <motion.div
            initial={{transform: "scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.2}}
            >
                <NavLink style={{color: 'inherit'}} target='_blank' to ={{pathname: "https://www.facebook.com/marinsamardzic20/"}}>
                    <Facebook width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>

            <motion.div
            initial={{transform: "scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            >
                <NavLink style={{color: 'inherit'}} target='_blank' to ={{pathname: "https://www.linkedin.com/in/marin-samard%C5%BEi%C4%87-634515210/"}}>
                    <LinkedIn width={32} height={32} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>

            <motion.div
            initial={{transform: "scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink style={{color: 'inherit'}} target='_blank' to ={{pathname: "https://www.instagram.com/marin_samardzic/"}}>
                    <Instagram width={32} height={32} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>


            <Line color={props.theme} 
                  initial={
                      {
                          height: 0
                      }
                  }
                  animate={{ 
                      height:  mq ? "5rem" : "8rem" 
                  }}
                  transition={{
                      type:'spring', duration: 1 , delay: 0.7
                  }}

            />
        </Icons>

    );
};

export default SocialIcons;
