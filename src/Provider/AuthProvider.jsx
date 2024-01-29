import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { axiosPublic } from "../Hooks/useAxiosPublic";

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateUserProfile=(name,image)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          });
          
    }
    const emailVerification=()=>{
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
        
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const forgetPassword=(email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email);        
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const googleAuthProvider=new GoogleAuthProvider();
    const signWithgoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleAuthProvider);
    } 
    const githubAuthProvider=new GithubAuthProvider();
    const signWithGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubAuthProvider);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);            
            console.log({currentUser,loading})
            if(currentUser){
                // get token and store client
                const userInfo={email:currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                    .then(res=>{
                        const token=res.data?.token;
                        console.log(token);
                        if(token){
                            localStorage.setItem('token',token);
                            setLoading(false);
                        }
                    })
            }
            else{
                // rremove token from 
                localStorage.removeItem('token');
                setLoading(true);
            }
        })
        return ()=>{
            unsubscribe();
        }
    },[loading])

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,
        emailVerification,
        forgetPassword,
        logOut,
        signWithgoogle,
        signWithGithub

    }
    return (
       <AuthContext.Provider value={authInfo}>        
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;