import styled, { keyframes } from 'styled-components';



const Contenedor = styled.nav`
    margin-top:60px;
    width:80%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    letter-spacing:3px;
    height:10vh;
`

const Secciones = styled.ul`
    display: flex;
    flex-direction:row;
    img{
        width:60px;
    }

`

const StyledLi = styled.li`
    
    a{
        font-size: 25px;
        padding: 15px;
        font-family:'Montserrat', sans-serif;
        text-decoration:none;
        color: #313131;
        box-shadow: -5px 0px 0px -4px rgba(94, 94, 94, 0.75);
    }
    a:hover{
        transition: 0.1s;
        
        
    }
    :hover{
        transform: scale(1.1) translate(0px,-5px)
    }

`
const hoverAnimation = keyframes`
  0% {
    transform: scaleX(0);
    height: 5px;
  }
  45% {
    transform: scaleX(1.05);
    height: 5px;
  }
  55% {
    height: 5px;
  }
  100% {
    transform: scaleX(1.05);
    height: 100%;
  }
`;

const noHoverAnimation = keyframes`
  0% {
    transform: scaleX(1.05);
    height: 100%;
  }
  45% {
    height: 5px;
  }
  55% {
    transform: scaleX(1.05);
    height: 5px;
    opacity: 1;
  }
  100% {
    transform: scaleX(0);
    height: 5px;
    opacity: .02;
  }
`;

export const StyledLink = styled.a`
  position: relative;
  text-decoration: none;
  color: #6d6d6d;
  z-index: 1;
  
  &:before {
    content: "";
    background: #4e6464;
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    animation: .8s ${noHoverAnimation};
    animation-fill-mode: forwards;
    z-index: -1;
    border-radius: 5px;;
    color:white;
  }
  
  &:hover:before,
  &:focus:before {
    animation: .4s ${hoverAnimation} linear;
    animation-fill-mode: forwards;
  }

  &:hover{
    color: white;
  }
`;


const Navbar = () => {

  return (<>
    <Contenedor>
      <Secciones>
        <StyledLi><a href="#AboutMe"> About </a></StyledLi>
        <StyledLi><a href="#Proyects"> Proyects </a></StyledLi>
        <StyledLi><a href="#Hobbies"> Hobbies </a></StyledLi>
        <StyledLi>
          <div>
            <StyledLink href="https://www.example.com">CV</StyledLink>
          </div>
        </StyledLi>
      </Secciones>
    </Contenedor>

  </>)
}

export default Navbar