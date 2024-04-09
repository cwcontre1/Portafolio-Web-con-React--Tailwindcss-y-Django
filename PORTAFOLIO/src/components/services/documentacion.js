import { PaperClipIcon } from '@heroicons/react/24/outline'


const features = [
  {
    name: 'Declaración de trabajo (SOW)',
    description: 'Aquí, definimos el alcance del proyecto, los objetivos, entregables y responsabilidades de todos los involucrados',
  },
  { name: 'Project Plan', description: 'En el plan de proyecto definimos aspectos como el cronograma, la estimación en horas, el presupuesto y otros aspectos.' },
  {
    name: 'Requerimientos del sistema',
    description: 'En el levantamiento de requerimientos, describimos todos los requisitos y criterios de aceptación del sistema.',
  },
  { name: 'Casos de uso', description: 'Debemos tener en cuenta todos los escenarios de uso del software y cómo los usuarios interactúan con él. Todo esto lo detallaremos en el documento de casos de uso.' },
  { name: 'Documento de arquitectura (SAD)', description: 'Desde lo más básico hasta lo más técnico, el SAD nos permitirá estructurar y diseñar el sistema.' },
  { name: 'Manual de usuario', description: 'Nadie nace aprendido, por lo que un manual de uso de la herramienta para cualquier usuario es indispensable.' },
  { name: 'Manual técnico', description: '¿Requerimos delegar el mantenimiento a alguien más? Para eso necesitamos un manual técnico que detalle la manera en la que el sistema está construido y como el desarrollador puede interactuar con él para llevar a cabo los cambios y ajustes necesarios' },
]

export default function Documentacion() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Documentación</p>
          <p className="mt-4 text-lg text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <PaperClipIcon className="absolute h-6 w-6 text-orange-button" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <span id='gestion'></span>
        </div>
      </div>
    </div>
  )
}