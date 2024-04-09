import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

function About(){
    return(
        <Layout>
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>KoiDevs | About Me</title>
                <meta name="title" content="KoiDevs | About Me" />
                <meta name="description" content="¡Hola!Portafolio web de software y marketing digital, servicios de análisis, documentación, desarrollo de software y desarrollo web." />
                <meta name="keywords" content="desarrollo web, creacion de pagina web, desarrollo software, analisis, documentacion, react, django, marketing digital" />
                <meta name="robots" content="all" />
                <link rel="canonical" href="https://www.koidevs.com/" />
                <meta name="author" content="Wilson Contreras" />
                <meta name="publisher" content="Wilson Contreras" />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.koidevs.com/about" />
                <meta property="og:title" content="KoiDevs | About Me" />
                <meta property="og:description" content="¡Hola! Soy Wilson, ingeniero electrónico, especialista en software y apasionado por el desarrollo web." />
                <meta property="og:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.koidevs.com/about" />
                <meta property="twitter:title" content="KoiDevs | About Me" />
                <meta property="twitter:description" content="¡Hola! Soy Wilson, ingeniero electrónico, especialista en software y apasionado por el desarrollo web." />
                <meta property="twitter:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                <div className="relative overflow-hidden bg-white py-16">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
          <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
            <svg
              className="absolute top-12 left-full translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <span className="block text-center text-lg font-semibold text-orange-button">Sobre mí</span>
              <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                ¿Qué tal? Soy Wilson
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-500">
              ¡No imaginas la cantidad de veces que tienes que poner exactamente lo mismo en un Portafolio Web! <br />
            </p>
          </div>
          <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
            <p>
                Mi nombre es Wilson Contreras. Soy un apasionado de la tecnología con una sólida 
                formación en ingeniería electrónica y de software. Obtuve mi título de ingeniero electrónico 
                en la Universidad Central de Bogotá y luego me especialicé en ingeniería de software en la Universidad Antonio Nariño.
            </p>
            <p>
                No he sido muy hábil para desenvolverme en ciertos aspectos de la vida, desde niño tenía dificultades para
                prestar atención, y las relaciones interpersonales no eran mi fuerte. Sin embargo, encontré refugio en áreas y
                aspectos de la ciencia, como la matemática, la física, la metafísica, la astronomía y la ingeniería (sí, yo también quise ser astronauta).
                Así que, cuando llegó el día de escoger mi profesión, no dudé en que fuera esta.
            </p>
            <p>
                A lo largo de mi recorrido como ingeniero de software, he adquirido experiencia en el ciclo de vida del desarrollo 
                de software, desde la planificación y el análisis hasta la implementación y las pruebas. 
                He trabajado como documentador, analista y desarrollador de software en algunas empresas, las cuales puedes ver en mi
                <span>&#32;</span><Link to="/portfolio" className="text-orange-button" >sección de portafolio</Link>.
            </p>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img
                  className="absolute -mt-[1px] inset-0 h-full w-full object-cover"
                  src='https://bafybeia4uin65lptofiit5ilb6qh3uhhx3o6h6newjonvrtyz4t3zv6lwa.ipfs.w3s.link/perfil.jpg'
                  alt="IDU"
                />
                <div className="absolute inset-0 bg-orange-200 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500 via-orange-400 opacity-70" />
                <div className="relative px-8">
                  <div className="h-20">
                   
                  </div>
                  <div className="h-[140px]"></div>
                </div>
              </div>
            </div>
            <p>
                Actualmente resido en Bogotá, Colombia, donde disfruto de una vida equilibrada (a veces no mucho) entre mi trabajo y mis pasatiempos.
                Soy excesivamente persistente, terco en la mayoría de ocasiones y con dificultades para llevar a cabo múltiples tareas
                al mismo tiempo. Pero entregado, responsable y dedicado a mi labor como ingeniero.
            </p>
            <h2 className="font-overlock text-4xl">Koi<span className="text-orange-button">Devs</span></h2>
            <p>
              KoiDevs no es más que una prueba a mí mismo de que soy capaz de lograr lo que me
              proponga sin importar la dificultad. Este proyecto nace de mi pasión por el desarrollo de software (y sí... los peces koi), además de mi interes por construir las bases de lo que me gustaría
              , pudiera ser una agencia de marketing en un futuro. El trabajo que ves aquí ha sido fruto de 
              múltiples noches en vela, un par de litros de café, (algunos golpes al teclado) y mucho amor a mi profesión.
            </p>
            <h2>KoiDevs puede ser <span className="text-orange-button">nuestro</span> proyecto</h2>
            <p>
              Tal vez no requieras de mis servicios, pero puedes estar interesado en hacer parte de mi
              proyecto, nada me haría más feliz que compartir esta pasión con alguien más, así que, si es
              el caso, <Link to="/contact" className="text-orange-button">contáctame</Link> para que podamos
              hacer crecer esta idea!
            </p>
            <p>
              Si llegaste hasta aquí, agradezco el interés que pusiste en esta sección, y en mi portafolio
              en general. Que este sea el inicio de grandes proyectos juntos!
            </p>
          </div>
        </div>
      </div>
            </div>
                <Footer/>
        </Layout>
    )
}
export default About