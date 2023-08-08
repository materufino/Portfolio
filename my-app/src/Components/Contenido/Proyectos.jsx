import anforas from "../../Assets/anforas.png";
import guardianes from "../../Assets/guardianes.png";
import uriel from "../../Assets/uriel.png"
import lacelina from "../../Assets/lacelina.png"

const Proyectos = [{

    titulo: "Ánforas de Atenea",
    url: 'https://www.anforasdeatenea.com',
    imagen: anforas,
    descripcion: "Web para Ánforas de Atenea, con su primera versión web donde cuentan su historia, exhiben sus productos y enseñan su galeria de fotos.",
    descripcionCompleta: "Primer version del sitio web para Ánforas de Atenea, donde el objetivo principal es mostrar sus productos y su galeria de imagenes de las instalaciones de la empresa. Para la 2da etapa de la web se buscará añadir la tienda online con envíos a todo el país",
    tecnologias: ["react"]
}, {
    titulo: "Los guardianes de la chispa",
    url: "",
    imagen: guardianes,
    descripcion: "Proyecto Capstone para el fin del Bootcamp en desarrollo web Full Stack. Se diseñó un CRM de una herreria en el reino de los visigodos, donde hay un administrador que al logearse puede crear pedidos o empleados con sus debidos rangos y tareas.",
    descripcionCompleta: "CRM fantástico donde simula ser una herrería del reino de los visigodos, donde hay un admin que puede crear nuevos pedidos de reparación o fabricación de distintos objetos de la epoca, también puede añadir o quitar herreros que se dividen por rango, y dependiendo de este es el tiempo de demora en los pedidos asignados. Luego cada herrero tiene su usuario donde puede iniciar sesión para ver sus tareas pendientes o finalizadas, modifcar las mismas e incluso añadir anotaciones",
    tecnologias: ["react", "mysql", "expressJs"]
},
{
    titulo: "Uriel Villalva",
    url: "https://www.urielvillalva.com",
    imagen: uriel,
    descripcion: "Portfolio para el fotografo y filmmaker Uriel Villalva donde puede exponer sus trabajos tanto de videoclips como de fotografia con un sector de contaco con sus redes sociales.",
    descripcionCompleta: "Portfolio para el fotografo y filmmaker Uriel Villalva donde puede exponer sus trabajos tanto de videoclips como de fotografia con un sector de contaco con sus redes sociales.",
    tecnologias: ["react"]
}
    ,
{
    titulo: "Casa de campo La Celina",
    url: "https://www.casadecampolacelina.com",
    imagen: lacelina,
    descripcion: "Presenté una hermosa casa de campo con encantadoras fotos de sus instalaciones, comodidades y servicios. Los visitantes pueden disfrutar de las habitaciones, actividades al aire libre y relajarse en el tanque australiano, además de reservar para eventos especiales.",
    descripcionCompleta: "Presenté una hermosa casa de campo con encantadoras fotos de sus instalaciones, comodidades y servicios. Los visitantes pueden disfrutar de las habitaciones, actividades al aire libre y relajarse en el tanque australiano, además de reservar para eventos especiales.",
    tecnologias: ["react"]
}

]
export default Proyectos;