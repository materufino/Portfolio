import styled from "styled-components"
import cocktail from "../../Assets/cocktail.png"
import front from "../../Assets/frontlever.png"


const StyledH3 = styled.h3`
    font-size:40px;
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 10px;
    margin-top: 30px;
`
const Contenedor = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 80%;
    
`

const Divisor = styled.div`
    width:45px;
    height: 5px;
    border-radius: 5px;
    margin-top:25px;
    background-color: #724242;
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
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
    justify-content: space-around;
    
     @media (min-width:20.00em) {        
    
  }
  @media (min-width:37.500em) {
    
    flex-direction: row;
  }
  @media(min-width:43rem) {
    
    flex-direction: row;
              
  }
  @media(min-width:61.93em) {
  
  }  
    
    `

const TarjetaImg = styled.div`
   
    width: 100%;
    padding: 10px;
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
     @media (min-width:20.00em) {        
    
  }
  @media (min-width:37.500em) {
    box-shadow: 0px 0px 12px 2px rgba(189,189,189,0.8);
  }
  @media(min-width:43rem) {
    
    flex-direction: row;
              
  }
  @media(min-width:61.93em) {
  
  }  
`

const Parrafo2 = styled.p`
    margin-bottom:10px;
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

const Hobbies = () => {

    return (<div data-aos="fade-up">

        <Contenedor>
            <div style={{ alignItems: "center", flexDirection: "column", display: "flex" }}>
                <StyledH3>Hobbies</StyledH3>
                <Divisor />
            </div>
            <Parrafo>Además de programar, durante algunos años descubrí nuevos mundos, en los cuales tuve el placer de formarme en profundidad</Parrafo>
            <ContenedorImagenes>
                <TarjetaImg>
                    <h4>Bartender Profesional</h4>
                    <p>En el año 2019 me formé como bartender profesional, en el Instituto Argentino de Coctelería, en la provincia de Buenos Aires</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}> <img src={cocktail} alt="" style={{ width: "150px", height: "150px", marginTop: "15px" }} /> </div>
                </TarjetaImg>
                <TarjetaImg>
                    <h4>Entrenador de Calistenia</h4>
                    <p>Luego de 3 años de duro entrenamiento, decidí llevar mis conocimientos sobre la disciplina a otro nivel.  </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}><img src={front} alt="" /></div>
                </TarjetaImg>
            </ContenedorImagenes>
            <Parrafo2>Ver todo</Parrafo2>
        </Contenedor>



    </div>)
}

export default Hobbies