import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect, useState  } from "react"
import { Helmet } from 'react-helmet-async';
import { Switch } from '@headlessui/react'
import { Link } from "react-router-dom";
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";

function Contact(){
    
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
    const [enabled, setEnabled] = useState(false)

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
    });

    const { 
    name,
    email,
    subject,
    message,
    phone,
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if(enabled){
            setLoading(true);

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            const formData = new FormData()
            formData.append('name', name)
            formData.append('email', email)
            formData.append('phone', phone)
            formData.append('subject', subject)
            formData.append('message', message)

            const fetchData = async()=>{
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`,formData, config)
                if(res.status === 200){
                    setLoading(false);
                    setFormData({
                        name:'',
                        email:'',
                        subject:'',
                        message:'',
                        phone:'',
                    })
                    alert('Información enviada correctamente.')
                }else{
                    setLoading(false);
                    alert('Error enviando la información, intente nuevamente.')
                }
            }
            fetchData()

        }else{
            alert('Debes aceptar la politica de privacidad antes de continuar')
        }
    }

    return(
        <Layout>
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>KoiDevs | Contacto</title>
                <meta name="title" content="KoiDevs" />
                <meta name="description" content="Portafolio web de software y marketing digital, servicios de análisis, documentación, desarrollo de software y desarrollo web." />
                <meta name="keywords" content="desarrollo web, creacion de pagina web, desarrollo software, analisis, documentacion, react, django, marketing digital" />
                <meta name="robots" content="all" />
                <link rel="canonical" href="https://www.koidevs.com/" />
                <meta name="author" content="Wilson Contreras" />
                <meta name="publisher" content="Wilson Contreras" />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.koidevs.com/contact" />
                <meta property="og:title" content="KoiDevs" />
                <meta property="og:description" content="Portafolio web de software y marketing digital, servicios de análisis, documentación, desarrollo de software y desarrollo web." />
                <meta property="og:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />
                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.koidevs.com/contact" />
                <meta property="twitter:title" content="KoiDevs" />
                <meta property="twitter:description" content="Portafolio web de software y marketing digital, servicios de análisis, documentación, desarrollo de software y desarrollo web." />
                <meta property="twitter:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />
            </Helmet>
            <Navbar/>
            <div className="pt-28">
      <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-futter-color sm:text-3xl">Contáctame</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Si te convenció mi trabajo y quieres contratar mis servicios, no dudes en contactarme.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>KoiDevs</p>
                  <p>Bogotá, Colombia</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Whatsapp</dt>
                <a href="https://wa.me/573502886100" className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#25D366" className=" h-6 w-6 flex-shrink-0" aria-hidden="true" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                  {/* <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
                  <span className="ml-3 border-b border-transparent transition duration-300 ease-in-out hover:border-b hover:border-whatsapp-color">+57 (350) 288 6100</span>
                </a>
              </div>
              <div className="mt-3">
                <dt className="sr-only">LinkedIn</dt>
                <a href="https://www.linkedin.com/in/wilcon95" className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#0077b5" className="h-6 w-6 flex-shrink-0 text-gray-400" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                  <span className="ml-3 border-b border-transparent transition duration-300 ease-in-out hover:border-b hover:border-sky-600">wilcon95</span>
                </a>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Github</dt>
                <a href="https://github.com/cwcontre1" className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#1e1c1c" className="h-6 w-6 flex-shrink-0 text-gray-400" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                  <span className="ml-3 border-b border-transparent transition duration-300 ease-in-out hover:border-b hover:border-gray-800">cwcontre1</span>
                </a>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              ¿Quieres enviarme un Email?{' '}
              <a href="mailto:cwcontre1@gmail.com" className="font-medium text-footer-color underline">
                Enviar Correo
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form onSubmit={e=>onSubmit(e)} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Nombre completo
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={e=>onChange(e)}
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  value={email}
                  onChange={e=>onChange(e)}
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Email"
                />
              </div>

                <div>
                <label htmlFor="price" className="sr-only">
                    Teléfono
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">+</span>
                    </div>
                    <input
                    type="number"
                    name="phone"
                    value={phone}
                    required
                    onChange={e=>onChange(e)}
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-orange-button focus:ring-orange-button sm:text-sm"
                    placeholder="57 333 222 1100"
                    aria-describedby="price-currency"
                    />
                </div>
                </div>

              <div>
                <label className="sr-only">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  required
                  onChange={e=>onChange(e)}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Asunto"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  required
                  onChange={e=>onChange(e)}
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Mensaje"
                  defaultValue={''}
                />
              </div>

              <div>
              </div>
              <div className="px-4 py-5 sm:px-6">
                    <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                        <div className="grid-cols-12 ml-4 mt-2 flex">
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-orange-500' : 'bg-gray-300'}
                                col-span-3 relative inline-flex h-[32px] w-[72px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span
                                aria-hidden="true"
                                className={`${enabled ? 'translate-x-10' : 'translate-x-0'}
                                    pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                            <p className="col-span-9 ml-4 text-md font-regular leading-6 text-gray-600">
                                Si seleccionas esta opción, aceptas la <span className="text-blue-500"><Link to='/privacy'>Politica de privacidad</Link></span>.
                            </p>
                            
                        </div>
                        <div className="ml-4 mt-2 flex-shrink-0">
                            {
                                loading ?
                                <div
                                    className="relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                >
                                    <CircleLoader loading={loading} size={25} color="#ffffff"/>
                                </div>
                                :
                                <button
                                    type="submit"
                                    className="relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                >
                                    Enviar mensaje
                                </button>

                            }
                        </div>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
            </div>
               

                <Footer/>
        </Layout>
    )
}
export default Contact