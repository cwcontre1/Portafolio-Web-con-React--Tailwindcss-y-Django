import { connect } from "react-redux";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import { Link, useParams } from "react-router-dom";
import {useEffect} from 'react'
import { get_blog } from "redux/actions/blog/blog";
import moment from "moment";
import DOMPurify from 'dompurify'
import { Helmet } from "react-helmet-async";
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'


function PostDetail({
    get_blog,
    post
}){

    const params = useParams()
    const slug = params.slug
    
    useEffect(()=>{
        window.scrollTo(0,0)
        get_blog(slug)
    },[])

    const regresar = () => {
        window.history.back()
    };

    return(
        <Layout>
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>KoiDevs | Post: {slug}</title>
                <meta name="title" content="KoiDevs" />
                <meta name="description" content="Sección de Blog de KoiDevs, para que veas un poco mi trabajo y mis intereses." />
                <meta name="keywords" content="desarrollo web, creacion de pagina web, desarrollo software, analisis, documentacion, react, django, marketing digital" />
                <meta name="robots" content="all" />
                <link rel="canonical" href="https://www.koidevs.com/" />
                <meta name="author" content="Wilson Contreras" />
                <meta name="publisher" content="Wilson Contreras" />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.koidevs.com/blog" />
                <meta property="og:title" content="KoiDevs" />
                <meta property="og:description" content="Sección de Blog de KoiDevs, para que veas un poco mi trabajo y mis intereses." />
                <meta property="og:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />
                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.koidevs.com/blog" />
                <meta property="twitter:title" content="KoiDevs" />
                <meta property="twitter:description" content="Sección de Blog de KoiDevs, para que veas un poco mi trabajo y mis intereses." />
                <meta property="twitter:image" content="https://i.ibb.co/HK1FFtV/variante-logo2.png" />
            </Helmet>
            <Navbar/>
            {
                post && post.slug === slug ?
                <div className="pt-24 mt-12 mx-auto max-w-[1600px]">
                <div className="relative bg-gray-200">
            <div className="absolute inset-0">
            <img
                className="h-full w-full object-cover"
                src={post.thumbnail}
                alt=""
            />
            <div className="absolute inset-0 bg-gray-200 mix-blend-multiply" aria-hidden="true" />
            </div>
            <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">{post.title}</h1>
            <div className="min-w-0 flex-1 p-4 pt-8">
                        <div className="">

                            <span className=" hover:text-orange-500  mx-1 font-medium text-gray-800 text-sm "><Link to={`/category/${post.category.slug}`}>{post.category.name}</Link></span> <span className="text-gray-300">&middot;</span> 
                            <span className="mt-2 ml-2 mr-1 font-medium text-gray-800 text-sm">{moment(post.published).format('LL')}</span> <span className="text-gray-300">&middot;</span>
                            <span className="mt-2 mx-2 font-medium text-gray-800 text-sm">{post.time_read} min Lectura</span> 
                            <p className="mt-4 text-lg font-regular text-gray-800 leading-8">{post.description}</p>
                        </div>
                    </div>
            </div>
        </div>

                <div className="relative overflow-hidden bg-white py-16">
            
            <div className="relative px-4 sm:px-6 lg:px-8">
                
            <div className="prose prose-lg max-w-6xl prose-indigo mx-auto mt-6 text-gray-500">
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content)}} />
                
                
            </div>
            </div>
                <nav className="border-t border-gray-200 px-4 mt-4 flex items-center justify-between sm:px-2">
                    <div className="-mt-px w-0 flex-1 flex">
                        <Link
                        onClick={()=>{regresar()}}
                        className="cursor-pointer border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        >
                        <ArrowLeftCircleIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        Regresar
                        </Link>
                    </div>
                </nav>
            </div>

                </div>
                :
                <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¡Oops!.
              <br />
              Parece que este Post no existe
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Regresa a la pestaña anterior y valida la información que ingresaste.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                onClick={()=>{regresar()}}
                className="rounded-md bg-orange-button px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 ease-in-out hover:bg-footer-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Regresar &#8634;
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src='https://bafybeia3eg42gz5zlqli2c7ne67voejzodm6ixf4iefqqpxi4tlliz4lxe.ipfs.w3s.link/comingSoon.jpg'
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
            }
            <Footer/>
        </Layout>
    )
}

const mapStateToProps=state=>({
    post: state.blog.post
})

export default connect(mapStateToProps, {
    get_blog
})(PostDetail)