import Layout from "hocs/layout/Layout"
import { connect } from "react-redux"
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from "react";
import { check_authenticated, load_user, login, refresh, reset_password } from "redux/actions/auth/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function ResetPassword({
    reset_password,
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
        email: ''
    });

    const { 
        email
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const navigate = useNavigate()

    const onSubmit = e => {
        e.preventDefault();
        reset_password(email)
        navigate('/')
    }

    if(isAuthenticated){
        return <Navigate to='/dashboard'/>
    }
  

    return(
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-[120px] w-auto"
              src='https://bafybeia5pti4sdhwohrhrduop7sqv7ao7rsfcnimpnaon6wm5ujiyxqvwy.ipfs.w3s.link/koidevs-transparent.png'
              alt="koidevs"
            />
          </div>
          <form onSubmit={e=>{onSubmit(e)}} className="mt-8 space-y-6" action="#" method="POST">
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
                  placeholder="Correo electrónico"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              

              <div className="text-sm">
                <span className="">Ya tienes una cuenta? </span>
                <Link to="/" className="font-medium text-orange-600 hover:text-orange-500">
                   Conectarse
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon className="h-5 w-5 text-white group-hover:text-gray-100" aria-hidden="true" />
                </span>
                Enviar correo
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
    reset_password,
    refresh,
    check_authenticated,
    load_user,
}) (ResetPassword)