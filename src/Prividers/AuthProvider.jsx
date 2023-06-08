import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext  = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);


    const createUser = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email, password);
    }

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password);
    }

    const googleLogin = () =>{
        return signInWithPopup(auth , googleProvider);
    }

    const updateUserProfile = (name , photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
    }



    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        logIn,
        updateUserProfile,
        googleLogin,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;