import styled from "styled-components"
import Hobbies from "./Hobbies"

const Contenedor = styled.div`

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-radius: 5px;
    margin-top: 30px;
    margin-bottom: 10px;
    -webkit-box-shadow: 0px 31px 12px -35px rgba(189,189,189,1);
    -moz-box-shadow: 0px 31px 12px -35px rgba(189,189,189,1);
    box-shadow: 0px 31px 12px -35px rgba(189,189,189,1);




  @media (min-width:20.00em) {            
  }
  @media (min-width:37.500em) {   
    justify-content: center;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(153,153,153,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(153,153,153,1);
    box-shadow: 0px 0px 5px 0px rgba(153,153,153,1);
    padding: 20px;
    width: 70%;
    
  }
  @media(min-width:48rem) {  
   
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 450px;
    
   
  }
   @media(min-width:61.93em) {
    width: 42%;
    margin: 10px;
    min-height: 500px;
    
    
  }  
  
`
const MiniContenedor = styled.figure`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color:#333;
     @media(min-width:48rem) {  
      width: 100%;
      margin-top: 5px;
     }
`


const Imagen = styled.img`
    width: 120px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    @media (min-width:20.00em) {            
  }
  @media (min-width:37.500em) {
   width: 150px;
    
  }
  @media(min-width:43rem) {  
    
      
  }
  @media(min-width:48rem) {  
    
    
      
  }
  @media(min-width:61.93em) {
    
    
  }  

`
const StyledH4 = styled.h4`
    width: 50%;
    margin-bottom: 20px;
    font-size: 15px;
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 5px;
    text-align: left;
    min-height: 50px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-right: 5px;


  @media (min-width:20.00em) {            
  }
  @media (min-width:37.500em) {   
   
   
  }
  @media(min-width:43rem) {  
   
   
      
  }
  @media(min-width:48rem) {  
    width: 38%;
    
    align-items: center; 
  }
  @media(min-width:80em) {
    
    margin: 5% auto;
    
    
  }  
    
`
const Parrafo = styled.p`
    font-family: 'Montserrat', sans-serif;
    line-height: 25px;
    text-align: center;
    font-size: 14px;
    margin-bottom: 10px;
    width: 100%;
    margin-top: 5px;
    min-height: 100px;
     @media (min-width:20.00em) {            
  }
  @media (min-width:37.500em) {
    margin: auto;
    margin-bottom: 10px;
    margin-top: 30px;
    
    
  }
  @media(min-width:48rem) {  
    margin-top: 30px;
    text-align: left;
    
   
       
  }
  @media(min-width:61.93em) {
    min-height: 250px;
    
  } 
`

const Parrafo2 = styled.p`
    font-family: 'Montserrat', sans-serif;
    padding: 10px;
    margin-bottom: 15px;
    font-size: clamp(.7rem, 1vw - 2rem, 3rem);
    
    color: #727272;
    border-radius: 100px;



`

const CardHobbie = ({ titulo, lugar, imagen, descripcion, fecha }) => {

  return (<>
    <Contenedor>
      <MiniContenedor style={{ justifyContent: "space-around", textAlign: "center", alignItems: "center", alignContent: "center" }}>
        <StyledH4>{titulo}</StyledH4>
        <Imagen src={imagen} />
      </MiniContenedor>
      <Parrafo>{descripcion} </Parrafo>

      <MiniContenedor>
        <Parrafo2>{lugar}</Parrafo2>
        <Parrafo2>{fecha} </Parrafo2>
      </MiniContenedor>
    </Contenedor>
  </>)
}

export default CardHobbie