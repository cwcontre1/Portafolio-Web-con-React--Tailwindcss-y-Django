import { Helmet } from "react-helmet-async"
import Layout from "hocs/layouts/Layout"

import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Header from "components/home/Header"
import Incentives from "components/home/Incentive"
import Portafolio from "components/home/Portafolio"
import Features from "components/home/Features"
import CTA from "components/home/CTA"

function Home(){
    return(
        <Layout>
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>KoiDevs | Software Development</title>
                <meta name="title" content="KoiDevs" />
                <meta name="description" content="Portafolio web de software y marketing digital, servicios de análisis, documentación, desarrollo de software y desarrollo web." />
                <meta name="keywords" content="desarrollo web, creacion de pagina web, desarrollo software, analisis, documentacion, react, django, marketing digital" />
                <meta name="robots" content="all" />
                <link rel="canonical" href="https://www.koidevs.com/" />
                <meta name="author" content="Wilson Contreras" />
                <meta name="publisher" content="Wilson Contreras" />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.koidevs.com/" />
                <meta property="og:title" content="KoiDevs" />
                <meta property="og:description" content="Portafolio web de software y marketing digital, servicios de análisis, documentación, desarrollo de software y desarrollo web." />
                <meta property="og:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />
                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.koidevs.com/" />
                <meta property="twitter:title" content="KoiDevs" />
                <meta property="twitter:description" content="Portafolio web de software y marketing digital, servicios de análisis, documentación, desarrollo de software y desarrollo web." />
                <meta property="twitter:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />
            </Helmet>
            <Navbar/>
            <div>
                <Header/>
                <Incentives/>
                <Portafolio/>
                <Features/>
                <CTA/>
            </div>
                <Footer/>
        </Layout>
    )
}
export default Home