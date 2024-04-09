import { CalendarDaysIcon, PuzzlePieceIcon, ClipboardDocumentListIcon, GlobeAltIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const features = [
  {
    name: 'Consultoría',
    description:
      '¿Aún no sabes por dónde empezar o simplemente no estás seguro si requieres un sitio web? ¡Contáctame para que pueda asesorarte!.',
    icon: CalendarDaysIcon,
    enlace: "consultoria",
  },

  {
    name: 'Desarrollo',
    description:
      '¿Tienes ya tu idea pero no quien la construya?, ¡Puedo ayudarte con eso!. Como este sitio, desarrollaré tu proyecto o sistema según tus gustos, con la misma entrega y extrema atención al detalle.',
    icon: PuzzlePieceIcon,
    enlace: "desarrollo",
  },
  {
    name: 'Documentación',
    description: 'La documentación es indispensable tanto para conocer el camino para construir tu proyecto, como para cada etapa del ciclo de vida de este. Permite que mis años de experiencia en el área te faciliten esta tarea.',
    icon: ClipboardDocumentListIcon,
    enlace: "documentacion",
  },
  {
    name: 'Gestión de proyectos',
    description: 'Si tienes un equipo pero te falta un líder, ¡Puedo ayudarte!. Mis estudios en gestión de proyectos de TI y habilidades de comunicación y captación con stakeholders te ayudarán a proyectar a tu equipo.',
    icon: GlobeAltIcon,
    enlace: "gestion",
  },
]

export default function Header() {
  return (
    <div id='home' className="max-w-[1900px] mx-auto overflow-hidden bg-form-opacity py-12 sm:my-10 py-12 sm:py-6 border-transparent rounded-3xl shadow-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 pt-20 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-5xl font-bold tracking-tight text-footer-color sm:text-5xl">Mis Servicios</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt 
                    className="inline font-semibold text-gray-900 cursor-pointer transition duration-300 ease-in-out border-b-2 border-transparent hover:text-orange-button hover:border-orange-button"
                    onClick={() => window.scrollTo({
                              top: document.getElementById(feature.enlace).offsetTop,
                                behavior: 'smooth'
                              })}
                    >
                            <feature.icon className="absolute left-1 top-1 h-5 w-5 " aria-hidden="true" />
                            <span className=''>
                              {feature.name}
                            </span>
                    </dt>{' '}
                    <dd className="pt-2">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            
            src='https://bafybeibl5ukpdi5pktrno6ztoou5qyys4fe5vkedu5rhz33gslhb3rtncu.ipfs.w3s.link/servicesImg.jpg'
            alt="Product screenshot"
            className="w-[40rem] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 lg:mt-32 sm:w-[50rem] md:-ml-4 lg:-ml-0"
            // width={2000}
          />
          <span id="consultoria"/>
        </div>
      </div>
    </div>
  )
}