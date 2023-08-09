import styled from "styled-components";
import NNavbar from "./NuevosPequeños/NNavbar";
import Elegida from "../../Assets/Elegida.png"
import SliderWebs from "./NuevosPequeños/SliderWebs";
import cv from "../../Assets/MateoRufinoCv.pdf"


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
    clip-path: circle(75.9% at 46% 23%);
    min-height: 850px;
`
const ContenedorImagen = styled.div`
    background-color: #242424;
    border: 2px solid #5e5e5e;
    display: flex;
    justify-content: center;
    box-shadow: inset 0px 0px 30px -3px rgba(255, 255, 255, 0.2);
    border-radius: 12px;
   margin-top: 22vh;
   
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
    font-size: 18px;
    padding-bottom: 30px;
    font-family: 'IBM Plex Sans',sans-serif; 
    color: #c9c7c6;
    letter-spacing: 1px;
`

const StyledH3 = styled.h3`
    margin: 0 auto;
    font-size: 30px;
    letter-spacing: 10px;
    text-align: center;
    color: #0F0F0F;
    font-family: 'IBM Plex Sans',sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    padding-top: 85px;
`
const StyledParrafo = styled.p`
    margin: 30px auto;
    width: 90%;
    font-family: 'IBM Plex Sans',sans-serif;
    text-align: center;
    color: #ffffff;
    font-weight: 300;
    line-height: 25px;
`

const ContenedorAbout = styled.section`
box-shadow: inset 0px 100px 100px -50px rgba(0,0,0,0.5);
    background-color: rgb(75 92 123);
    display:flex;
    justify-content: center;
    flex-direction: column;
    line-height: 25px;
    margin-top: -200px;
  padding-bottom: 200px;
`
const ContenedorProyectos = styled.section`
    clip-path: circle(82% at 50% 70%);
    background-color: rgb(34 32 31);
    margin: 0 auto;
    margin-top: -190px;
    width: 100%;
    padding-bottom: 50px;
    overflow-x: hidden;
    ${StyledH3}{
        color: rgb(75 92 123);
    }
    ${StyledParrafo}{
        color:#c9c7c6;
        
    }
`



const ContenedorSlider = styled.div`
    width: 85%;
    margin: 0 auto;
    
    
`
const ContenedorCv = styled.section`
    width: 100%;
   background-color: rgb(34 32 31);
   box-shadow: inset 0px -50px 20px -45px rgba(75,92,123,0.8);
   justify-content: center;
   display: flex;
   
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
    margin: 0 auto;
    padding: 60px;
`
const StyledLink = styled.a`
  color: white;
  text-decoration: none;
 
`;

const Proximamente = styled.p`
    /* font-size:20px;
    margin-top: 30px;
    text-align: center; */
    position: absolute;
     font-family: 'IBM Plex Sans',sans-serif;
     letter-spacing: 2px;
     line-height: 20px;
    text-align: center;
    margin: 0;
    padding: 40px 20px;
    font-size: 0.8rem;
    color: #fff;
    text-shadow: 0 0 20px #15f15e;
  text-transform: uppercase;

  &after:{
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 20px;
    z-index: -1;
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
                Hola! Bienvenido a mi portfolio. Mi nombre es Mateo, soy Desarrollador web Full Stack y actualmente me estoy formando en Ciberseguridad. Desde muy joven me ha gustado mucho la informática, lo que me ha llevado donde estoy hoy. En la web podrás conocer mis proyectos, descargar mi Curriculum Vitae y saber un poco más sobre mi. Te invito a que explores mis trabajos para ver cómo puedo ayudarte en tu próximo proyecto.
                <br />
                ¡Gracias por visitar mi sitio y espero poder trabajar juntos pronto!
            </StyledParrafo>
        </ContenedorAbout>

        <ContenedorProyectos>
            <StyledH3>Proyectos</StyledH3>
            <StyledParrafo>Mis proyectos realizados hasta el momento, si quieres ver más en profundidad puedes hacer clic en la imagen y serás dirigido al sitio web </StyledParrafo>
            <ContenedorSlider>
                <SliderWebs />
            </ContenedorSlider>
            <Proximamente data-text="Proximamente proyectos de ciberseguridad">Proximamente proyectos de ciberseguridad</Proximamente>

        </ContenedorProyectos>

        <ContenedorCv>
            <ContenedorBoton>
                <Button className="button">
                    <LargeButton className="button_lg">
                        <SlantedStripe className="button_sl" />
                        <StyledLink href={cv} download><ButtonText className="button_text">Descargar mi Cv</ButtonText></StyledLink>
                    </LargeButton>
                </Button>
            </ContenedorBoton>
        </ContenedorCv>

    </Todo>)
}

export default NuevaPortada;