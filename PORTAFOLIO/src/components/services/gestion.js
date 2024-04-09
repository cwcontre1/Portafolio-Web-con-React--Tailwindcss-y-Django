import { Link } from "react-router-dom"

export default function Gestion() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-100 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#0f172a" />
                <stop offset={1} stopColor="#0f172a" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-footer-color drop-shadow-3xl sm:text-4xl">
              Gestion y dirección de Proyectos de Software
            </h2>
            <p className="mt-6 text-lg leading-8">
              Requieres un líder para tu proyecto de TI, contáctame para poder ayudarte.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-transparent bg-orange-button px-5 py-3 text-base font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-footer-color focus:outline-none focus:ring-2 focus:ring-footer-button focus:ring-offset-2">
                <span className="mr-1">Contacto</span>
            </Link>
              <span 
                onClick={() => window.scrollTo({
                    top: document.getElementById("home").offsetTop,
                    behavior: 'smooth'
                })} 
                className="text-sm font-semibold leading-6 cursor-pointer text-footer-color transition duration-300 ease-in-out hover:text-orange-button">
                Regresa <span aria-hidden="true">&#10595;</span>
              </span>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src='https://bafybeih2ojjfg5w4ythkrnwc5hmvacddddoykx32ckgkskzbs2lh44zsky.ipfs.w3s.link/gestionProyectos.jpeg'
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
}