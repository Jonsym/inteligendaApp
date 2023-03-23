import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { LOGIN } from '../../constants/paths';
import { useForm } from '../../hooks/useForm';
import { SpinnerI } from '../../components/Icons';
import validators from '../../helpers/validators';
import Layout from '../layout';

const initialUser = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
}

const RegisterPage = () => {

    const history = useHistory();

    const { Register, loading, error } = useAuth();

    const { form,first_name, last_name, email, password, handleChange } = useForm(initialUser);

    const [confirm, setConfirm] = useState("");
    
    const [invalidPayload, setInvalidPayload] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setInvalidPayload(null);

        if (!validators.onlyLetters(first_name) || !validators.onlyLetters(last_name)) {
            setInvalidPayload('Se requiere nombre y apellido.');
            return;
        }

        if (!validators.isEmail(email)) {
            setInvalidPayload('Su gmail no es valido.');
            return;
        }

        if (!validators.password.Length(password)) {
            setInvalidPayload('Su contraseña debe tener al menos 8 caracteres.');
            return;
        }

        if (confirm !== password) {
            setInvalidPayload("La contraseña y la contraseña de confirmación no coinciden.");
            return;
        }

        
        Register(form).finally(() => {
            history.push(LOGIN);
        });

    }

    return (
        <Layout>
        <div className="flex items-center justify-center py-20 lg:py-30 px-5 bg-gray-50">
            <div className="grid w-full max-w-3xl grid-cols-8 mx-auto overflow-hidden bg-white rounded shadow-md">
                <div className="col-span-2 overflow-hidden md:col-span-4">
                    <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1587301669187-732ea66e7617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt=""/>
                </div>

                <form onSubmit={handleSubmit} className="col-span-6 p-5 md:col-span-4">
                    <div className="mb-4 text-center">
                        <h1 className="mb-2 text-3xl font-bold text-black">Registrate</h1>
                        <p className="text-gray-500">Empieza a organizar tu vida</p>
                    </div>
                    <div className="text-left">
                        <div className="mb-4">
                            <label htmlFor="first_name">Primer nombre</label>
                            <input className="field-control" type="text" name="first_name" onChange={handleChange} disabled={loading}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="last_name">Apellido</label>
                            <input className="field-control" type="text" name="last_name" onChange={handleChange} disabled={loading}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email">Gmail</label>
                            <input className="field-control" type="email" name="email" onChange={handleChange} disabled={loading}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password">Contraseña</label>
                            <input className="field-control" type="password" name="password" onChange={handleChange} disabled={loading}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password">Confirme su contraseña</label>
                            <input className="field-control" type="password" name="confirm" onChange={e => setConfirm(e.target.value)} disabled={loading}/>
                        </div>
                        {
                            error && <div className="text-red-500 bg-red-100 alert">{error}</div>
                        }
                        {
                            invalidPayload && <div className="text-red-500 bg-red-100 alert">{invalidPayload}</div>
                        }

                        <div className="mb-4">
                            <button type="submit" 
                            className={`button is-primary rounded-lg w-full ${loading ? 'flex space-between justify-center':'block'}`}
                            disabled={loading}>
                                { loading && <SpinnerI/>}
                                {loading ? 'Cargando...':'Unete!'}
                            </button>
                        </div>
                        <div className="text-center">
                            <Link className="font-normal text-indigo-500" to={LOGIN}>Ya tienes una cuenta?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </Layout> 
     );
}
 
export default RegisterPage;