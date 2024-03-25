import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const GlobalContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
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
        })
        return  ()=>unSubscribe()

    },[])

    const authInfo={
        user,
        loading,
        createUser,
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