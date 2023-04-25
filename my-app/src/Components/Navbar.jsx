import React, { useState, useEffect } from "react";
import styled from "styled-components";



const StyledNav = styled.nav`
margin-top: 10px;
  z-index: 100;
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  top: ${({ isFixed }) => (isFixed ? "0" : "auto")};
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  background: rgb(114,66,66);
  background: radial-gradient(circle, rgba(114,66,66,1) 0%, rgba(150,79,79,1) 80%);
  box-shadow: 0px 0px 34px -5px rgba(189,189,189,1);
  border-top-right-radius:5px;
  border-top-left-radius:5px;
  visibility: ${({ isFixed }) => (isFixed ? "hidden" : "visible")};
  font-size: 1rem;
  justify-content: space-around;
  @media (min-width:20.00em) {        
    
  }
  @media (min-width:37.500em) {
    margin-top: 0px;
    height: 10vh;
    visibility: visible;
  }
  @media(min-width:43rem) {
    
         
  }
  @media(min-width:61.93em) {
  
  }  
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  
`;

const StyledListItem = styled.li`
  
  a {
    letter-spacing: 7px;
    color: rgba(189,189,189,1);
    text-transform: uppercase;
    text-decoration: none;
  }
`;


const StyledLink = styled.a`
  display: inline-block;
  position: relative;
  color: #333;
  text-decoration: none;
  padding: 15px 10px;
  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    transform: scale(0);
    transition: 0.5s;
  }
  &:before {
    border-bottom: 2px solid #333;
    border-left: 2px solid #333;
    transform-origin: 0 100%;
  }
  &:after {
    border-top: 2px solid #333;
    border-right: 2px solid #333;
    transform-origin: 100% 0%;
  }
  &:hover:after,
  &:hover:before {
    transform: scale(1);
  }
`;





const Navbar2 = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = window.innerHeight - 70;
      if (window.pageYOffset > navHeight) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>


      <StyledNav isFixed={isNavFixed}>
        <StyledList>

          <StyledListItem>
            <StyledLink href="#Home">Home</StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink href="#About">About</StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink href="#Projects">Projects</StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink href="#Hobbies">Hobbies</StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink href="#CV">CV</StyledLink>
          </StyledListItem>

        </StyledList>
      </StyledNav>


    </>
  );
};

export default Navbar2;