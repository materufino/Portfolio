import styled from "styled-components"
import cocktail from "../Assets/cocktail.png"
import front from "../Assets/frontlever.png"

const StyledH3 = styled.h3`
    font-size:40px;
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 10px;
    margin-top: 30px;
`
const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 80%;
    margin: 100px auto;
`

const Divisor = styled.div`
    width:45px;
    height: 5px;
    background-color:#4e6464;
    border-radius: 5px;
    margin-top:25px;
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

const ContenedorImagenes = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    
    `

const TarjetaImg = styled.div`
    width: 50%;
    align-items: center;
    justify-content: center;
    text-align: center;
    h4{
        font-family: 'Source Code Pro', monospace;
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
        
    }
    p{
    
        font-family: 'Montserrat', sans-serif;
        line-height: 20px;
        text-align: center;
    
    }
    img{
        width: 200px;
        height: 200px;
        align-items: center;
    }
`


const Hobbies = () => {

    return (<>

        <Contenedor>
            <StyledH3>Hobbies</StyledH3>
            <Divisor />
            <Parrafo>Además de programar, durante algunos años descubrí nuevos mundos, en los cuales tuve el placer de formarme en profundidad</Parrafo>
            <ContenedorImagenes>
                <TarjetaImg>
                    <h4>Bartender Profesional</h4>
                    <p>En el año 2019 me formé como bartender profesional, en el Instituto Argentino de Coctelería, en la provincia de Buenos Aires</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}> <img src={cocktail} alt="" style={{ width: "150px", height: "150px", marginTop: "15px" }} /> </div>
                </TarjetaImg>
                <TarjetaImg>
                    <h4>Entrenador de Calistenia</h4>
                    <p>Luego de 3 años de duro entrenamiento, decidí llevar mis conocimientos sobre la disciplina más allá.  </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}><img src={front} alt="" /></div>
                </TarjetaImg>
            </ContenedorImagenes>
            <Parrafo style={{ marginTop: "10px", color: "#9e9e9e", cursor: "pointer" }}>Ver todo</Parrafo>
        </Contenedor>



    </>)
}

export default Hobbies