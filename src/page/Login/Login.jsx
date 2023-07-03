import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const {signIn, googleSignIn}=useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password)

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.log(error)
        })

    }

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.loggedUser;
            console.log(loggedUser);
            navigate(from, {replace:true});
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
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
                </div>
            </div>
        </div>
    );
};

export default Login;