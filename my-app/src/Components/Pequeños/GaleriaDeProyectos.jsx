import { useState } from 'react';
import Proyectos from '../Contenido/Proyectos'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const StyledH4 = styled.h4`
    margin-bottom: 35px;
    font-size:20px;
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 5px;
    text-align: center;
    
`

const Imagen = styled.img`
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    
    @media (min-width:20.00em) {        
        width:320px ;
  }
  @media (min-width:37.500em) {
    
    width: 590px;
  }
  @media(min-width:48rem) {
    width: auto;
    height: 420px;
              
  }
  @media(min-width:61.93em) {
              
  } 
    
`

const Parrafo = styled.p`
    font-family: 'Montserrat', sans-serif;
    line-height: 25px;
    text-align: center;
    font-size: 15px;
    margin-top: 30px;
    margin-bottom: 10px;
    width: 90%;
    min-height: 100px;
`

const Icono = styled(FontAwesomeIcon)`
   transition: transform 0.5s ease;
  
`;
const BotonSliderAtras = styled.button`
  width: 20%;
  color: rgba(189,189,189,1);
  background: rgb(114,66,66);
  background: radial-gradient(circle, rgba(114,66,66,1) 0%, rgba(150,79,79,1) 80%);
  box-shadow: 0px 0px 34px -5px rgba(189,189,189,1);
  padding: 0.5rem;
  border: none;
  border-right: 1px solid grey;
  border-radius: 5px;
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  
  &:hover  {
    ${Icono}{
        transform: translateX(-15px); 
        
    }}
  
`

const BotonSliderAdelante = styled.button`
  color: rgba(189,189,189,1);
  font-size: 1.2rem;
  border-radius: 5px;
  width: 20%;
  background: rgb(114,66,66);
  background: radial-gradient(circle, rgba(114,66,66,1) 0%, rgba(150,79,79,1) 80%);
  box-shadow: 0px 0px 34px -5px rgba(189,189,189,1);
  padding: 0.5rem;
  border: none;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  
    @media (min-width:20.00em) {        
        &:hover  {
    ${Icono}{
        transform: translateX(15px);
    }}
  }
    @media (min-width:37.500em) {
  }
    @media(min-width:48rem) {

  }
    @media(min-width:61.93em) {

  }
`
const ContenedorBotones = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    width: 100%;
`
const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
     @media (min-width:20.00em) {        
        min-height: 600px;
  }
    @media (min-width:37.500em) {
  }
    @media(min-width:48rem) {
              
  }
    @media(min-width:61.93em) {
              
  } 
`

const GaleriaDeProyectos = () => {

    const [currentProyect, setCurrentProyect] = useState(0);

    const handleNext = () => {
        const nextIndex = currentProyect === Proyectos.length - 1 ? 0 : currentProyect + 1;
        setCurrentProyect(nextIndex);
    };
    const handlePrevious = () => {
        const previousIndex = currentProyect === 0 ? Proyectos.length - 1 : currentProyect - 1;
        setCurrentProyect(previousIndex);
    };



    return (<Contenedor>


        <StyledH4>{Proyectos[currentProyect].titulo}</StyledH4>
        <a href={Proyectos[currentProyect].url} target="_blank"><Imagen src={Proyectos[currentProyect].imagen} alt="Captura sitio web Ánforas de Atenea" /></a>

        <ContenedorBotones>

            <BotonSliderAtras onClick={handlePrevious} > <Icono icon={faArrowLeft} />  </BotonSliderAtras>
            <BotonSliderAdelante onClick={handleNext} > <Icono icon={faArrowRight} /> </BotonSliderAdelante>

        </ContenedorBotones>

        <Parrafo> {Proyectos[currentProyect].descripcion} </Parrafo>


    </Contenedor>);
}

export default GaleriaDeProyectos;