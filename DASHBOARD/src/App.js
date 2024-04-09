import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import store from './store';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import AnimatedRoutes from 'hocs/routes/Routes';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>KoiDevs | Blog</title>
                <meta name="title" content="KoiDevs" />
                <meta name="description" content="Sección de Blog de KoiDevs, para que veas un poco mi trabajo y mis intereses." />
                <meta name="keywords" content="desarrollo web, creacion de pagina web, desarrollo software, analisis, documentacion, react, django, marketing digital" />
                <meta name="robots" content="all" />
                <link rel="canonical" href="https://www.koidevs.com/" />
                <meta name="author" content="Wilson Contreras" />
                <meta name="publisher" content="Wilson Contreras" />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.koidevs.com/blog" />
                <meta property="og:title" content="KoiDevs" />
                <meta property="og:description" content="Sección de Blog de KoiDevs, para que veas un poco mi trabajo y mis intereses." />
                <meta property="og:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />
                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.koidevs.com/blog" />
                <meta property="twitter:title" content="KoiDevs" />
                <meta property="twitter:description" content="Sección de Blog de KoiDevs, para que veas un poco mi trabajo y mis intereses." />
                <meta property="twitter:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />
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
