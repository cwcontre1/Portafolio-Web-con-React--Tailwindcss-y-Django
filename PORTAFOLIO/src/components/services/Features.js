import { BookOpenIcon } from "@heroicons/react/24/outline"

const requirements = [
  {
    name: 'Análisis y definición de la estrategia',
    description: 'Antes de empezar, evaluemos las necesidades de tu negocio y los objetivos del proyecto',
  },
  {
    name: 'Levantamiento de requerimientos',
    description: 'Una vez sepamos qué tipo de desarrollo y qué tecnologías debemos usar, pasemos a redactar una lista de requerimientos del sistema',
  },
  { name: 'Diseño de pieza', description: '¡Ya sabes lo que quieres y cómo lo quieres! Ahora pasemos a modelar y diseñar el requerimiento' },
  { name: 'Desarrollo de pieza', description: '¡Hora de materializarlo! Con el diseño y el requerimiento listo, es hora de empezar a desarrollar tu servicio'},
  { name: 'Publicación y SEO', description: '¡Todo listo! Si estás satisfecho con tu producto, es hora de publicarlo para el uso de tu empresa o visualización en la web'},  
]



export default function Features() {
  return (
    <div>
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 pb-8 px-4 sm:px-6 lg:py-24 lg:pb-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Consultoría</h2>
          <p className="mt-4 text-lg text-gray-500">
            ¿Aún no tienes una idea clara de cómo llevar a cabo el posicionamiento de tu negocio o emprendimiento? 
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {requirements.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <BookOpenIcon className="absolute h-6 w-6 text-orange-button" aria-hidden="true" />
                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
        <p id="desarrollo" className="mb-12"/>
      </div>
    </div>
    </div>
  )
}