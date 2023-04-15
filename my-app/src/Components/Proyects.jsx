import styled from "styled-components";
import GaleriaDeProyectos from "../Components/Pequeños/GaleriaDeProyectos"



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
    background-color:#4e6464;
    border-radius: 5px;
    margin-top:25px;
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


const Proyects = () => {




    return (<>



        <Container>



            <StyledH3>Proyects</StyledH3>

            <Divisor></Divisor>
            <Parrafo>Mis proyectos realizados hasta el momento, si quieres ver más en profundidad puedes hacer clic en la imagen y serás dirigido al sitio web </Parrafo>
            <Parrafo style={{ marginTop: "-10px", color: "#9e9e9e", cursor: "pointer" }}>Ver todos</Parrafo>
            <GaleriaDeProyectos />



        </Container>


    </>)
}

export default Proyects