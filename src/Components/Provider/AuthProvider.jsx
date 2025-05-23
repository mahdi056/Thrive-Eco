
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provder = new GoogleAuthProvider();

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    const SignInwithGoogle = () => {
        return signInWithPopup(auth, provder);
    };

    const userLoogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const SignOut = () => {
        return signOut(auth);
    }



    const authInfo = {
        createUser,
        user,
        setUser,
        updateUserProfile,
        SignInwithGoogle,
        userLoogin,
        SignOut,
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentuser=>{
            if (currentuser){
                const userdata = {
                    displayName: currentuser.displayName,
                    email: currentuser.email
                }
                setUser(userdata);
            }
            else {
                setUser(null);
            }

            setLoading(false);
        })

        return ()=> unsubscribe();


    },[])

    if (loading){
        return(
            <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-spinner text-success"></span>
        </div>
        )
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;