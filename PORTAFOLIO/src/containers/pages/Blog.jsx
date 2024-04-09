import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog/blog";
import CategoriesHeader from "components/blog/CategoriesHeader";
import BlogList from "components/blog/BlogList";

function Blog({
    get_categories,
    categories,
    get_blog_list,
    get_blog_list_page,
    posts,
    count,
    next,
    previous,
}){

    useEffect(()=>{
        window.scrollTo(0,0)
        get_categories()
        get_blog_list()
        
    },[])


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
            <div className="pt-24">
                <CategoriesHeader categories={categories&&categories}/>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="mx-auto max-w-6xl my-10">
                    {/* Content goes here */}
                    <BlogList posts={posts&&posts} get_blog_list_page={get_blog_list_page} count={count&&count}/>
                    </div>
                </div>
            </div>
                <Footer/>
        </Layout>
    )
}
const mapStateToProps=state=>({
    categories: state.categories.categories,
    posts: state.blog.blog_list,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,

})

export default connect(mapStateToProps,{
    get_categories,
    get_blog_list,
    get_blog_list_page
}) (Blog)