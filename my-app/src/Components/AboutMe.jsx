import styled from "styled-components"
import fondo from '../Assets/fondo.png'

const Contenedor = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 80%;
    margin: 100px auto;
    background-image: url(${fondo});
    background-size: cover;
`





const StyledH3 = styled.h3`
    font-size:40px;
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 10px;
    margin-top: 30px;
`

const Parrafo = styled.p`
    margin-top:50px;
    margin-bottom:10px;
    font-family: 'Montserrat', sans-serif;
    font-size:20px;
    text-align: center;
    line-height: 30px;
    width: 95%;

`
const Divisor = styled.div`
    width:45px;
    height: 5px;
    background-color:#4e6464;
    border-radius: 5px;
    margin-top:25px;
`



const AboutMe = () => {





    return (<>
        <Contenedor>
            <StyledH3>About</StyledH3>
            <Divisor></Divisor>
            <Parrafo>Hola! Bienvenido a mi portfolio. Mi nombre es Mateo y soy Desarrollador web Full Stack. Desde muy joven me ha gustado mucho la programación, lo que me ha llevado donde estoy hoy.
                En la web podrás encontrar mi Curriculum Vitae, acceder a mis proyectos y saber un poco más sobre mi. Te invito a que explores mi trabajo y veas cómo puedo ayudarte en tu próximo proyecto.<br />
                ¡Gracias por visitar mi sitio y espero poder trabajar juntos pronto!
            </Parrafo>
        </Contenedor>

    </>)
}

export default AboutMe




//https://youtu.be/P2sKUQTWLZs