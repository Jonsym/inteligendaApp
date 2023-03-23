import React from 'react'
import { Link } from 'react-router-dom';
import { LOGIN, HOME } from '../../constants/paths';

const Footer = () => {
    return ( 
    <footer className="bg-white text-gray-600 py-12 xl:pb-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 mb-12 lg:mb-16">
          <div class="mx-w-10 text-4xl font-bold capitalize text-gray-900 flex items-center">Inteligenda</div>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8">
          <div>
            <h5 className="text-xl font-bold text-gray-700">Vixo</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <Link to={HOME} className="text-base hover:text-gray-500">Inteligenda</Link>
                </li>
                <li>
                  <Link to={HOME} className="text-base hover:text-gray-500">Equipo</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className="text-xl font-bold text-gray-700">Contacto</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-base hover:text-gray-500">Contactanos</a>
                </li>
                <li>
                  <a href="#" className="text-base hover:text-gray-500">Ayuda</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className="text-xl font-bold text-gray-700">Software</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-base hover:text-gray-500">Recursos</a>
                </li>
                <li>
                  <a href="#" className="text-base hover:text-gray-500">JavaScript</a>
                </li>
                <li>
                  <a href="#" className="text-base hover:text-gray-500">Tailwind</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className="text-xl font-bold text-gray-700">Legal</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-base hover:text-gray-500">Terminos y condiciones</a>
                </li>
                <li>
                  <a href="#" className="text-base hover:text-gray-500">Seguridad</a>
                </li>
                <li>
                  <a href="#" className="text-base hover:text-gray-500">Privacidad</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 flex flex-col md:flex-row justify-between items-center space-y-4 mt-16 lg:mt-20">
          <div className="text-sm space-y-4 md:space-y-1 text-center md:text-left">
            <p>&copy;2023 Vixo. All rights reserved. | All rights reserved</p>
          </div>
          <Link to={LOGIN} className="inline-block bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-700 font-semibold rounded-lg py-4 px-5 lg:px-8 text-white md:transform md:-translate-y-2">Registrate</Link>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 flex flex-col md:flex-row justify-between items-center space-y-4 mt-8 lg:mt-12">
          <nav className="flex flex-wrap justify-center space-x-6"> 
            <a href="#" className=" text-sm hover:text-gray-700 mb-2">Vixo</a>
            <a href="#" className=" text-sm hover:text-gray-700 mb-2">Contacto</a>
            <a href="#" className=" text-sm hover:text-gray-700 mb-2">Software</a>
            <a href="#" className=" text-sm hover:text-gray-700 mb-2">Legal</a>
            <a href="#" className=" text-sm hover:text-gray-700 mb-2">Inteligenda</a>
          </nav>
        </div>
    </footer>
     );
}
 
export default Footer;