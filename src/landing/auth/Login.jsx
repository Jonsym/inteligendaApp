import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../layout';
import Modal from '../components/modal';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import validators from '../../helpers/validators';
import { SpinnerI } from '../../components/Icons';
import { FORGOT_PASSWORD, REGISTER,  } from '../../constants/paths';
import { useQuery } from '../../hooks/useQuery';
import { useEffect } from 'react';

const initialState = {email: "", password: ""};

const LoginPage = () => {

    let query = useQuery();

    const { Login, loading, error } = useAuth();

    const [showModal, setShowModal] = useState(false);

    const { form, handleChange } = useForm(initialState);

    const [invalidPayload, setInvalidPayload] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setInvalidPayload(null);

        if(!validators.isEmail(form.email)) {
            setInvalidPayload('Tu Gmail no es valido.');
            return;
        }

        if(validators.isEmpty(form.password)) {
            setInvalidPayload('Tu contraseña esta vacia.');
            return;
        }

        
        Login(form);

    }

    useEffect(() => {
        if(query.get('redirect') === "expired")
            setShowModal(true);
    }, [])

    return (
    <Layout>
        <div className="flex items-center justify-center py-20 lg:py-30 px-5 bg-gray-50">
            <div className="grid w-full max-w-2xl grid-cols-8 mx-auto overflow-hidden bg-white rounded shadow-sm">
                
                <div className="col-span-2 overflow-hidden md:col-span-4">
                    <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" alt=""/>
                </div>

                <div className="col-span-6 p-5 md:col-span-4">
                    <div className="mb-4 text-center">
                        <h1 className="mb-2 text-3xl font-bold text-black">Inicia Sesión</h1>
                        <p className="text-gray-500">Empieza a organizar tus actividades.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="text-left">
                        <div className="mb-4">
                            <input placeholder="Ingresa tu Gmail" className="field-control" type="email" name="email" onChange={handleChange} disabled={loading}/>
                        </div>
                        <div className="mb-4">
                            <input placeholder="Ingresa tu contraseña" className="field-control" type="password" name="password" onChange={handleChange} disabled={loading}/>
                        </div>
                        {
                            error && <div className="text-red-500 bg-red-100 alert">{error}</div>
                        }
                        {
                            invalidPayload && <div className="text-red-500 bg-red-100 alert">{invalidPayload}</div>
                        }
                        <div className="mb-4 text-right">
                            <Link className="font-normal text-indigo-500" to={FORGOT_PASSWORD}>Has olvidado tu contraseña?</Link>
                        </div>
                        <div className="mb-4">
                            <button type="submit" 
                            className={`button is-primary w-full rounded-lg ${loading ? 'flex space-between justify-center':'block '}`}
                            disabled={loading}>
                                { loading && <SpinnerI/>}
                                {loading ? 'Accediendo...':'Inicia Sesión'}
                            </button>
                        </div>
                        <div className="mb-4 text-center text-gray-500">
                            No te has registrado? <Link className="font-normal text-indigo-500" to={REGISTER}>Registrate ahora!</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        {
            showModal && (
                <Modal onClose={() => setShowModal(false)} title="Session expired">
                    Tu sesión anterior ha expirado. Porfavor, <strong className="underline">Inicia Sesión</strong> otra vez.
                </Modal>
            )
        }

    </Layout> 
     );
}
 
export default LoginPage;