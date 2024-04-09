import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { connect } from "react-redux"
import {motion} from 'framer-motion'

import Sidebar from 'components/navigation/Sidebar'
import {
    Bars3Icon,
    XMarkIcon,
    CheckIcon
  } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { check_authenticated, load_user, logout, refresh } from 'redux/actions/auth/auth'
import Layout from 'hocs/layout/Layout'

function Dashboard({
    check_authenticated,
    isAuthenticated,
    user,
}){

    useEffect(()=>{
        check_authenticated()
    },[])


    return(
        <Layout>
            <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ¡Hola {user&&user.first_name}!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En el momento la sección de "Página principal" o "Dashboard" se encuentra en
              desarrollo. Esta contará con algunos datos estadísticos sobre tus posts.
              Promedio de Posts a la semana, promedio de tiempos de lectura de tus posts, ¡Y más!
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Por ahora, ve a la sección "Crea un Post" y redacta uno bueno para el portafolio.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

        </Layout>
    )
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
})

export default connect(mapStateToProps,{
    check_authenticated,
}) (Dashboard)