import { CalendarDaysIcon, PuzzlePieceIcon, ClipboardDocumentListIcon, GlobeAltIcon } from '@heroicons/react/20/solid'
import { FaceSmileIcon, HandRaisedIcon} from "@heroicons/react/24/outline"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='w-auto'>
    <div id='home' className="max-w-[1900px] mx-auto overflow-hidden bg-form-opacity py-12 sm:my-10 py-12 sm:py-6 border-transparent rounded-3xl shadow-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 pt-20 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-5xl font-bold tracking-tight text-footer-color sm:text-5xl">Mi Portafolio</p>
              <p className="mt-6 text-lg leading-8 text-footer-color">¡Hola! <span><HandRaisedIcon className='inline w-4'/><FaceSmileIcon className='inline w-5'/></span> Aquí encontrarás mis trabajos y proyectos en los que he participado hasta ahora, incluyendo este. ¡Ayúdame a extenderlo!</p>
              <p className="mt-6 text-lg leading-8 font-bold text-footer-color">¿Te interesa saber más?</p>
               <div className="mt-10 flex items-center justify-center gap-x-8 sm:gap-x-16 lg:justify-start">
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-md border border-transparent bg-orange-button px-1 sm:px-3 py-3 text-base font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-footer-color focus:outline-none focus:ring-2 focus:ring-footer-button focus:ring-offset-2">
                    <span className="mr-1">Contacta conmigo</span>
                  </Link>
                  <Link 
                    to="/about"
                    className="inline-flex items-center rounded-md border border-transparent bg-orange-button px-1 sm:px-3 py-3 text-base font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-footer-color focus:outline-none focus:ring-2 focus:ring-footer-button focus:ring-offset-2">
                    <span className="mr-1">Conóceme mejor</span>
                  </Link>
            </div>
            </div>
          </div>
          <img
            
            src='https://bafybeig6ao6ske6mqxwrfs422jh4e6qqpke4w44didd5fuwx3tqsc3243a.ipfs.w3s.link/portfolioImg.jpg'
            alt="Product screenshot"
            className="w-[48rem] max-w-[800px] rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
          <span id="consultoria"/>
        </div>
      </div>
    </div>
    </div>
  )
}