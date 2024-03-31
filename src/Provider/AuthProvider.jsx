import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState,} from "react";
import { auth } from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import useAxiosPublic from '../hooks/useAxiosPublic';

export const GlobalContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const  loginHandler= (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('jwt-token', res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem('jwt-token')
            }
        })
        return  ()=>unSubscribe()

    },[axiosPublic])

    const authInfo={
        user,
        loading,
        createUser,
        googleLogin,
        loginHandler,
        logOut,
    }
    return (
        <GlobalContext.Provider value={authInfo}>
            {children}
        </GlobalContext.Provider>
    );
};
AuthProvider.propTypes= {
    children:PropTypes.node.isRequired
}

export default AuthProvider;