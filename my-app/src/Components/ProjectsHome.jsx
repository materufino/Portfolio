import styled from "styled-components";
import Navbar2 from "./Pequeños/Navbar"
import Proyectos from "./Contenido/Proyectos";
import CardProyecto from "./Pequeños/CardProyecto";

const StyledH3 = styled.h3`
    font-size:35px;
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 10px;
    
`
const Divisor = styled.div`
    width:45px;
    height: 5px;
    border-radius: 5px;
    margin-top:25px;
    background-color: #724242;
`
const Contenedor = styled.div`
    display: flex;
    margin: 45px auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProjectsHome = () => {
    return (<>
        <Navbar2 />
        <Contenedor>
            <StyledH3>Projects</StyledH3>
            <Divisor />
            {Proyectos.map(proyecto =>
                <CardProyecto {...proyecto} />
            )}
        </Contenedor>

    </>)
}

export default ProjectsHome;