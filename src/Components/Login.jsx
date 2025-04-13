import { useContext } from 'react';
import login from '../assets/login.avif'
import { AuthContext } from './Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';

const Login = () => {

    const { SignInwithGoogle, setUser, userLoogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        SignInwithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);

                navigate('/');
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        userLoogin(email,password)
        .then ((result)=> {
            const user = result.user;
            setUser(user);
            navigate('/');
        })
        .catch ((error)=>{
            console.error(error.message)
        });


    }




    return (
        <div>

            <ToastContainer></ToastContainer>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <img src={login} alt="" />
                    </div>


                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className='text-3xl text-center font-bold'>Welcome Back!!!</h1>
                            <form onSubmit={handleLogin}>
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" required />

                                    <label className="fieldset-label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" required />

                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>

                            </form>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleSignIn} className='btn btn-success'>Google</button>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;