import styled from 'styled-components';
import React from 'react';
import mateo from "../../Assets/Mateo.jpg"
import cv from "../../Assets/MateoRufinoCv.pdf"
import mancha2 from "../../Assets/mancha2.png"
import mancha from "../../Assets/mancha.png"

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 90vh;
  /* height: calc(90vh - ${window.outerHeight - window.innerHeight}px); */
  margin: 0 auto;
 

  @media (min-width:20.00em) {            
  }
  @media (min-width:37.500em) {   
    flex-direction:row ;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media(min-width:43rem) {  
    height: 90vh;
   
       
  }
  @media(min-width:61.93em) {
    
  }  
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width:20.00em) {        
  }
  @media (min-width:37.500em) {
    width: 60%;
    height: 100%;
   justify-content: center;
  
  }
  @media(min-width:43rem) { 
    
  }
  @media(min-width:61.93em) {
    
  } 
`;




const Title = styled.h1`
  margin-top: 10px;
  font-size: 35px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 12px;
  text-align: center;
 
  @media (min-width:20.00em) {            
  }
  @media (min-width:37.500em) {    
    
  }
  @media(min-width:43rem) {        
  }
  @media(min-width:61.93em) {
    font-size: 45px;
  } 
 
`;


const StyledP = styled.p`
  text-align: center;
  margin: 5px auto;
  width:100%;
  font-family: 'Montserrat', sans-serif;
  font-size:20px;
  display: inline-block;
  position: relative;
  color: #333;
  text-decoration: none;

 
  @media (min-width:20.00em) {        
  }
  @media (min-width:37.500em) {
    margin-top: 15px;
     &:after {
    content: "";
    display: block;
    margin: 10px auto;
    height: 2px;
    width: 10px;
    transition: all 0.8s;
    border-radius: 5px;
  }

  &:hover:after {
    width: 60%;
    background: #818181;
  }

  }
  @media(min-width:43rem) { 
    
  }
  @media(min-width:61.93em) {
    
  } 
`;

const Imagen = styled.img`
  align-items: center;
  width: 200px;
  margin-top: 50px;
  border-radius:20%;
  cursor: pointer;

  &:hover ~ div ${StyledP}:after {
    width: 60%;
    background-color: #4e6464;
  }
  &:hover{
    box-shadow: 0px 0px 16px 0px rgba(163,163,163,1);
  }

  @media (min-width:20.00em) {        
  
  }

  @media (min-width:37.500em) {
    width: 250px;
    
   
  }
  @media(min-width:43rem) {
    width: 300px;
    margin-top: -10px;
              
  }
  @media(min-width:61.93em) {
              
  } 
 
`;



const Button = styled.a`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.32em;
  margin: auto;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0px 0px 34px -5px rgba(189,189,189,1);
  padding: 10px;
  margin-bottom: 30px;
  margin-top: 10px;
  color: rgba(189,189,189,1);
  background: rgb(114,66,66);
  background: radial-gradient(circle, rgba(114,66,66,1) 0%, rgba(150,79,79,1) 80%);
  box-shadow: 0px 0px 34px -5px rgba(189,189,189,1);
  width: 220px;
  
  :hover{
    color: black;
    
  }
  :active{
    transition: background-color 0.1s ease;
    background-color: transparent;
    box-shadow: inset 0 0 0 0.1em #15f800
  }

  @media (min-width:20.00em) {        
  
  }

  @media (min-width:37.500em) {
    


   
  }
  @media(min-width:43rem) {
    
              
  }
  @media(min-width:61.93em) {
    padding: 20px;
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
const Mancha2 = styled.div`
    background-image: url(${mancha});
    width: 500px;
    height: 100px;
    margin-left: -200px;
    bottom: -800px;
    position: absolute;
    transform: rotate(90deg);
    z-index: -1;
`



const Image = () => {



  return (<>
    <Container>
      <Mancha />
      <Imagen src={mateo} />
      <Container2>
        <Title>{("Mateo Rufino").toUpperCase()}</Title>
        <StyledP>{("Web developer - Full Stack")}</StyledP>
        <Button href={cv} download>Descarga mi CV</Button>

      </Container2>

    </Container>
    {/*  <Mancha2 /> */}
  </>
  );
};



export default Image;
