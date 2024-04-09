const incentives = [
    {
      name: 'Desarrollo tu sitio',
      description: "El desarollo de software y web no sólo es redactar código, mis años de experiencia como analista y documentador te asegurarán la mayor especificidad en tu desarrollo/sitio web, además de contar con las mejores prácticas de desarrollo ¡Para que tu sitio sea más rápido y seguro!",
      icon: (props) => (
          <svg className="h-14 w-14 text-footer-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
      ),
    },
    {
      name: '¡Que todos te vean!',
      description: "Tu desarrollo incluirá hosting de notable rendimiento, con SSL y CDN, además de tu dominio personalizado. Estará accesible y visible las 24 horas del día, los 7 días de la semana, las 4 semanas del mes, los 12 meses del año (podríamos seguir...).",
      icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-14 h-14">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>

      ),
    },
    {
      name: 'Funcionando 24/7',
      description:
        "Tu desarrollo contará con mantenimiento en todo el periodo que incluya tu plan de servicios, para que tu sitio se mantenga operando de la mejor manera",
    icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-14 h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
          </svg>

    ),
      },
    {
      name: '¡Siempre en tendencia!',
      description:
        "¿Necesitas quien gestione el contenido de tu página? ¡Déjamelo a mí! ",
    icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-14 h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
          </svg>


    ),
      },
    ]
  
  export default function Incentives() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                ¡Conoce un poco de mí!
              </h2>
              <p className="mt-4 text-gray-500">
                ¿Qué tal? Mi nombre es Wilson, soy Ingeniero Electrónico de la Universidad Central, especialista en
                Ingeniería de Software. Documentador, analista y apasionado al desarrollo de software y el
                desarrollo web. Este portafolio pretende mostrarte la manera en que trabajo y ofrecerte mis
                servicios (Ya seas parte de una empresa o que quieras empezar tu propio emprendimiento). 
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-2">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <incentive.icon/>
                  </div>
                  <div className="mt-2 sm:mt-0 sm:ml-6 lg:mt-2 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
