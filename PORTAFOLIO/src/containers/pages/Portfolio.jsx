import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { Helmet } from "react-helmet-async"
import Header from "components/portfolio/Header"
import Content from "components/portfolio/content"
import Portafolio from "components/portfolio/freelance"

function Portfolio(){
    return(
        <Layout>
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>KoiDevs | Portfolio</title>
                <meta name="title" content="KoiDevs | Portfolio" />
                <meta name="description" content="En esta sección, podrás ver todos los proyectos trabajos en los que he participado" />
                <meta name="keywords" content="portafolio web, desarrollo web, creacion de pagina web, desarrollo software, analisis, documentacion, react, django, marketing digital" />
                <meta name="robots" content="all" />
                <link rel="canonical" href="https://www.koidevs.com/" />
                <meta name="author" content="Wilson Contreras" />
                <meta name="publisher" content="Wilson Contreras" />
                
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.koidevs.com/portfolio" />
                <meta property="og:title" content="KoiDevs | Portfolio" />
                <meta property="og:description" content="En esta sección, podrás ver todos los proyectos trabajos en los que he participado" />
                <meta property="twitter:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.koidevs.com/portfolio" />
                <meta property="twitter:title" content="KoiDevs | Portfolio" />
                <meta property="twitter:description" content="En esta sección, podrás ver todos los proyectos trabajos en los que he participado" />
                <meta property="twitter:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />
            </Helmet>

            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Content/>
                <Portafolio/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Portfolio