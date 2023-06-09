import styled from "styled-components";


const Contenedor = styled.div`
    display: flex;
    width: 100%;
    margin: 30px auto;
    justify-content: center;
    align-items:center;
    border-radius: 5px;
    flex-direction: column;
    box-shadow: 0px 12px 17px -12px rgba(191,191,191,1);
    -webkit-box-shadow: 0px 12px 17px -12px rgba(191,191,191,1);
    -moz-box-shadow: 0px 12px 17px -12px rgba(191,191,191,1);

  @media (min-width:20.00em) {            
  }
  @media (min-width:37.500em) {   
    justify-content: center;
     
    -webkit-box-shadow: 0px 0px 5px 0px rgba(153,153,153,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(153,153,153,1);
    box-shadow: 0px 0px 5px 0px rgba(153,153,153,1);
    
  }
  @media(min-width:48rem) {  
   
   flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
   
  }
  @media(min-width:80em) {
    min-height: 450px;
    width: 45%;
    
    
  }  
`
const MiniContenedor = styled.figure`
    display: flex;
    justify-content: center;
    color:#333;
     @media(min-width:48rem) {  
      width: 100%;
      margin-top: 5px;
     }
`


const Imagen = styled.img`
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    @media (min-width:20.00em) {            
  }
  @media (min-width:37.500em) {   
    margin: auto;
    
  }
  @media(min-width:43rem) {  
    width: 500px;
      
  }
  @media(min-width:48rem) {  
    width: 55%;
    margin-top: 0px;
    border-radius: 4px;
    margin-left: 5%;
    margin-top: -15px;
    box-shadow: 0px 0px 34px -5px #919191;

    
      
  }
  @media(min-width:61.93em) {
    
    
  }  

`
const StyledH4 = styled.h4`
    margin-top: 25px;
    margin-bottom: 20px;
    font-size: 20px;
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 5px;
    text-align: center;
    min-height: 50px;
    
  @media (min-width:20.00em) {            
  }
  @media (min-width:37.500em) {   
   
  }
  @media(min-width:43rem) {  
   
      
  }
  @media(min-width:48rem) {  
    width: 38%;
    /* margin-left: 2%; */
    align-items: center;
    margin-top: 12%;
    
    
      
  }
  @media(min-width:80em) {
    
    margin: 5% auto;
    
    
  }  
    
`
const Parrafo = styled.p`
    font-family: 'Montserrat', sans-serif;
    line-height: 25px;
    text-align: center;
    font-size: 15px;
    margin-bottom: 10px;
    width: 90%;
    min-height: 100px;
     @media (min-width:20.00em) {            
  }
  @media (min-width:37.500em) {
    margin: auto;
    margin-bottom: 10px;
    
    
  }
  @media(min-width:48rem) {  
    margin-top: 30px;
    text-align: left;
    
   
       
  }
  @media(min-width:61.93em) {
    
    
  } 
`
const Parrafo2 = styled.a`
    font-family: 'Montserrat', sans-serif;
    text-align: end;
    background-color: rgba(114,66,66,1);
    box-sizing: content-box;
    color:#8f8e8e;
    padding: 12px;
    border-radius: 7px;
    margin-bottom: 20px;
    margin-right: 20px;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(191,191,191,1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(191,191,191,1);
    box-shadow: 0px 0px 10px 0px rgba(191,191,191,1);
    :hover{
        color: #cacaca;
        -webkit-box-shadow: 0px 0px 10px 0px #3d3d3d;
    -moz-box-shadow: 0px 0px 10px 0px #3d3d3d;
    box-shadow: 0px 0px 15px 0px #3d3d3d;
        
    }
`




const CardProyecto = ({ titulo, url, imagen, descripcionCompleta, tecnologias }) => {
  return (<>

    <Contenedor>
      <Imagen src={imagen} alt={titulo} />
      <StyledH4>{titulo}</StyledH4>
      <Parrafo>{descripcionCompleta} </Parrafo>
      <MiniContenedor>
        <Parrafo2 href={url}>Ir al sitio web</Parrafo2>
      </MiniContenedor>
    </Contenedor>



  </>)
}

export default CardProyecto;