import { useState } from "react"
import MensajeError from "./MensajeError";

const Login = () => {
    //Hooks State
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [mensajeError, setMensajeError] = useState('')

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
    }


    return (
        <div className="mt-5">
            <h3 className="text-center">Acceso o registro de usuario</h3>
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
                            <button className="btn btn-dark btn-lg" type="submit">Registrarse</button>
                            <button className="btn btn-primary btn-sm" type="submit">¿Ya tienes cuenta?</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login
