import Layout from "hocs/layout/Layout"
import { connect } from "react-redux"
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from "react";
import { check_authenticated, load_user, login, refresh, reset_password_confirm } from "redux/actions/auth/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

function ResetPasswordConfirm({
    reset_password_confirm,
    isAuthenticated,
    loading,
    refresh,
    check_authenticated,
    load_user,
}){

    const params = useParams()
    const uid = params.uid
    const token = params.token

    useEffect(()=>{
        isAuthenticated ? <></>:
        <>
        {refresh()}
        {check_authenticated()}
        {load_user()}
        </>
    },[])

    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { 
        new_password,
        re_new_password
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const navigate = useNavigate()

    const onSubmit = e => {
        e.preventDefault();
        reset_password_confirm(uid, token, new_password, re_new_password)
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
              alt="Koidevs"
            />
          </div>
          <form onSubmit={e=>{onSubmit(e)}} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Contraseña
                </label>
                <input
                  name="new_password"
                  value={new_password}
                  onChange={e=>onChange(e)}
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                  placeholder="Nueva contraseña"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Repetir contraseña
                </label>
                <input
                  name="re_new_password"
                  value={re_new_password}
                  onChange={e=>onChange(e)}
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                  placeholder="Repite la nueva contraseña"
                />
              </div>
            </div>

            

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white group-hover:text-gray-100" aria-hidden="true" />
                </span>
                Cambiar contraseña
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
    reset_password_confirm,
    refresh,
    check_authenticated,
    load_user,
}) (ResetPasswordConfirm)