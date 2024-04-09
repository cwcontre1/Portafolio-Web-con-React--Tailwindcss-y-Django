import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

function Error404(){

    const regresar = () => {
        window.history.back()
    };

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
            <div className="pt-20">
                <p className="font-bold">
                    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-50 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#0f172a" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-footer-color sm:text-4xl">
              <span className="text-footer-color">¡Oops!.</span>
              <br />
              La sección que buscas no existe
            </h2>
            <p className="mt-6 text-lg leading-8 text-footer-color">
              Regresa e inténtalo de nuevo, si el problema persiste, contáctame
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                onClick={()=>{regresar()}}
                className="rounded-md bg-orange-button px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 ease-in-out hover:bg-footer-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Regresar &#8634;
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-8 w-[35rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src='https://bafybeigya4ednb7rsikkysoncconremii6fprvpwasubnagfmdfc3ksimy.ipfs.w3s.link/error404.jpeg'
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
                </p>
                <Footer/>
            </div>
        </Layout>
    )
}
export default Error404