import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = event => {
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, photoUrl);

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


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset('');
                setSuccess('User has created successfully');

                updateUserProfile(name, photoUrl)
                    .then(() => { })
            })
            .catch(error => {
                const userCreateError = ("Email or password is invalid")
                setError(userCreateError);
            })



    }

    return (
        <>
            <Helmet>
                <title> Kids Toy Hut | SignUp</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Sign Up Please </h1>

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

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photoUrl" required placeholder="Photo URL" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary"><input type="submit" value="Sign up" /></button>
                                </div>
                            </form>

                            <p className="my-2">Already have an account?? <Link className="text-blue-600 font-semibold" to='/login'> Login </Link> </p>

                            <p className="text-red-600 p-2"> {error} </p>
                            <p className="text-green-600 p-2"> {success} </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;