import { Link } from "react-router-dom"

export default function CTA(){
return (
<div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Deseas contratar mis servicios?</span>
          <span className="block text-orange-button">¡Déjame saber lo que necesitas!</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                <span className="mr-1">Contáctame</span>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            {/* <a
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Learn more
            </a> */}
            <Link
                to="/about"
                className="inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-footer-color shadow-sm transition duration-300 ease-in-out hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-footer-button focus:ring-offset-2">
                <span className="mr-1">Sobre Mí</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
)}