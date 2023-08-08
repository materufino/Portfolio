import styled from "styled-components";
import '../../../Assets/fonts.css'
const Contenedor = styled.nav`
    
    margin-top: 10px;
    width: 95%;
    height: 15vh;
    position: fixed;
    border: 2px solid #fafafa10;
    background-color: #fafafa10;
    backdrop-filter: blur(0.4rem);
    -webkit-backdrop-filter: blur(0.4rem);
    border-radius: 10px;
    z-index: 2;
 
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
    font-size: 16px;
    font-family: 'IBM Plex Sans',sans-serif;
`


const NNavbar = () => {

    return (<>
        <Contenedor className="CardContainer">
            <StyledUl>
                <StyledLi>Inicio</StyledLi>
                <StyledLi>Sobre Mi</StyledLi>
                <StyledLi>Proyectos</StyledLi>
                <StyledLi>Hobbies</StyledLi>
            </StyledUl>
        </Contenedor>


    </>)
}

export default NNavbar;