

const Login = () => {
    return (
        <div className="mt-5">
            <h3 className="text-center">Acceso o registro de usuario</h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form action="">
                        <input type="email"
                            className="form-control mb-3"
                            placeholder="Ingrese un e-mail"
                        />
                        <input type="password"
                            className="form-control mb-3"
                            placeholder="Ingrese un password"
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
