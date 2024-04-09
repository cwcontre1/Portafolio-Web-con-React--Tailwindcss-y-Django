import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import { connect } from "react-redux";
import { search_blog, search_blog_page } from "redux/actions/blog/blog";
import { useParams } from "react-router-dom";
import BlogList from "components/blog/search/BlogList";
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";


function Search({
    posts,
    count,
    next,
    previous,
    search_blog,
    search_blog_page
}){

    const params = useParams()
    const term = params.term

    useEffect(()=>{
        window.scrollTo(0,0)
        search_blog(term)
    },[])

    const regresar = () => {
    window.history.back()
    }

    return(
        <Layout>
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>KoiDevs | Blog</title>
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
            <div className="pt-24 mx-auto max-w-[1600px]">
                <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="mx-auto max-w-full my-10">
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
                    {/* Content goes here */}
                    <BlogList posts={posts&&posts} get_blog_list_page={search_blog_page} term={term} count={count&&count}/>
                    </div>
                </div>
            </div>
                <Footer/>
        </Layout>
    )
}
const mapStateToProps=state=>({
    posts: state.blog.filtered_posts,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,

})

export default connect(mapStateToProps,{
    search_blog,
    search_blog_page
}) (Search)