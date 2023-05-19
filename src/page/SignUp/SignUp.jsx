import { Link } from "react-router-dom";


const SignUp = () => {

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Login Please </h1>

                </div>

                <div className="card  w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" required placeholder="Name" className="input input-bordered" />
                            </div>

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
                                <input type="text" name="password" required placeholder="password" className="input input-bordered" />
                                
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary"><input type="submit" value="Sign up" /></button>
                            </div>
                        </form>

                        <p className="my-8">Already have an account?? <Link className="text-blue-600 font-semibold" to='/login'> Login </Link> </p>

                        <img src="" alt="photoURL" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;