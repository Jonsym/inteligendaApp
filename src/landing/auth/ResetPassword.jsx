import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../layout';
import { useQuery } from '../../hooks/useQuery';
import validators from '../../helpers/validators';
import { SpinnerI } from '../../components/Icons';
import authService from '../../services/auth.service';
import { FORGOT_PASSWORD, HOME, LOGIN } from '../../constants/paths';

const ResetPassword = () => {

    let query = useQuery();

    const [validToken, setValidToken] = useState("unset");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [invalidPayload, setInvalidPayload] = useState(null);
    
    const submit = () => {
        setLoading(true);
        authService.recoverPassword({ password },query.get("token")).then(() => {
            setLoading(false);
            setSuccess(true);
            setPassword("");
            setConfirm("");
        }).catch(e => {
            setLoading(false);
            setSuccess(false);
            setError(e.message);
        });
    }
    
    const handleSubmit = async () => {
        
        setInvalidPayload(null);

        if (!validators.password.Length(password)) {
            setInvalidPayload('Tu contraseña debe tener al menos 8 caracteres.');
            return;
        }

        if (confirm !== password) {
            setInvalidPayload("Tu contraseña no coincide.");
            return;
        }

        submit();
    }

    const checkToken = () => {
        setLoading(true);
        authService.checkToken(query.get("token")).then(() => {
            setValidToken("valid");
            setLoading(false);
        }).catch((e) => {
            setValidToken("invalid");
            setLoading(false);
            setError(e.message)
        });
    }

    useEffect(() => {
        console.log()
        checkToken();
    }, [])
    return ( 
        <Layout>
        <div className="flex items-center justify-center py-20 lg:py-40 px-5 bg-gray-50">
            <div className="w-full max-w-sm p-5 mx-auto bg-white rounded shadow-md">
                <div className="mb-4 text-center">
                    <h1 className="mb-2 text-3xl font-bold text-black">Contraseña recuperada</h1>
                    <p className="text-gray-500">Ingresa tu <u>nueva contraseña</u> para recuperar tu cuenta.</p>
                </div>

                {
                    validToken === "valid" && (

                        <>
                            {
                                !success && (

                                    <>
                                    <div className="mb-4">
                                        <label htmlFor="password">Nueva contraseña</label>
                                        <input className="field-control" type="password" name="password" onChange={e => setPassword(e.target.value)} disabled={loading}/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password">Confirmar contraseña</label>
                                        <input className="field-control" type="password" name="confirm" onChange={e => setConfirm(e.target.value)} disabled={loading}/>
                                    </div>
                                    </>

                                )
                            }
                            
                            {
                                success && <div className="text-green-500 bg-green-100 alert">Hecho! Ya puedes <Link className="font-semibold underline" to={LOGIN}>Iniciar Sesión</Link> ahora.</div>
                            }
                            {
                                error && <div className="text-red-500 bg-red-100 alert">{error}</div>
                            }
                            {
                                invalidPayload && <div className="text-red-500 bg-red-100 alert">{invalidPayload}</div>
                            }
                            <div className="mb-4">
                                <button onClick={handleSubmit} type="button" 
                                className={`button is-primary w-full rounded-lg ${loading ? 'flex space-between justify-center':'block '}`}
                                disabled={loading || success}>
                                    { loading && <SpinnerI/>}
                                    {loading ? 'Loading...':'Reset password'}
                                </button>
                            </div>
                        </>

                    )
                }

                {
                    validToken === "invalid" && (
                        <div className="text-red-500 bg-red-100 alert">
                            <div className="mb-2">
                                {error}
                            </div>
                            <div>
                                <Link className="font-semibold underline" to={FORGOT_PASSWORD}>Solicitar nuevo enlace de recuperación</Link>.
                            </div>
                        </div>
                    )
                }
                
                <div className="text-left">

                    <div className="mb-4 text-right text-gray-500">
                        <Link className="font-normal text-indigo-500" to={HOME}>Atras</Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
     );
}

export default ResetPassword;