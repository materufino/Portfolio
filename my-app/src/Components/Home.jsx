import React, { useEffect, useRef } from "react"
import AboutMe from "./Pequeños/AboutMe"
import Hobbies from "./Pequeños/Hobbies"
import Navbar from "./Pequeños/Navbar"
import Portada from "./Pequeños/Portada"
import Projects from "./Pequeños/Projects"
import Social from "./Pequeños/Social"
import AOS from 'aos';
import 'aos/dist/aos.css';
import NuevaPortada from "./Pequeños/NuevaPortada"



const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const productosRef = useRef(null);

    useEffect(() => {
        if (window.location.hash === '#about') {
            productosRef.current.scrollIntoView();
        } else if (window.location.hash === '#portada') {
            productosRef.current.scrollIntoView();
        }
    }, []);


    return (<>

        <NuevaPortada />


        {/*  <div id="portada" ref={productosRef}>
            <Portada />
        </div>
        <Navbar />
        <div id="about" ref={productosRef}>
            <AboutMe />
        </div>
        <Projects id="proyectos" />

        <Hobbies id="hobbies" />

        <Social /> */}








    </>)
}

export default Home