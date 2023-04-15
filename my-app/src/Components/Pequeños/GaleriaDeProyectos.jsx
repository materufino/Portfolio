import { useState } from 'react';
import Proyectos from '../Contenido/Proyectos'
import styled from 'styled-components';


const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  justify-content: space-between;
  align-items: center;
  width: 100px;
  bottom: 20px;
  left: calc(50% - 50px);
`;

const SliderButton = styled.button`
  
  border-radius: 5%;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin:20px;
  height: 35px;
  width: 45px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
  }

  &:focus {
    outline: none;
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
                <Parrafo>{Proyectos[currentProyect].descripcion} </Parrafo>
            </Contenedor>

            <ButtonContainer>
                <SliderButton onClick={handlePrevious}>Anterior</SliderButton>
                <SliderButton onClick={handleNext}>Siguiente</SliderButton>
            </ButtonContainer>

        </Contenedor>


    </>);
}

export default GaleriaDeProyectos;