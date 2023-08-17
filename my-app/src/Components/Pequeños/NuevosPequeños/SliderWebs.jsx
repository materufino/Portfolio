import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Proyectos from "../../Contenido/Proyectos";
import styled from "styled-components";
import { useEffect } from "react";




const Imagen = styled.img`
    margin: 0 auto;
    width: 95%;
`

const SliderContainer = styled.div`
    min-width: 270px;
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
    color: white;
`


const SliderWebs = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "green" }}
                onClick={onClick}
            />
        );
    }




    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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

    useEffect(() => {
        document.body.classList.add('bodynoscroll');
        return () => {
            document.body.classList.remove('bodynoscroll');
        };
    }, []);

    return (<>

        <SliderContainer>
            <Slider {...settings}>
                {Proyectos.map(item => (
                    <>

                        <Titulo>{item.titulo}</Titulo>
                        <a href={item.url} target="on_blank">
                            <Imagen src={item.imagen} alt={item.titulo} loading="lazy" />
                        </a>
                        <Descripcion>{item.descripcion}</Descripcion>
                    </>

                ))}
            </Slider >
        </SliderContainer>
    </>)
}

export default SliderWebs;