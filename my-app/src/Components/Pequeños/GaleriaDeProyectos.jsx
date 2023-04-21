import { useState } from 'react';
import Proyectos from '../Contenido/Proyectos'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const StyledH4 = styled.h4`
    margin-bottom: 35px;
    font-size:20px;
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 5px;
    
`

const Imagen = styled.img`
    width: 90%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`

const Parrafo = styled.p`
    font-family: 'Montserrat', sans-serif;
    line-height: 25px;
    text-align: center;
    font-size: 15px;
    margin-top: 30px;
    margin-bottom: 10px;
    width: 90%;
`

const ButtonContainer = styled.div`
  display: flex;
  width: 85%;
  margin:0 auto;
  justify-content: space-between;
  position: absolute;
`;

const SliderButton = styled.button`
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  height: 50px;
  width: 50px;
  font-size: 30px;
  background-color: rgba(0,0,0,0);
  :hover{
    color: #ffffff;
    transition: 1s;
    transform: translateX(15px);
  }

`;



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
    console.log(Proyectos[0])


    return (<>
        <Contenedor>
            <Contenedor style={{ minHeight: "600px" }}>
                <StyledH4>{Proyectos[currentProyect].titulo}</StyledH4>
                <Imagen src={Proyectos[currentProyect].imagen} alt="Captura sitio web Ánforas de Atenea" />
                <ButtonContainer>
                    <SliderButton onClick={handlePrevious}><FontAwesomeIcon icon={faArrowLeft} /></SliderButton>
                    <SliderButton onClick={handleNext}><FontAwesomeIcon icon={faArrowRight} /></SliderButton>
                </ButtonContainer>
                <Parrafo>{Proyectos[currentProyect].descripcion} </Parrafo>

            </Contenedor>



        </Contenedor>


    </>);
}

export default GaleriaDeProyectos;