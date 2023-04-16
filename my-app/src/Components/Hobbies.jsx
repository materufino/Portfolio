import styled from "styled-components"


const StyledH3 = styled.h3`
    font-size:40px;
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 10px;
    margin-top: 30px;
`
const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 80%;
    margin: 100px auto;
`

const Divisor = styled.div`
    width:45px;
    height: 5px;
    background-color:#4e6464;
    border-radius: 5px;
    margin-top:25px;
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
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
`

const TarjetaImg = styled.div`
    width: 50%;
    background-color: red;
    h4{
        font-family: 'Source Code Pro', monospace;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    p{
        font-family: 'Montserrat', sans-serif;
        line-height: 20px;
    }
    img{
        width: 200px;
        height: 200px;
        align-items: center;
    }
`



const Hobbies = () => {

    return (<>

        <Contenedor>
            <StyledH3>Hobbies</StyledH3>
            <Divisor />
            <Parrafo>Además de programar, durante algunos años descubrí nuevos mundos, en los cuales tuve el placer de formarme en profundidad</Parrafo>
            <ContenedorImagenes>
                <TarjetaImg>
                    <h4>Bartender Profesional</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non cumque, mollitia sapiente debitis velit pariatur quidem similique suscipit illo. Enim.</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}><img src="#" alt="" /></div>
                </TarjetaImg>
                <TarjetaImg>
                    <h4>Bartender Profesional</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non cumque, mollitia sapiente debitis velit pariatur quidem similique suscipit illo. Enim.</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}><img src="#" alt="" /></div>
                </TarjetaImg>
            </ContenedorImagenes>
        </Contenedor>



    </>)
}

export default Hobbies