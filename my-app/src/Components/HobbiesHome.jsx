import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import Navbar2 from "./Pequeños/Navbar";
import hobbies from "../Components/Contenido/Hobbies"
import CardHobbie from "./Pequeños/CardHobbie";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Divisor = styled.div`
    width:45px;
    height: 5px;
    border-radius: 5px;
    margin-top:25px;
    background-color: #724242;
`

const Contenedor = styled.div`
    display: flex;
    width: 85%;
    margin: 45px auto; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

     @media(min-width:61.93em) {
        flex-direction: row;
        
    
  } 
`


const StyledH3 = styled.h3`
    font-size:35px;
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 10px;
    text-align: center;
    

`

const Parrafo = styled.p`
    margin: auto;
    margin-top:50px;
    padding-bottom:20px ;
    margin-bottom:10px;
    font-family: 'Montserrat', sans-serif;
    font-size:18px;
    text-align: center;
    line-height: 30px;
    width: 95%;
    -webkit-box-shadow: 0px 31px 12px -35px rgba(189,189,189,1);
    -moz-box-shadow: 0px 31px 12px -35px rgba(189,189,189,1);
    box-shadow: 0px 31px 12px -35px rgba(189,189,189,1);
    

`
const List = styled.ul`
    margin-top: 20px;
    list-style: circle;
     -webkit-box-shadow: 0px 31px 12px -35px rgba(189,189,189,1);
    -moz-box-shadow: 0px 31px 12px -35px rgba(189,189,189,1);
    box-shadow: 0px 31px 12px -35px rgba(189,189,189,1);
    padding-bottom: 20px;
`

const ListItem = styled.li`

    line-height: 30px;
    font-family: 'Montserrat', sans-serif;
    font-size:18px;
    margin-top: 20px;
`




const HobbiesHome = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const productosRef = useRef(null);
    return (<>
        <Navbar2 />
        <Contenedor data-aos="fade-up">
            <div style={{ alignItems: "center", flexDirection: "column", display: "flex" }} >
                <StyledH3>Hobbies</StyledH3>
                <Divisor />
            </div>
            <Parrafo>Siempre he sido una persona que considera la continua formación como algo esencial y supe aprovechar el paso del tiempo para formarme en profundidad en varios sectores </Parrafo>
            {hobbies.map(hobbie =>
                <CardHobbie {...hobbie} />
            )}
            <div style={{ alignItems: "center", flexDirection: "column", display: "flex", width: "100%" }}>
                <StyledH3 style={{ fontSize: "20px", marginTop: "45px", lineHeight: "30px" }}>Otros hobbies y formaciones</StyledH3>
                <Divisor style={{ height: "4px", marginLeft: "2px" }} />
            </div>
            <List>
                <ListItem>Curso desarrollo de aplicaciones móviles en Java - 2020 Sicos Informática</ListItem>
                <ListItem>Comercio electronico - 2021 Consejo profesional de Economia de la ciudad de La Plata</ListItem>
                <ListItem> Egresado Bachiller Ciencias Sociales - 2016 Colegio Lincoln, La Plata </ListItem>
            </List>


        </Contenedor>
    </>)
}

export default HobbiesHome;