import styled from "styled-components";
import '../../../Assets/fonts.css'

const Contenedor = styled.nav`
    margin-top: 10px;
    width: 95%;
    min-height: 60px;
    max-width: 600px;
    height: 15vh;
    max-height: 80px;
    position: fixed;
    border: 2px solid #fafafa10;
    background-color: #fafafa10;
    backdrop-filter: blur(0.4rem);
    -webkit-backdrop-filter: blur(0.4rem);
    border-radius: 10px;
    z-index: 10;
 
`
const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

`
const StyledLi = styled.li`
    width: 25%;
    text-align: center;
    color: #f7f7f7;
    font-size: 15px;
    font-family: 'IBM Plex Sans',sans-serif;
    padding-top: 10px ;
    padding-bottom: 10px;
    border-radius: 0.5rem;
    transition: all .3s ease;
    &:hover{
        transform: translatey(-2px) scale(1.2);
        color:#4B527B;
        
    }
    
`


const NNavbar = () => {

    return (<>
        <Contenedor>
            <StyledUl>
                <StyledLi>Inicio</StyledLi>
                <StyledLi>Sobre Mi</StyledLi>
                <StyledLi>Proyectos</StyledLi>
                <StyledLi>Formación</StyledLi>
            </StyledUl>
        </Contenedor>


    </>)
}

export default NNavbar;