import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";

import About from "containers/pages/About";
import Services from "containers/pages/Services";
import Contact from "containers/pages/Contact";
import Portfolio from "containers/pages/Portfolio";
import Project from "containers/pages/Project"
import Privacy from "containers/pages/Privacy";

import Blog from "containers/pages/Blog";
import PostDetail from "containers/pages/PostDetail";
import Search from "containers/pages/Search";
import Category from "containers/pages/Category";

function AnimatedRoutes(){

    const location = useLocation()

    return(
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          
          {/* Error Display */}
          <Route path="*" element={<Error404/>}/>

          {/* Home Display */}
          <Route path="/" element={<Home/>}/>

          {/* About Display */}
          <Route path="/about" element={<About/>}/>

          {/* Blog Display */}
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:slug" element={<PostDetail />} />
          <Route path="/s=:term" element={<Search />} />
          <Route path="/category/:slug" element={<Category />} />

          {/* Servicios Display */}
          <Route path="/services" element={<Services/>}/>

          {/* Contacto Display */}
          <Route path="/contact" element={<Contact/>}/>

          {/* Portafolio Display */}
          <Route path="/portfolio" element={<Portfolio/>}/>

          {/* Coming Soon Display */}
          <Route path="/projects" element={<Project/>}/>

          {/* Coming Soon Display */}
          <Route path="/privacy" element={<Privacy/>}/>

        </Routes>
      </AnimatePresence>
    )
}

export default AnimatedRoutes