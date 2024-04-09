import { CodeBracketIcon } from "@heroicons/react/24/outline"

const features = [
  {
    name: 'Sitio web',
    description: 'Ya sea un sitio personal, de negocios, o un portafolio, un sitio web es una herramienta poderosa para posicionar tu marca',
  },
  {
    name: 'Software personalizado',
    description: 'Desde ERPs hasta formularios .NET, si requieres un desarrollador capacitado, puedo ayudarte',
  },
  { name: 'Aplicaciones Móviles', description: '¡Al alcance de tu mano!. Te ayudo con la creación de tu aplicación móvil para plataformas Android, IOS, React Native, entre otras.' },
  { name: 'Desarrollo de firmware', description: 'Permite que mis estudios en Ingeniería electrónica te apoyen para la creación de software ejecutable en microcontroladores y microprocesadores.' },
]

export default function Desarrollo() {
    return (
      <div>
      <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mt-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Desarrollo</h2>
          <p className="mt-4 text-lg text-gray-500">
            ¡Ya lo tienes! Ahora definamos qué herramienta requieres. 
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CodeBracketIcon className="absolute h-6 w-6 text-orange-button" aria-hidden="true" />
                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tecnologías y herramientas
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Dependiendo de cada necesidad, requerimos del uso de herramientas o tecnologías especializadas, estas son algunas con las que he trabajado.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src='https://bafybeih5onk7x3ub2uwyy6m2uxi63ccc4dtfqdmcr464id7rihzh7ygchu.ipfs.w3s.link/Arduino_Logo.png'
                  alt="arduino"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img className="max-h-12" src='https://bafybeicuptyi7zijmtmev3bla2xkbk23xuon6zsseitls26m3uosf72gti.ipfs.w3s.link/Angular_Logo.png' alt="angular" />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img className="max-h-12" src='https://bafybeibljkmmxgcyv4b2ebui7w4j67ngixj5fjejqbzq3eoa4ycynbriiq.ipfs.w3s.link/Django_logo.png' alt="django" />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src='https://bafybeie2iwhemdrbwpcuvh4kbhmylpz6zrp7fp7e6kekx4gejczac5wu6i.ipfs.w3s.link/flask_logo.png'
                  alt="flask"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src='https://bafybeig2adajqyhnfvdyzyrgtvc75kf56eu3jmks7yzplaty5vueiihqli.ipfs.w3s.link/net_logo.svg'
                  alt=".net"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src='https://bafybeie6kt5pes5h7ghtlpwwzupix5a4koum2ajk5tgw72wdbpzqskhs44.ipfs.w3s.link/Odoo-Logo.svg'
                  alt="odoo"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src='https://bafybeiggbjfsh7axms3vnzy623k4lrh6t5kkg4qnqnjqfhay5ngdzrl4pu.ipfs.w3s.link/pyside.png'
                  alt="pyside"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src='https://bafybeiaaekpiernanytlvvqmparyjs3srzhbooass6aalwky744wq2ghke.ipfs.w3s.link/react_logo.png'
                  alt="react"
                />
              </div>
              <div id="documentacion" className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src='https://bafybeiflp674dpvtwsa4gv4u2cw6n3i76z4n4nfqbrm2a5cquj6c3qj3s4.ipfs.w3s.link/flutter_logo.png'
                  alt="react"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
  