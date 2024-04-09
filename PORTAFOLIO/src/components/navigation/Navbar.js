import { connect } from "react-redux"
import { NavLink , Link } from "react-router-dom"
import { useState } from "react";
import Loader from "react-spinners/CircleLoader";
import { Dialog } from '@headlessui/react'
import Footer from "./Footer";
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

function Navbar (){

    const [loading]=useState(true)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    window.onscroll = function(){scrollFunction()}
    
    function scrollFunction(){
        if(document.getElementById("navbar")){
            

            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                document.getElementById("navbar").classList.add("shadow-sm")
                document.getElementById("navbar").classList.add("bg-white")
            }
            else{
                document.getElementById("navbar").classList.remove("shadow-sm")
                document.getElementById("navbar").classList.remove("bg-white")
            }
        }
    }


    return(
        <nav id="navbar" className="w-full bg-white py-0 top-0 z-40 transition duration-300 ease-in-out fixed">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-[1800px] ">

            <div className="pr-4 py-2">
            <div className="hidden -ml-6 -mt-2 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:flex-nowrap sm:px-14 px-2">
                <Link to="/" className="mt-2">
                    
                        <img src='https://bafybeid5opeldzkmm4lqn2545fzzhi4dfahyzi646652z6mvhhgwx7eiey.ipfs.w3s.link/variante_logo2.png'
                        alt="Logo KoiDevs" 
                        width={110}
                        className="inline-block"/><span className="hidden lg:inline lg:font-overlock lg:text-3xl lg:font-semibold mt-4">Koi<span className="text-orange-button">Devs</span></span>
                    
                </Link>
                <div className="sm:ml-4 sm:mt-2 sm:flex-shrink-0">
                <NavLink to="/" className="hidden lg:text-lg lg:inline-flex lg:pb-3 font-medium lg:leading-6 text-footer-color transition duration-300 ease-in-out hover:text-orange-button mx-4">Home</NavLink>
                <NavLink to="/portfolio" className="text-lg inline-flex pb-3 font-medium leading-6 text-footer-color transition duration-300 ease-in-out hover:text-orange-button mx-4">Portafolio</NavLink>
                <NavLink to="/services" className="text-lg inline-flex pb-3 font-medium leading-6 text-footer-color transition duration-300 ease-in-out hover:text-orange-button mx-4">Servicios</NavLink>
                <NavLink to="/blog" className="text-lg inline-flex pb-3 font-medium leading-6 text-footer-color transition duration-300 ease-in-out hover:text-orange-button mx-4">Blog</NavLink>
                <NavLink to="/about" className="text-lg inline-flex pb-3 font-medium leading-6 text-footer-color transition duration-300 ease-in-out hover:text-orange-button mx-4">Sobre mí</NavLink>                              
                <Link to="/contact" 
                className="relative inline-flex lg:ml-6 items-center bg-orange-button rounded-lg text-lg group">
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-footer-color rounded-lg group-hover:text-gray-100">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-orange-button"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-footer-color group-hover:-rotate-180 ease"></span>
                    <span className="relative font-overlock font-bold md:text-xl text-sm">
                      Contáctame <span className="ml-2">
                      </span>

                      </span>
                    
                  </span>
                  <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-footer-color rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </Link>
        
                </div>
            </div>
            <div className="sm:hidden flex flex-wrap items-center justify-between flex-nowrap">
                <Link to="/" className="mt-2">
                    
                        <img src='https://bafybeid5opeldzkmm4lqn2545fzzhi4dfahyzi646652z6mvhhgwx7eiey.ipfs.w3s.link/variante_logo2.png'
                        alt="Logo KoiDevs" 
                        width={110}
                        className="inline-block"/><span className="font-overlock text-3xl font-semibold mt-4">Koi<span className="text-orange-button">Devs</span></span>
                    
                </Link>
                <div className="ml-4 mt-2 flex-shrink-0">
                <div className=" flex lg:hidden">
                    <button
                        id="columnab"
                        type="button"
                        className="-m-2.5 block pb-3 items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => {
                            setMobileMenuOpen(true);
                            document.getElementById("columnab").classList.add("text-transparent")
                        }}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                    </div>
                </div>
            </div>
            </div>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="w-full text-center">
            <button
              type="button"
              className="mt-28 rounded-md p-2.5 text-gray-700 transition duration-300 ease-in-out hover:text-orange-button"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("columnab").classList.remove("text-transparent")
            }}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className=" h-6 w-6" />
            </button>

            </div>
          </div>
            <div className="-my-1 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
                <NavLink to="/portfolio" className="text-lg block pb-3 text-center font-medium leading-6 text-footer-color transition duration-300 ease-in-out hover:text-orange-button mx-4">Portafolio</NavLink>
                <NavLink to="/services" className="text-lg block pb-3 text-center font-medium leading-6 text-footer-color transition duration-300 ease-in-out hover:text-orange-button mx-4">Servicios</NavLink>
                <NavLink to="/blog" className="text-lg block pb-3 text-center font-medium leading-6 text-footer-color transition duration-300 ease-in-out hover:text-orange-button mx-4">Blog</NavLink>
                <NavLink to="/about" className="text-lg block pb-3 text-center font-medium leading-6 text-footer-color transition duration-300 ease-in-out hover:text-orange-button mx-4">Sobre mí</NavLink>
                <NavLink to="/contact" className="text-lg block pb-3 text-center font-medium leading-6 text-footer-color transition duration-300 ease-in-out hover:text-orange-button mx-4">Contacto</NavLink>

              </div>
            </div>
            <Footer/>
        </Dialog.Panel>
      </Dialog>
              </div>
            </div>
        </nav>
        
    )
}

const mapStateToProp=state=>({

})

export default connect(mapStateToProp, {

}) (Navbar)