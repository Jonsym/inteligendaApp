import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import { TasksContext } from '../context/TasksContext';

const Header = () => {

    const { Logout } = useAuth();
    
    const history = useHistory();

    const { TaskInitialState, setComposing, setSelected, filter, setFilter } = useContext(TasksContext);

    const handleAddTask = () => {
        setSelected(TaskInitialState);
        setComposing(true);
        history.push("/task/new")
    }

    return ( 
        <div className="fixed top-0 z-20 flex items-center w-full px-3 py-4 bg-white border-b-2 border-gray-300 justify-streetch">
            <div className="w-1/3 px-10 border-r-2 lg:w-1/4 lg:px-4">
                <Link to="/" className="block font-bold tracking-wider text-gray-500 uppercase hover:text-gray-600">
                    <span className="sm:hidden md:block">Inteligenda</span>
                    <span className="sm:block md:hidden">IG</span>
                </Link>
            </div>
            <div className="w-1/3 px-8 lg:w-1/4 lg:px-4">
                <div className="flex items-center">
                    <span className="block mr-4">
                        <i className="text-lg font-bold text-gray-500 icons icon-magnifier"></i>
                    </span>
                    <input className="w-full px-3 py-2 text-gray-500 focus:outline-none" type="text" placeholder="Buscar..."/>
                </div>
            </div>
            <div className="w-1/3 px-8 lg:w-1/4 lg:px-4">
                <select value={filter} 
                onChange={e => setFilter(e.target.value)}
                className="px-3 py-2 text-lg font-bold border-2 border-white cursor-pointer focus:outline-none">
                    <option value="">Todas las actividades</option>
                    <option value="completed=false">Pendientes</option>
                    <option value="completed=true">Completadas</option>
                </select>
            </div>
            <div className="w-full px-8 text-right lg:px-4">
                <button onClick={() => handleAddTask()} type="button" className="py-2 mr-2 text-sm bg-blue-600 button focus:outline-none hover:bg-blue-700">Nueva actividad</button>
                <Link className="nav-item focus:outline-none hover:text-gray-600" to="/">Actividades</Link>
                <Link className="nav-item focus:outline-none hover:text-gray-600" to="/">Proyectos</Link>
                <button onClick={() => Logout()} type="button" className="nav-item focus:outline-none hover:text-gray-600">Cerrar Sesión</button>
            </div>
        </div>
     );
}
 
export default Header;