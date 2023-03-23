import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { LOGIN } from '../../constants/paths';
import Modal from './modal';

import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Inteligenda es donde',
    description:
      'Podras administrar tus actividades laborales y academicas.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Visualizar tus actividades',
    description:
      'De manera rapida y a la mano.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Personalizar tu espacio',
    description:
      'Tener un espacio para ti es nuestra prioridad. Asi que te demos herramientas para darle vida a tu espacio en Inteligenda.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600"></h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Que es Inteligenda?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Te mostramos todo lo que necesitas saber sobre Inteligenda y lo que podras hacer dentro de ella. 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                       <span aria-hidden="true"></span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

 