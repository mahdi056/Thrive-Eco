import { useContext, useState } from 'react';
import signup from '../assets/register.jpg'
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from './Provider/AuthProvider';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const {createUser, setUser, updateUserProfile, SignInwithGoogle} = useContext(AuthContext);
    const [passworderror, setPassworderror] = useState("");
    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        SignInwithGoogle()
        .then (result => {
            const user = result.user;
            setUser(user);
            
            toast.success("Google Sign-Up Successful!", {
                position: "top-center",
              });

              navigate('/');
        })

        
    }

    const handleSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conpassword = e.target.conpassword.value;

        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{7,}$/;

        if (!passwordRegex.test(password)){
            setPassworderror(
                 "Password must include at least one uppercase letter, a special character, and be at least 6 characters long."
            );
            toast.error("Invalid Passsword Format",{
                position: 'top-center',
            });


        }
        else if (password !== conpassword){
            setPassworderror(
                "Password and Confirm Password did not matched"
            );
            toast.error("Password and Confirm Password did not matched",{
                position: 'top-center'
            });
        }
        setPassworderror(""); 

        const result = createUser(email, password);
        const user = result.user;
        
         updateUserProfile({
            displayName: name,
            
          });
    
          setUser({ ...user, displayName: name});

        navigate('/');
    
    }
    return (
        <div>
            <ToastContainer></ToastContainer>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <img src={signup} alt="" />
                    </div>


                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className='text-3xl text-center font-bold'>Register Now!!!</h1>
                            <form onSubmit={handleSubmit}>

                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Name</label>
                                    <input type="text" name='name' className="input" placeholder="Name" required/>

                                    <label className="fieldset-label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" required/>

                                    <label className="fieldset-label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" required/>

                                    <label className="fieldset-label">Confirm Password</label>
                                    <input type="password" name='conpassword' className="input" placeholder="Confirm Password" required/>

                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">SignUp</button>
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

export default SignUp;