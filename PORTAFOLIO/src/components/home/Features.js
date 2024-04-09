import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Sitio de negocio',
    description: 'Si tu empresa necesita una página web para presentar información de sus servicios o productos',
  },
  { name: 'Sitio Personal', description: 'No hay límites, puedes compartir desde tu trabajo, hasta tus gustos e intereses' },
  {
    name: 'Blog',
    description: 'Si deseas crear una comunidad de una temática en especifico',
  },
  { name: 'Portafolio', description: 'Ya seas artista, desarrollador o diseñador, un portafolio es la maneja más profesional de compartir tu trabajo a posibles stakeholders' },
  { name: 'Landing Page', description: 'Promociona tu producto de manera compacta y sencilla, capta leads o suscripciones' },
  { name: 'Sitios de eventos', description: 'Proporciona información de tus eventos, vende entradas y registra asistentes' },
  { name: 'Tiendas online', description: 'Vende tus productos, ofrece un proceso de compra seguro y fácil para tus clientes' },
  { name: 'Sitios educativos', description: 'Comparte información educativa y ofrece todo tipo de cursos'},
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-orange-button">Todo lo que necesitas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">En un solo lugar</p>
          <p className="mt-4 text-lg text-gray-500">
            El primer paso para crear tu sitio web, es decidir para qué lo quieres.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-orange-button" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}