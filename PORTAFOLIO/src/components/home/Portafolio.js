const posts = [
    {
      title: 'Instituto de Desarrollo Urbano',
      href: '#',
      category: { name: '', href: '' },
      description:
        'He trabajado como Documentador y analista de Software, para desarrollos de uso interno de la entidad. Participando en más de 20 proyectos he logrado mejorar mi capacidad de adaptabilidad a cualquier problema o situación presentada.',
      date: 'Desde: sept 2021',
      datetime: '2020-03-16',
      imageUrl: 'https://bafybeiheb6g44wxwdzxfypolfnahqzedqsk3mwdhfpatoa3gpq77e4w5gu.ipfs.w3s.link/logo-idu.jpeg',
      readingTime: '6 min',
      cargo: {
        name: 'Contratista I+D+I STRT',
        href: '#',
        },
    },
    {
      title: 'Dra. WenVet - Medicina Veterinaria',
      href: '#',
      category: { name: 'Acesso', href: '/' },
      description:
        'En la actualidad, posicionar tu trabajo requiere más que un perfil en Instagram, WenVet es el portafolio web de Wendy Contreras, una comprometida médica veterinaria que disfruta de su profesión y desea llevarla a otro nivel.',
      date: 'En construcción...',
      datetime: '2020-03-10',
      imageUrl: 'https://bafybeicwgrmcytt7ugrqxpk2dfygqvo34srmxakmtebkeqtpxfayc4kjbu.ipfs.w3s.link/wenvetHeader.png',
      readingTime: '4 min',
      cargo: {
        name: 'Desarrollo web',
        href: '#',
        },
    },
    {
      title: 'Catálogo de productos',
      href: '#',
      category: { name: 'Acceso', href: '/' },
      description:
        'En ocasiones, el mercado del retail requiere versatilidad, para ajustarse a cualquier tipo de cambios, desde monetarios, hasta de stock. Este portafolio de productos le permite al usuario, gestionar el contenido y los precios de los productos que ofrece.',
      date: 'En construcción...',
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      cargo: {
        name: 'Desarrollo web',
        href: '/',
        },
    },
  ]
  
  export default function Portafolio() {
    return (
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mis trabajos</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              ¡Echa un vistazo rápido a algunos de mis trabajos en el área!
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-orange-button">
                      <a href={post.category.href} className="border-b border-transparent transition duration-300 ease-in-out hover:border-orange-button">
                        {post.category.name}
                      </a>
                    </p>
                      <p className=" mt-2 text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <span className="sr-only">{post.cargo.name}</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                          <span>{post.cargo.name}</span>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time>{post.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }