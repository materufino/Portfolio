import styled from 'styled-components';
import React from 'react';
import mateo from "../Assets/Mateo.jpg"
import cv from "../Assets/MateoRufinoCv.pdf"
import mancha2 from "../Assets/mancha2.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto ;
  width: 70%;
  height:90vh;
  justify-content: center;
  align-items: center;
   @media (min-width:20.00em) {        
    background-color:red ;
  }
  @media (min-width:37.500em) {
    background-color:yellow ;
  }
  @media(min-width:43rem) {
    background-color:green ;
    flex-direction: row;
    justify-content:space-around;
              
  }
  @media(min-width:61.93em) {
  background-color:blue ;
  }  
`;


const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 12px;
`;


const StyledP = styled.div`
  width:100%;
  margin-top:10px;
  margin-bottom:10px;
  font-family: 'Montserrat', sans-serif;
  font-size:20px;
  display: inline-block;
  position: relative;
  color: #333;
  text-decoration: none;

  &:after {
    content: "";
    display: block;
    margin: 50px auto;
    height: 2px;
    width: 10px;
    transition: all 0.8s;
    border-radius: 5px;
  }

  &:hover:after {
    width: 60%;
    background: #818181;
  }
`;

const Imagen = styled.img`
  height: 450px;
  border-radius:10%;
  cursor: pointer;

  &:hover ~ div ${StyledP}:after {
    width: 60%;
    background-color: #4e6464;
  }

  &:hover{
    box-shadow: 0px 0px 16px 0px rgba(163,163,163,1);
  }

 
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  justify-content: center;
  text-align: center;

`;



const Button = styled.a`
  display: block;
  font-family: 'Montserrat', sans-serif;
  border: 0;
  text-transform: uppercase;
  letter-spacing: .32em;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0;
  box-shadow: 0px 0px 34px -5px rgba(189,189,189,1);
  padding: 1.1rem 2.1rem;
  transition: box-shadow 1s ease-in-out;
  color: rgba(189,189,189,1);
  position: relative;
  background: rgb(114,66,66);
  background: radial-gradient(circle, rgba(114,66,66,1) 0%, rgba(150,79,79,1) 80%);
  box-shadow: 0px 0px 34px -5px rgba(189,189,189,1);
  :hover{
    color: black;
    
  }
  :active{
    transition: background-color 0.1s ease;
    background-color: transparent;
    box-shadow: inset 0 0 0 0.1em #15f800
  }

`;

const Mancha = styled.div`
    background-image: url(${mancha2});
    width: 500px;
    height: 300px;
    margin-left: -2800px;
    position: absolute;
    rotate: calc(270deg);
    right: -100px;
    top: 0;
    z-index: -1;
    @media (min-width:20.00em) {        
  
  }
  @media (min-width:37.500em) {
  }
  @media(min-width:48rem) {
              
  }
  @media(min-width:61.93em) {
              
  } 
`


const Image = () => {
  return (
    <Container>
      <Mancha />
      <Imagen src={mateo} />
      <Container2>
        <Title>{("Mateo Rufino").toUpperCase()}</Title>
        <StyledP>{("Web developer - Full Stack")}</StyledP>
        <Button href={cv} download>Descarga mi CV</Button>
      </Container2>
    </Container>
  );
};



export default Image;
