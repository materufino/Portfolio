import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cv from "../../Assets/MateoRufinoCv.pdf"
import { useNavigate } from "react-router-dom";


const StyledNav = styled.nav`
  width: 100%;
  background: rgb(114,66,66);
  background: radial-gradient(circle, rgba(114,66,66,1) 0%, rgba(150,79,79,1) 80%);
  box-shadow: 0px 0px 34px -5px rgba(189,189,189,1);
  border-top-right-radius:5px;
  border-top-left-radius:5px;
  justify-content: space-around;
  font-size: 1.5rem;
  height: 10vh;
  
  @media (min-width:20.00em) {
    
  }
  @media (min-width:37.500em) {
    
    
    
  }
  @media(min-width:44rem) {
    
         
  }
  @media(min-width:61.93em) {
  
  }  
`;

const StyledNavGrande = styled.nav`
  display: none; 
  margin-top: 10px;
  z-index: 100;
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  top: ${({ isFixed }) => (isFixed ? "0" : "auto")};
  width: 100%;
  background: rgb(114,66,66);
  background: radial-gradient(circle, rgba(114,66,66,1) 0%, rgba(150,79,79,1) 80%);
  box-shadow: 0px 0px 34px -5px rgba(189,189,189,1);
  border-top-right-radius:5px;
  border-top-left-radius:5px;
  justify-content: space-around;



  @media (min-width:20.00em) {     
    height: 150px;
    
  }
  @media (min-width:37.500em) {
    margin-top: 0px;
    height: 10vh;
  }
  @media(min-width:44rem) {
    display: block;
    
         
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
  const navigate = useNavigate();

  const cambiaRuta = (path) => {

    navigate(path);
  }

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


      <StyledNavGrande isFixed={isNavFixed}>
        <StyledList>

          <StyledListItem>
            <StyledLink href="/#">Home</StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink href="/#about">About</StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink onClick={() => cambiaRuta('/Projects')}>Projects</StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink onClick={() => cambiaRuta('/Hobbies')}>Hobbies</StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink href={cv} download>CV</StyledLink>
          </StyledListItem>

        </StyledList>
      </StyledNavGrande>




      <StyledNav isFixed={isNavFixed}>
        <StyledList>

          <StyledListItem>
            <StyledLink href="/#"><FontAwesomeIcon icon={faHouse} />
            </StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink href="/#about"><FontAwesomeIcon icon={faInfo} /> </StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink onClick={() => cambiaRuta('/Projects')}><FontAwesomeIcon icon={faPersonDigging} /> </StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink onClick={() => cambiaRuta('/Hobbies')}><FontAwesomeIcon icon={faFaceSmileBeam} /> </StyledLink>
          </StyledListItem>

          <StyledListItem>
            <StyledLink href={cv} download><FontAwesomeIcon icon={faDownload} /></StyledLink>
          </StyledListItem>

        </StyledList>
      </StyledNav>


    </>
  );
};

export default Navbar2;