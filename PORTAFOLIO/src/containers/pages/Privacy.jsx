import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { Helmet } from "react-helmet-async"


function Privacy(){
    return(
        <Layout>
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>KoiDevs | Privacy</title>
                <meta name="title" content="KoiDevs | Politica de privacidad" />
                <meta name="description" content="Politica de privacidad de la información suministrada en el sitio KoiDevs" />
                <meta name="keywords" content="portafolio web, desarrollo web, creacion de pagina web, desarrollo software, analisis, documentacion, react, django, marketing digital" />
                <meta name="robots" content="all" />
                <link rel="canonical" href="https://www.koidevs.com/" />
                <meta name="author" content="Wilson Contreras" />
                <meta name="publisher" content="Wilson Contreras" />
                
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.koidevs.com/Política de Privacidad" />
                <meta property="og:title" content="KoiDevs | Política de Privacidad" />
                <meta property="og:description" content="Politica de privacidad de la información suministrada en el sitio KoiDevs" />
                <meta property="twitter:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.koidevs.com/Política de Privacidad" />
                <meta property="twitter:title" content="KoiDevs | Política de Privacidad" />
                <meta property="twitter:description" content="Politica de privacidad de la información suministrada en el sitio KoiDevs" />
                <meta property="twitter:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />
            </Helmet>

            <Navbar/>
            <div className="pt-28">
                <div className="max-w-3xl mx-auto my-16 p-16 text-lg shadow-lg rounded-xl bg-form-opacity space-y-6 text-justify">
                    <h1 className="block text-center text-3xl font-semibold text-footer-color">Politica de privacidad</h1>
                    <p>
                    KoiDevs se compromete a proteger la privacidad de sus usuarios. Esta Política de Privacidad explica qué información recopilamos, cómo la utilizamos y cómo protegemos su privacidad.
                    </p>
                    <h2 className="text-center text-2xl font-semibold text-footer-color">
                    Información que recopilamos
                    </h2>

                    <h3 className="text-xl font-semibold text-footer-color">
                        Recopilamos la siguiente información de los usuarios:
                        </h3> 
                    <p>
                        <strong>Información personal:</strong> Nombre, número de teléfono y dirección de correo electrónico. <br />
                        <strong>Información de uso del sitio web:</strong> Páginas visitadas, acciones realizadas en el sitio web y tiempo dedicado al sitio web. <br />
                        <strong>Información del dispositivo:</strong> Tipo de dispositivo, sistema operativo y dirección IP.
                    </p>

                    <h2 className="text-center text-2xl font-semibold text-footer-color">
                    Cómo utilizamos la información
                    </h2>
                    <h3 className="text-xl font-semibold text-footer-color">
                    Utilizamos la información que recopilamos para:
                    </h3>
                    <p>
                        <strong>Comunicarnos con usted:</strong> Responder a sus consultas, enviarle información sobre nuestros servicios y mantenerle informado sobre las novedades de KoiDevs. <br />
                        <strong>Mejorar nuestro sitio web:</strong> Analizar la información de uso del sitio web para mejorar la experiencia del usuario. <br />
                        <strong>Proteger nuestro sitio web:</strong> Detectar y prevenir actividades fraudulentas o abusivas.
                    </p>

                    <h2 className="text-center text-2xl font-semibold text-footer-color">
                    Cómo protegemos su información
                    </h2>
                    <p>
                    Tomamos medidas de seguridad técnicas y organizativas para proteger su información personal contra el acceso no autorizado, la divulgación accidental o ilegal y la pérdida, destrucción o daño accidental.
                    </p>

                    <h2 className="text-center text-2xl font-semibold text-footer-color">
                    Sus derechos
                    </h2>
                    <h3 className="text-xl font-semibold text-footer-color">
                    Usted tiene derecho a:
                    </h3>
                    <p>
                        Acceder a su información personal. <br />
                        Solicitar la corrección o eliminación de su información personal. <br />
                        Oponerse al tratamiento de su información personal. <br />
                        Restringir el tratamiento de su información personal. <br />
                        Solicitar la portabilidad de su información personal. <br />
                    </p>
                    <p>
                    Para ejercer sus derechos, puede ponerse en contacto con nosotros a través de la siguiente dirección de correo electrónico: cwcontre1@gmail.com
                    </p>

                    <h2 className="text-center text-2xl font-semibold text-footer-color">
                    Cambios en la Política de Privacidad
                    </h2>

                    <p>
                    Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Le notificaremos de cualquier cambio importante en la Política de Privacidad mediante un correo electrónico o un aviso en nuestro sitio web.
                    </p>
                    <p>
                    <strong>Fecha de vigencia</strong>
                    </p>
                    <p>
                    Esta Política de Privacidad entró en vigor el 5 de abril de 2024.
                    </p>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Privacy