
import { Link, NavLink } from 'react-router';
import logo from '../assets/T.png'
import { FaCaretDown } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
const Header = () => {

    const {user, SignOut} = useContext(AuthContext);
    return (
        <div>

            <div className="navbar bg-base-100 shadow-md px-4">
                {/* Left Side */}
                <div className="navbar-start">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="w-10 h-10" /> {/* Add logo path */}
                        <span className="text-2xl font-bold text-green-600">ThriveEco</span>
                    </Link>
                </div>

                {/* Right Side - Desktop */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li tabIndex={0}>
                            <details>
                                <summary className="flex items-center gap-1">
                                    Products
                                </summary>
                                <ul className="p-2 bg-base-100 shadow-lg rounded-box w-48 z-50">
                                    <li><NavLink to="/eco-tech">Eco Tech</NavLink></li>
                                    <li><NavLink to="/eco-home">Eco Home</NavLink></li>
                                    <li><NavLink to="/sustainable-fashion">Sustainable Fashion</NavLink></li>
                                    <li><NavLink to="/green-beauty">Green Beauty</NavLink></li>
                                    <li><NavLink to="/organic-food">Organic Food</NavLink></li>
                                    
                                </ul>
                            </details>
                        </li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>

                        {
                            user ? (<li><NavLink to="/signup">Dashboard</NavLink></li>)
                            :
                            (<li><NavLink to="/signup">Sign Up</NavLink></li>)
                        }


                        
                    </ul>

                    {
                        user ? (<Link to="/"><button onClick={SignOut} className='btn btn-soft btn-error'>Logout</button></Link>)
                        :
                        (<Link to="/login"><button className='btn btn-soft btn-success'>Login</button></Link>)
                    }
                </div>

                {/* Right Side - Mobile */}
                <div className="lg:hidden navbar-end">
                    
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li>
                                <details>
                                    <summary className="flex items-center gap-1">
                                        Products
                                    </summary>
                                    <ul className="p-2">
                                        <li><NavLink to="/eco-tech">Eco Tech</NavLink></li>
                                        <li><NavLink to="/eco-home">Eco Home</NavLink></li>
                                        <li><NavLink to="/sustainable-fashion">Sustainable Fashion</NavLink></li>
                                        <li><NavLink to="/green-beauty">Green Beauty</NavLink></li>
                                        <li><NavLink to="/organic-food">Organic Food</NavLink></li>
                                      
                                    </ul>
                                </details>
                            </li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/contact">Contact Us</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/signup">Sign Up</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;