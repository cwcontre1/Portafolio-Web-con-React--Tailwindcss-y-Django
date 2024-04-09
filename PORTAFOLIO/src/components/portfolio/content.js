const stats_idu = [
    { label: 'Inicio', value: 'Sept - 2021' },
    { label: 'Proyectos', value: '+20' },

  ]

const stats_dipzo = [
    { label: 'Inicio', value: 'Mar - 2021' },
    { label: 'Proyectos', value: '3' },

  ]
  
  export default function Example() {
    return (
      <div className="relative bg-white py-16 sm:py-24">
        <h2 className="mb-6 text-5xl font-bold text-center tracking-tight text-footer-color sm:text-5xl">Empleos</h2>
        {/* Sección 1 */}
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 mb-12">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial*/}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src='https://bafybeib6in3s4h7kgdmyncpnmu34nhemg6eutkew4d5xydppkkgcnxrio4.ipfs.w3s.link/IDUJob.jpeg'
                  alt="IDU"
                />
                <div className="absolute inset-0 bg-idu-color-tp mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-idu-color-bt via-idu-color-md opacity-90" />
                <div className="relative px-8">
                  <div>
                    <img
                      className="h-12"
                      src='https://bafybeiafsfkvlrnqyli5h2zkgslz67dp7suckseafhhjmiysmi4h6szuii.ipfs.w3s.link/logo_idu2.png'
                      alt="logoIdu"
                    />
                  </div>
                  <blockquote className="mt-6">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <p className="relative">
                        Contratista Grupo I+D+I STRT.
                      </p>
                    </div>
  
                    <footer className="mt-4">
                      <p className="text-base font-bold text-gray-50">Bogotá, Colombia</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Contenido */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Instituto de Desarrollo Urbano de Bogotá
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg text-justify">
                  El IDU es una entidad del Distrito Capital de Bogotá, Colombia, encargada de la planificación, gestión y ejecución de proyectos de infraestructura vial y de espacio público. 
                  Su objetivo es contribuir al desarrollo urbano sostenible de la ciudad y mejorar la calidad de vida de sus habitantes.
                </p>
                <p className="text-lg text-justify leading-7">
                  Posterior a la culminación de mis estudios como Especialista en Ingeniería de Software, tuve la oportunidad de ingresar a esta
                  gran institución, para apoyar al equipo de Investigación, desarrollo e Innovación con multiples proyectos de software.
                </p>
              </div>
            </div>
  
            {/* Stats */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats_idu.map((stat_idu) => (
                  <div key={stat_idu.label} className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">{stat_idu.label}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat_idu.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a href="https://www.idu.gov.co/" target="_blank" rel="noreferrer" className="text-base font-medium text-orange-button transition duration-300 ease-in-out hover:border-b-2 hover:border-orange-button">
                  Conoce un poco más acerca del IDU
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Sección 2 */}
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Contenido */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Dipzo CO
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg text-justify">
                  Durante mi tiempo en Dipzo Co., apoyé en documentación y análisis a Dipzo CO, un equipo capacitado y eficiente que se dedica a brindar 
                  soluciones tecnológicas a medida para las necesidades de cada cliente. Su enfoque integral abarca desde el análisis 
                  inicial hasta la implementación final del proyecto, asegurando una experiencia completa y personalizada. Con amplia 
                  experiencia en desarrollo de software, aplicaciones web y móviles, sitios web y marketplaces, Dipzo CO ha impulsado el 
                  éxito de una gran variedad de proyectos.
                </p>
                <p className="text-lg text-justify leading-7">
                  Mi experiencia en Dipzo Co. me permitió desarrollar mis habilidades, trabajar en equipo con profesionales altamente calificados, 
                  aprender sobre las últimas tecnologías y brindar soluciones que impactan positivamente en los clientes.
                </p>
              </div>
            </div>
  
            {/* Stats */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats_dipzo.map((stat_dipzo) => (
                  <div key={stat_dipzo.label} className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">{stat_dipzo.label}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat_dipzo.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a href="https://dipzo.net/" target="_blank" rel="noreferrer" className="text-base font-medium text-orange-button transition duration-300 ease-in-out hover:border-b-2 hover:border-orange-button">
                  Conoce un poco más acerca de Dipzo CO
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:left-0 lg:w-screen">
              <div className="absolute inset-y-0 left-1/2 w-full rounded-l-3xl bg-gray-50 lg:left-72" />
              <svg
                className="absolute top-8 right-1/2 -ml-3 lg:-left-8 lg:right-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial */}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src='https://bafybeiec5uioy2pi5dzioaqbscncihh5lldjfq5tmwjjg4krxjucdzjlya.ipfs.w3s.link/centro-historico.jpg'
                  alt="centroBogota"
                />
                <div className="absolute inset-0 bg-sky-300 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-500 via-sky-400 opacity-90" />
                <div className="relative px-8">
                  <div>
                    <img
                      className="h-8"
                      src='https://bafybeidrj3kkr5r4tum4ddxpm2f24ood3hvg7wix2ourijhxphuqrfdmmu.ipfs.w3s.link/logo_dipzo.png'
                      alt="Dipzo"
                    />
                  </div>
                  <blockquote className="mt-6">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <p className="relative">
                        Documentador y analista de Software.
                      </p>
                    </div>
  
                    <footer className="mt-4">
                      <p className="text-base font-bold text-gray-50">Bogotá, Colombia</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
  