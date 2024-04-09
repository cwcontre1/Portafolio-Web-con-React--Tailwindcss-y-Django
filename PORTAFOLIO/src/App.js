import { Provider } from "react-redux";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import store from "./store";
import AnimatedRoutes from "Routes";


function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>KoiDevs | Software Development</title>
        <meta name="title" content="KoiDevs" />
        <meta name="keywords" content="desarrollo web, creacion de pagina web, desarrollo software, analisis, documentacion, react, django, marketing digital" />
        <meta name="description" content="Portafolio web de software y marketing digital, servicios de análisis, documentación, desarrollo de software y desarrollo web." />
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

{/* <!-- Meta Tags Generated with https://metatags.io --> */}

      </Helmet>
    <Provider store={store}>
      <Router>
        <AnimatedRoutes/>
      </Router>
    </Provider>
    </HelmetProvider>
  );
}

export default App;
