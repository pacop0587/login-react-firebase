import { useCallback, useState } from "react"
import MensajeError from "./MensajeError";
import {auth} from '../firebase';

const Login = () => {
    //Hooks State
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [mensajeError, setMensajeError] = useState('')
    const [esRegistro, setEsRegistro] = useState(true)

    //Procesando login
    const procesarDatos = (e) => {
        e.preventDefault();

        if ([email, pass].includes('')) {
            setMensajeError('Debes llenar los campos');
            return
        }

        if (pass.length < 6) {
            setMensajeError('El password debe tener minimo 6 caracteres');
            return
        }

        setMensajeError('')
        console.log('Iniciaste sesion')

        if(esRegistro){
            registrar();
        }
    }

    //Registrando usuario nuevo en firebase
    const registrar = useCallback( async () =>{

        try {
            const resultado = await auth.createUserWithEmailAndPassword(email, pass);
            console.log(resultado);
        } catch (error) {
            if(error.code === 'auth/invalid-email'){
            setMensajeError('Email invalido');
            }
            if(error.code === 'auth/email-already-in-use'){
                setMensajeError('Email registrado');
            }

        }
    },[email, pass]);


    return (
        <div className="mt-5">
            <h3 className="text-center">
                {
                    esRegistro ? 'Registro de usuarios' : 'Login de Acceso'
                }
            </h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            mensajeError && <MensajeError mensajeError={mensajeError} />
                        }
                        <input type="email"
                            className="form-control mb-3"
                            placeholder="Ingrese un e-mail"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <input type="password"
                            className="form-control mb-3"
                            placeholder="Ingrese un password"
                            onChange={e => setPass(e.target.value)}
                            value={pass}
                        />
                        <div className="d-grid gap-2">
                            <button 
                                className="btn btn-dark btn-lg" 
                                type="submit">
                                    {
                                        esRegistro ? 'Registrarse' : 'Acceder'
                                    }
                            </button>
                            <button 
                                className="btn btn-primary btn-sm" 
                                type="button"
                                onClick={() => setEsRegistro(!esRegistro)}>
                                    {
                                        esRegistro ? '¿Ya estas registrado?' : '¿No tienes cuenta?'
                                    }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
