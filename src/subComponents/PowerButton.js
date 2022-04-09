import React, {useState} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';


const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.text};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
 z-index:1;




  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color:  ${props => props.theme.body};
    text-decoration: none;
    transition: color 0.3s linear;

   

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #756c57;
    }
  }
`

const StyledBurger = styled(motion.button)`
  position: fixed;
  top: 20%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${({open}) => open ? '' : '1'};

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
   
    
  
     background: ${props => props.theme.text};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
   
      
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};

      
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};

      
    }
  }

  @media (max-width: 40em) {
    top: 2rem;
    left: 80%;
  }
`



const PowerButton = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };  

  return (
    <>
    <StyledBurger open={open} onClick={openHandler}    initial={{transform: "scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1.2}}     >
      <div  />
      <div />
      <div />
</StyledBurger>


<StyledMenu open={open} onClick={openHandler} >
<NavLink to="/">
  
  Home
</NavLink>
<NavLink to="/about">

  About
  </NavLink>
<NavLink to="/work">

  Work
  </NavLink>
  <NavLink to="/skills">
  
  My Skills
  </NavLink>
  <NavLink to="/contact">
  
  Contact
  </NavLink>
</StyledMenu>

</>
  )
};

export default PowerButton;