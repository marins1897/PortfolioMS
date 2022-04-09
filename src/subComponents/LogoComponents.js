/** MarinS initials */
import React from 'react';
import styled from 'styled-components';
import { darkTheme, mediaQueries  } from '../components/Themes';
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';

const Logo = styled(motion.h1)` 
display: inline-block;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
font-family: 'Pacifico', cursive;
position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;
${mediaQueries(40)`
font-size:1.5em;
left:1rem;
top:2rem;
`};
`

const LogoComponent = (props) => {
    return (
        <NavLink to='/' >
        <Logo color={props.theme}
        initial={{transform: "scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1.2}}
        >
            MarinS
        </Logo>
        </NavLink>
    );
};

export default LogoComponent;