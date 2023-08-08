import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Proyectos from "../../Contenido/Proyectos";
import styled from "styled-components";




const Imagen = styled.img`
   margin: 0 auto;
    width: 95%;
`

const SliderContainer = styled.div`
    max-width: 270px;
    margin: 0 auto;
    border: 2px solid #fafafa10;
    background-color: #fafafa10;
    backdrop-filter: blur(0.4rem);
    -webkit-backdrop-filter: blur(0.4rem);
    border-radius: 10px;
    padding: 5px;
    min-height: 300px;
`;


const Titulo = styled.h3`
   
    height: 50px;
    text-align: center;
    margin-top: 15px;
    min-height: 20px;
    color: #727697;
    font-size: 1.5rem;
    font-family: 'IBM Plex Sans',sans-serif;
`

const Descripcion = styled.h3`
    font-family: 'IBM Plex Sans',sans-serif;
    text-align: center;
    width: 95%;
    margin-top: 20px;
`


const SliderProyectos = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (<>
        <SliderContainer>
            <Slider {...settings}>
                {Proyectos.map(item => (
                    <>

                        <Titulo>{item.titulo}</Titulo>
                        <a href={item.url} target="on_blank">
                            <Imagen src={item.imagen} alt={item.titulo} />
                        </a>
                        <Descripcion>{item.descripcion}</Descripcion>
                    </>

                ))}
            </Slider >
        </SliderContainer>
    </>)
}

export default SliderProyectos;