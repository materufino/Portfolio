import styled from 'styled-components';
import React from 'react';
import mateo from "../Assets/Mateo.jpg"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto ;
  width:80%;
  height:90vh;
  justify-content:space-around;
`;


const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  font-family: 'Source Code Pro', monospace;
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
    margin: 30px auto;
    height: 5px;
    width: 10px;
    transition: all 0.8s;
    border-radius: 5px;
  }

  &:hover:after {
    width: 60%;
    background: #4e6464;
  }
`;

const Imagen = styled.img`
  min-width: 300px;
  height: 300px;
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




const Image = () => {
  return (
    <Container>

      <Imagen src={mateo} />
      <div>
        <Title>{("Mateo Rufino").toUpperCase()}</Title>
        <StyledP>{("Web developer - Full Stack")}</StyledP>
      </div>

    </Container>
  );
};



export default Image;
