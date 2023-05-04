import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";




const Contenedor = styled.nav`
    
    width: 300px;
    height: 70px;
    background: radial-gradient(circle, rgba(114,66,66,1) 0%, rgba(150,79,79,1) 80%);
    box-shadow: 0px 0px 20px 5px #818181;
    border-radius: 100px;
    display: flex;
    width: 60%;
    justify-content: center;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  
    @media (min-width:20.00em) {        
       
    
  }
  @media (min-width:37.500em) {
    
    
  }
  @media(min-width:44rem) {
    
    
         
  }
  @media(min-width:61.93em) {
    width: 30%;
  }  
   
`


const StyledList = styled.ul`
    
    display:flex;
    gap: 30px;
    color:#333;
    text-align: center;
    align-items: center;
    text-decoration: none;
    
`

const StyledListItem = styled.li`

`

const StyledLink = styled.a`
    text-decoration: none;
    color:#333;
`



const Icono = styled(FontAwesomeIcon)`
   transition: transform 0.5s ease;
   font-size: 2rem;
   color:#333;

   :hover{
    transform: scale(1.2);
    color: white;
   }

   
   
  
`



const Social = () => {


    return (<Contenedor>

        <StyledList >

            <StyledListItem  >
                <StyledLink href="https://www.linkedin.com/in/mateo-rufino/" >
                    <Icono icon={faLinkedin} />
                </StyledLink>
            </StyledListItem>

            <StyledListItem>
                <StyledLink href="https://github.com/materufino?tab=repositories">
                    <Icono icon={faGithub} />
                </StyledLink>
            </StyledListItem>

            <StyledListItem>
                <StyledLink href="mailto:rufinomateo99@gmail.com">
                    <Icono icon={faEnvelope} />
                </StyledLink>
            </StyledListItem>


        </StyledList>


    </Contenedor>)
}

export default Social;





/* 

 @media (min-width:20.00em) {        
            
    
  }
  @media (min-width:37.500em) {
    
  }
  @media(min-width:44rem) {
    
    
         
  }
  @media(min-width:61.93em) {
  
  }  
  
  */