import styled from "styled-components";
import NNavbar from "./NuevosPequeños/NNavbar";
import Elegida from "../../Assets/Elegida.png"
import SliderWebs from "./NuevosPequeños/SliderWebs";
import cv from "../../Assets/MateoRufinoCv.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Todo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Contenedor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
   background-image: linear-gradient(140deg,
      hsl(0deg 0% 6%) 0%,
      hsl(22deg 5% 15%) 90%,
      hsl(23deg 6% 25%) 100%);
    clip-path: circle(75.9% at 50% 23%);
    min-height: 850px;
  @media (min-width:20.00em) {    
      
  }

  @media (min-width:25rem) {
    clip-path: circle(75.9% at 50% 23%);
   
    
  }
  @media (min-width:37.5rem) {
    
    clip-path: circle(75.9% at 50% 15%);
    
  }
  @media(min-width:43rem) {   
    clip-path: polygon(0 0, 100% 0%, 100% 75%, 0 76%);
       
  }
  @media(min-width:61.93em) {
    
    
  } 
`




const ContenedorImagen = styled.div`
  background-color: #242424;
  border: 2px solid #5e5e5e;
  display: flex;
  justify-content: center;
  box-shadow: inset 0px 0px 30px -3px rgba(255, 255, 255, 0.2);
  border-radius: 12px;
   margin-top: 50vw;
  @media (min-width:20.00em) {    
      margin-top: 50vw;
  }

  @media (min-width:25rem) {
    margin-top: 40vw;
   
    
  }
  @media (min-width:37.5rem) {
    margin-top: 12vh;
 
  }
  @media(min-width:43rem) {   
    margin-top: 20vw;
       
  }
  @media(min-width:61.93em) {
    margin-top: 15vw;
    
  } 
`

const Imagen = styled.img`
  width: 250px;
  height: 350px;
  z-index: 1;
  margin-top: -40px;
    
`

const ContenedorNombre = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

const Nombre = styled.h1`
  text-align: center;
  letter-spacing: 2px;
  font-size:35px;
  padding: 30px;
  font-family: 'IBM Plex Sans',sans-serif; 
  color: #4B527B;
`
const Descripcion = styled.p`
  text-align: center;
  font-size: 18px;
  padding-bottom: 30px;
  font-family: 'IBM Plex Sans',sans-serif; 
  color: #c9c7c6;
  letter-spacing: 1px;
`
// ABOUT  <--------------



const ContenedorAbout = styled.section`
  box-shadow: inset 0px 100px 100px -50px rgba(0,0,0,0.5);
  background-color: rgb(75 92 123);
  display:flex;
  justify-content: center;
  flex-direction: column;
  min-height: 600px;
  line-height: 25px;
  margin-top: -205px;
  padding-bottom: 200px;
  @media (min-width:20.00em) {    
      
  }

  @media (min-width:25rem) {
    /* margin-top: -190px; */
    
    
  }
  @media (min-width:37.5rem) {
    margin-top: -295px;
   
    padding-bottom: 160px;
  
    
  }
  @media(min-width:43rem) {   
      
  }
  @media(min-width:61.93em) {
    
    
  } 
`





const StyledH3 = styled.h3`
  margin: 10px auto;
  font-size: 30px;
  letter-spacing: 10px;
  text-align: center;
  color: #0F0F0F;
  font-family: 'IBM Plex Sans',sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  padding-top: 85px;
  @media (min-width:20.00em) {    
    
  }

  @media (min-width:25rem) {
    margin-top: 55px;
    
    
    
  }
  @media (min-width:37.5rem) {
    
    
  
    
  }
  @media(min-width:43rem) {   
   
  }
  @media(min-width:61.93em) {
    
    
  } 
`
const StyledParrafo = styled.p`
    margin:  30px  auto;
    width: 90%;
    font-family: 'IBM Plex Sans',sans-serif;
    text-align: center;
    color: #f3f2f2;
    font-weight: 300;
    line-height: 25px;
`
const SpecialParrafo = styled(StyledParrafo)`
  margin-top: -5px;
  margin-bottom: 0px;
 
`

// PROYECTOS <----------
const ContenedorProyectos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  clip-path: circle(82% at 50% 70%);
  background-color: rgb(34 32 31);
  margin: 0 auto;
  margin-top: -190px;
  width: 100%;
  min-height: 900px;
  padding-bottom: 50px;
  overflow-x: hidden;
  margin-bottom: 10px;
  ${StyledH3}{
    color: rgb(75 92 123);
    }
  ${StyledParrafo}{
    color:#c9c7c6;
        
    }
  @media (min-width:20.00em) {    
    
  }

  @media (min-width:25rem) {
    
    
    
  }
  @media (min-width:32.8125rem) {
    clip-path: circle(82% at 50% 75%);
    
  
    
  }
   @media (min-width:37.5rem) {
    margin-top: -200px;
    clip-path: circle(82% at 50% 80%);

    
  
    
  }

  @media(min-width:43rem) {   
    margin-top: -160px;
    clip-path: polygon(0 10%, 100% 15%, 100% 100%, 0 100%);
     
  }
  @media(min-width:61.93em) {
    
    
  } 
`



const ContenedorSlider = styled.div`
  width: 85%;
  margin: 0 auto;   
`
const Proximamente = styled.p`
  font-family: 'IBM Plex Sans',sans-serif;
  letter-spacing: 2px;
  line-height: 20px;
  text-align: center;
  margin: 0;
  padding: 40px 20px;
  font-size: 0.8rem;
  color: #fff;
  text-shadow: 0 0 20px #5c43cf;
  text-transform: uppercase;

`

// CV <----------

const ContenedorCv = styled.section`
    width: 100%;
   background-color: rgb(34 32 31);
  /*  box-shadow: inset 0px -90px 20px -45px rgba(75,92,123,0.8); */
   justify-content: center;
   display: flex;
   flex-direction: column;
   
`
const Button = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: relative;
  padding: 8px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.15s ease;
  outline: none;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 5px);
    border: 1px solid #7d8082;
    transition: all 0.15s ease;
  }

  &:before {
    top: 0;
    border-bottom-width: 0;
  }

  &:after {
    bottom: 0;
    border-top-width: 0;
  }

  &:active {
    &:before,
    &:after {
      right: 3px;
      left: 3px;
    }
    &:before {
      top: 3px;
    }
    &:after {
      bottom: 3px;
    }
  }

  &:hover {
    color: #0f1923;

    .button_sl {
      width: calc(100% + 15px);
    }

    .button_lg::after {
      background-color: #fff;
    }
  }
`;
const LargeButton = styled.span`
  position: relative;
  display: block;
  padding: 10px 20px;
  color: #fff;
  background-color: #0f1923;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px transparent;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: #0f1923;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4px;
    height: 4px;
    background-color: #0f1923;
    transition: all 0.2s ease;
  }
`;
const SlantedStripe = styled.span`
  display: block;
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -8px;
  width: 0;
  background-image: linear-gradient(to bottom right, #00c6ff, #0072ff);
  transform: skew(-15deg);
  transition: all 0.2s ease;
`;


const ButtonText = styled.span`
  position: relative;
`;
const ContenedorBoton = styled.div`
    margin: 30px auto;
    padding: 60px;
`;
const StyledLink = styled.a`
  color: white;
  text-decoration: none;
 
`;


// FORMACION <---------

const ContenedorFormacion = styled.section`
  z-index: 1;
  width: 100%;
  background-color: rgb(75 92 123);
  box-shadow: 1px -15px 16px 20px rgba(75,92,123,1),-0px 15px 16px 20px rgba(75,92,123,1);
  font-family: 'IBM Plex Sans',sans-serif;
`;

const ContenedorElementos = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const Elemento = styled.article`
  text-align: center;
  border-left: 1px solid #ffffff21;
  border-bottom: 1px solid #ffffff21;
  margin-top: 10px;
  border-bottom-left-radius: 1rem ;
`;

const StyledH5 = styled.h5`
  text-align: center;
  font-size: 20px;
  padding: 20px;
  color: #ffffff;
  letter-spacing: 0px;
`;

const Icono = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin-top: 20px;
  
`;

const ParrafoForm = styled.p`
  margin-bottom:30px;
  line-height: 25px;
  letter-spacing: 1px;
`;

// SOCIAL <--------

const ContenedorSocial = styled.footer`
    width: 100%;
    padding-bottom: 10px;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
    
`

const StyledListItem = styled.li`
 
 
`
const ContenedorS = styled.div`
  width: 305px;
  min-height: 60px;
 
  height: 15vh;
  max-height: 80px;
  border: 2px solid #fafafa10;
  background-color: #fafafa10;
  backdrop-filter: blur(0.4rem);
  -webkit-backdrop-filter: blur(0.4rem);
  border-radius: 10px;
  z-index: 10;
  margin: 0 auto;
  margin-bottom: 10px;
 

`



const Icono2 = styled(FontAwesomeIcon)`
  font-size: 2rem;
  padding: 25px;
  color: white;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover{
    transform: scale(1.3);
    

  }
`


const NuevaPortada = () => {



  return (<Todo>

    <NNavbar />

    <Contenedor>

      <ContenedorImagen>
        <Imagen src={Elegida} alt="" />
      </ContenedorImagen>

      <ContenedorNombre>
        <Nombre>Mateo Rufino</Nombre>
        <Descripcion>Desarrollo Web y Ciberseguridad</Descripcion>
      </ContenedorNombre>

    </Contenedor>

    <ContenedorAbout>
      <StyledH3>Bienvenido</StyledH3>
      <StyledParrafo>
        Hola! Soy Mateo, Desarrollador web Full Stack y actualmente me estoy formando en Ciberseguridad. Desde muy joven me ha gustado mucho la informática, lo que me ha llevado donde estoy hoy. En la web podrás ver mis proyectos, descargar mi Curriculum Vitae y conocer un poco más sobre mi. Te invito a que explores mis trabajos para ver cómo puedo ayudarte en tu próximo proyecto.
      </StyledParrafo>
      <SpecialParrafo>
        ¡Gracias por visitar mi sitio y espero poder trabajar juntos pronto!
      </SpecialParrafo>
    </ContenedorAbout>

    <ContenedorProyectos>
      <StyledH3>Proyectos</StyledH3>
      <StyledParrafo>Los realizados hasta el momento, haciendo click en la imagen podrás visitarlo </StyledParrafo>
      <ContenedorSlider>
        <SliderWebs />
      </ContenedorSlider>
      <Proximamente >Proximamente proyectos de ciberseguridad</Proximamente>

    </ContenedorProyectos>



    <ContenedorFormacion>
      <StyledH3>Formación</StyledH3>
      <ContenedorElementos>
        <Elemento>

          <Icono icon={faCode} />
          <StyledH5>Desarrollo Web - Full Stack</StyledH5>
          <ParrafoForm>IMMUNE INSTITUTE</ParrafoForm>
        </Elemento>
        <Elemento>
          <Icono icon={faUserSecret} />
          <StyledH5>Ciberseguridad</StyledH5>
          <ParrafoForm>Fundacion Splai</ParrafoForm>
        </Elemento>
        <Elemento>
          <Icono icon={faGraduationCap} />
          <StyledH5>Bachillerato - Ciencias Sociales</StyledH5>
          <ParrafoForm>Colegio Lincoln Bilingüe</ParrafoForm>
        </Elemento>
      </ContenedorElementos>
    </ContenedorFormacion>

    <ContenedorCv>
      <ContenedorBoton>
        <Button className="button">
          <LargeButton className="button_lg">
            <SlantedStripe className="button_sl" />
            <StyledLink href={cv} download><ButtonText className="button_text">Descargar mi Cv</ButtonText></StyledLink>
          </LargeButton>
        </Button>
      </ContenedorBoton>
      <ContenedorSocial>

        <ContenedorS>
          <StyledList>
            <StyledListItem href="https://www.linkedin.com/in/mateo-rufino/"><Icono2 icon={faLinkedin} /></StyledListItem>
            <StyledListItem href="https://github.com/materufino?tab=repositories"><Icono2 icon={faGithub} /></StyledListItem>
            <StyledListItem href="mailto:rufinomateo99@gmail.com"><Icono2 icon={faEnvelope} /></StyledListItem>
          </StyledList>
        </ContenedorS>

      </ContenedorSocial>

    </ContenedorCv>



  </Todo>)
}

export default NuevaPortada;