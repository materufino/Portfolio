import styled from "styled-components";
import GaleriaDeProyectos from "./Pequeños/GaleriaDeProyectos"
import mancha from "../Assets/mancha.png"


const Container = styled.div`
    display: flex;
   flex-direction: column;
    width: 80%;
    margin: 10px auto;
    align-items: center;
    justify-content: center;

`
const Divisor = styled.div`
    width:45px;
    height: 5px;
    border-radius: 5px;
    margin-top:25px;
    background-color: #724242;
`

const StyledH3 = styled.h3`
    font-size:40px;
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 10px;
    
`
const Parrafo = styled.p`
    margin-top:50px;
    margin-bottom:10px;
    font-family: 'Montserrat', sans-serif;
    font-size:20px;
    text-align: center;
    line-height: 30px;

`
const Mancha = styled.div`
    background-image: url(${mancha});
    width: 500px;
    height: 100px;
    margin-left: -200px;
    position: absolute;
    transform: rotate(90deg);
`

const Parrafo2 = styled.p`
    margin-top:50px;
    margin-bottom:50px;
    font-family: 'Montserrat', sans-serif;
    font-size:20px;
    text-align: center;
    line-height: 30px;
    margin-top: 30px;
    color: #9e9e9e;
    cursor: pointer;
    :hover{
        color: #cfcfcf;
    }

`

const Projects = () => {




    return (<>

        <Mancha />


        <Container>



            <StyledH3>Projects</StyledH3>
            <Divisor></Divisor>
            <Parrafo>Mis proyectos realizados hasta el momento, si quieres ver más en profundidad puedes hacer clic en la imagen y serás dirigido al sitio web </Parrafo>
            <Parrafo2>Ver todos</Parrafo2>
            <GaleriaDeProyectos />

        </Container>


    </>)
}

export default Projects