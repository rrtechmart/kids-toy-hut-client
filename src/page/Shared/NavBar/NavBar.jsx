import { Link } from "react-router-dom";
import logo from '../../../assets/logo.jpg';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100 mt-8">
            <div className="navbar-start grow-5">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className="h-12 w-12" src={logo} alt="" />
                </Link>

                <Link className="btn btn-ghost normal-case text-xl">
                    <h3>Kids Car Hut</h3>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li> <Link to='/'> Home</Link> </li>
                    <li> <Link to='/alltoys'> All Toys</Link> </li>
                    <li> <Link to='/'> My Toys </Link> </li>
                    <li> <Link to='/addToy'> Add a Toy </Link> </li>
                    <li> <Link to='/blogs'> Blogs </Link> </li>

                    {user?.email ? <>
                        <li> <button onClick={handleLogOut}> Logout </button> </li>
                        <div className="tooltip" data-tip={user?.name}>
                            <img className="w-10 h-10" src="https://i.ibb.co/VHGb9Fx/user.jpg" alt="" />
                        </div>
                    </> :
                        <li> <Link to='/login'> Login </Link> </li>}


                </ul>
            </div>

        </div>
    );
};

export default NavBar;

