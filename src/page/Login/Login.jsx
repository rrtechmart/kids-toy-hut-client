import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        if (!/(?=.*?[a-z])/.test(password)) {
            setError('Password should have minimum one lowercase')
            return;
        }
        else if (!/(?=.*?[0-9])/.test(password)) {
            setError('Password should have at least one digit ')
            return;
        }
        else if (!/(?=.*?[#?!@$%^&*])/.test(password)) {
            setError('Password should have one special character');
            return;
        }
        else if (password.length < 6) {
            setError('Password must have 6 or more character')
            return;
        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
                setError('')

                navigate(from, { replace: true });
            })
            .catch(error => {
                const loginError = ('Either email or password is incorrect')
                setError(loginError)

            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.loggedUser;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Helmet>
                <title> Kids Toy Hut | Login</title>
                
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Login Please </h1>

                    </div>

                    <div className="card  w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" required placeholder="email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                    <label className="label">

                                        <button className="btn btn-success btn-outline w-full" type="submit">
                                            <Link onClick={handleGoogleSignIn} className="label-text-alt link link-hover"> Sign-in with google</Link>
                                        </button>

                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary"><input type="submit" value="Login" /></button>
                                </div>
                            </form>

                            <p>Are you new here?? <Link className="text-blue-600 font-semibold" to='/signup'> Sign up</Link> </p>
                        </div>

                        <p className="text-red-600 p-6"> {error} </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;