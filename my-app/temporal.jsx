import styled from "styled-components"
import mateo from "../Assets/Mateo.jpg"

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageBorder = styled.div`

  width: 300px;
  height: 300px;
  background-color: #eee;
  background-image: url(${mateo});
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    width: 290px;
    height: 290px;
    left: 5px;
    top: 5px;
    background-color: #fff;
  }

  .main-image {
    margin-right: -100px;
    position: absolute;
    width: 290px;
    height: 290px;
    left: 5px;
    top: 5px;
    background-image: url(${mateo});
    background-size: 300px 300px;
    background-position: center center;
    z-index: 2;
    transition: .5s cubic-bezier(.5,.03,.41,1);
  }

  &:hover > .main-image {
    transform: translate(-15px, -15px);
    transition: .5s cubic-bezier(.5,.03,.41,1);
  }

  &:hover > p.title:after {
    transform: scale3d(1, 1, 1);
    transition: .5s cubic-bezier(.5,.03,.41,1);
  }

  .title {
    height: 300px;
    margin-left:480px;
    padding: 0;
    position: absolute;
    bottom: -80px;
    font-weight: 400;
    line-height: 80px;
    color: #000000;
    font-size: 5em;
    transform: translateX(-50%);
    font-family: 'Source Code Pro', monospace;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #3d3d3d;
      bottom: 120px;
      left: 0;
      transform: scale3d(0, 1, 1);
      transition: .5s cubic-bezier(.5,.03,.41,1);
    }
  }
`;

const Posicion = styled.div`
    width: 80%;
   margin-top:200px;
`


const Image = () => {
  return (
    <Posicion>
      <Flex>
        <ImageBorder>
          <div className="main-image"></div>
          <p className="title">Mateo Rufino</p>
        </ImageBorder>
        <span>Hola que tal</span>
      </Flex>
    </Posicion>
  );
};

export default Image;



/* 

React y styled-components
Quiero que la imagen este centrada dentro de un div alineada a la izquierda, el titulo tiene que ser "Mateo Rufino" cuyo texto se subraye al hacer hover sobre la imagen y debajo del subrayado debe aparecer un texto en forma de maquina de escribir bien lento "Full Stack - Web Developer"


*/