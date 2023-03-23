import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {  HOME } from '../../constants/paths';
import { SpinnerI } from '../../components/Icons';
import validators from '../../helpers/validators';
import authService from '../../services/auth.service';
import Layout from '../layout';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [invalidPayload, setInvalidPayload] = useState(null);
    
    const submit = () => {
        setLoading(true);
        authService.sendRecoveryEmail({email}).then(() => {
            setLoading(false);
            setSuccess(true);
            setEmail("");
        }).catch(e => {
            setLoading(false);
            setError(e.message);
        });
    }
    
    const handleSubmit = async (e) => {

        e.preventDefault();
        
        setInvalidPayload(null);

        if(!validators.isEmail(email)) {
            setInvalidPayload('Tu Gmail no es valido.');
            return;
        }

        submit();
    }
    return ( 
    <Layout>
        <div className="flex items-center justify-center py-20 lg:py-40 px-5 bg-gray-50">
            <div className="w-full max-w-sm p-5 mx-auto bg-white rounded shadow-md">
                <div className="mb-4 text-center">
                    <h1 className="mb-2 text-3xl font-bold text-black">Recuperar cuenta</h1>
                    <p className="text-gray-500">Te enviaremos un <u>enlace de recuperación</u>.</p>
                </div>
                <form onSubmit={handleSubmit} className="text-left">
                    <div className="mb-4">
                        <input value={email} placeholder="Ingresa tu Gmail" className="field-control" type="email" name="email" 
                        onChange={e => setEmail(e.target.value)}
                        disabled={loading}/>
                    </div>
                    
                    {
                        success && <div className="text-green-500 bg-green-100 alert">Hecho! Por favor, revisa tu inbox.</div>
                    }
                    {
                        error && <div className="text-red-500 bg-red-100 alert">{error}</div>
                    }
                    {
                        invalidPayload && <div className="text-red-500 bg-red-100 alert">{invalidPayload}</div>
                    }
                    <div className="mb-4">
                        <button type="submit" 
                        className={`button is-primary w-full rounded-lg ${loading ? 'flex space-between justify-center':'block '}`}
                        disabled={loading || success}>
                            { loading && <SpinnerI/>}
                            {loading ? 'Cargando...':'Recuperar cuenta'}
                        </button>
                    </div>
                    <div className="mb-4 text-right text-gray-500">
                        <Link className="font-normal text-indigo-500" to={HOME}>Atras</Link>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
     );
}

export default ForgotPassword;