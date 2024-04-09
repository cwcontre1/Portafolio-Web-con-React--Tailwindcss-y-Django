import { Helmet } from "react-helmet-async"
import Layout from "hocs/layouts/Layout"

import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Header from "components/services/Header"
import Desarrollo from "components/services/desarrollo"
import Features from "components/services/Features"
import Gestion from "components/services/gestion"
import Documentacion from "components/services/documentacion"

function Services(){

    window.onload = function () {
    // Obtiene la URL actual
    const absoluteUrl = window.location.href;
    const relativeUrl = window.location.hash;
    if(relativeUrl === ""){
        console.log("hola: " + relativeUrl)
    }
    else{
        const component = relativeUrl.slice(1);
        console.log(component)
        window.scrollTo({
                                  top: document.getElementById(component).offsetTop,
                                    behavior: 'smooth'
                                  })
    }
    };

    return(
        <Layout>
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>KoiDevs | Services</title>
                <meta name="title" content="KoiDevs | Services" />
                <meta name="description" content="¿Aún no sabes si estás en el lugar correcto? Da una vuelta por la sección de servicios, para que conozcas todo lo que puedo hacer." />
                <meta name="keywords" content="desarrollo web, creacion de pagina web, desarrollo software, analisis, documentacion, react, django, marketing digital" />
                <meta name="robots" content="all" />
                <link rel="canonical" href="https://www.koidevs.com/" />
                <meta name="author" content="Wilson Contreras" />
                <meta name="publisher" content="Wilson Contreras" />
                
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.koidevs.com/services" />
                <meta property="og:title" content="KoiDevs | Services" />
                <meta property="og:description" content="¿Aún no sabes si estás en el lugar correcto? Da una vuelta por la sección de servicios, para que conozcas todo lo que puedo hacer." />
                <meta property="og:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.koidevs.com/services" />
                <meta property="twitter:title" content="KoiDevs | Services" />
                <meta property="twitter:description" content="¿Aún no sabes si estás en el lugar correcto? Da una vuelta por la sección de servicios, para que conozcas todo lo que puedo hacer." />
                <meta property="twitter:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Features/>
                <Desarrollo/>
                <Documentacion/>
                <Gestion/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Services