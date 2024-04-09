import Layout from "hocs/layout/Layout"
import { connect } from "react-redux"
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from "react";
import { check_authenticated, load_user, login, refresh } from "redux/actions/auth/auth";
import { Link, Navigate } from "react-router-dom";

function Home({
    login,
    isAuthenticated,
    loading,
    refresh,
    check_authenticated,
    load_user,
}){

    useEffect(()=>{
        isAuthenticated ? <></>:
        <>
        {refresh()}
        {check_authenticated()}
        {load_user()}
        </>
    },[])

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { 
        email,
        password
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = e => {
        e.preventDefault();
        login(email, password)
    }

    if(isAuthenticated){
        return <Navigate to='/dashboard'/>
    }
  

    return(
        <>
            <div className="flex min-h-full max-w-[550px] bg-gray-50 rounded-lg shadow-1xl mx-auto my-5 items-center justify-center py-7 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-[120px] w-auto"
              src='https://bafybeia5pti4sdhwohrhrduop7sqv7ao7rsfcnimpnaon6wm5ujiyxqvwy.ipfs.w3s.link/koidevs-transparent.png'
              alt="Your Company"
            />
          </div>
          <form onSubmit={e=>{onSubmit(e)}} className=" space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Correo
                </label>
                <input
                  id="email-address"
                  name="email"
                  value={email}
                  onChange={e=>onChange(e)}
                  type="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={e=>onChange(e)}
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="text-sm">
                <a href="/forgot_password" className="font-medium text-orange-600 hover:text-orange-500">
                  Olvidaste la Contraseña?
                </a>
              </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md transition duration-300 ease-in-out border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 group-hover:text-gray-100" aria-hidden="true" />
                </span>
                Ingresa a KoiDevs Blogs
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
    )
}

const mapStateToProps=state=>({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading
})

export default connect(mapStateToProps,{
    login,
    refresh,
    check_authenticated,
    load_user,
}) (Home)