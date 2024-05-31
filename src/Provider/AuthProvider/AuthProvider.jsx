import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext=createContext(null)
const auth=getAuth(app)

const googleProvider = new GoogleAuthProvider();
    

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)


// User Created 
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
//  User Profile update such as name & Photo address 

const updateUserProfile=(name, photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
}

// User Log in here 
    const Login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

// GOOGLE SIGN IN 

const GoogleSignIn=()=>{
    setLoading(true)
    signInWithPopup(auth,googleProvider)
}



// User Log Out Here 
    const LogOut=()=>{
        setLoading(true)
        return signOut(auth)
    }


    // Manage User Observer

    useEffect(()=>{

        const unSubscribe=onAuthStateChanged(auth,CurrentUser=>{
            setUser(CurrentUser)
            console.log("You are login at ", CurrentUser)
            setLoading(false)
        })

        return()=>{
            return unSubscribe();
        }
    },[])


const authInfo={
    user,
    loading,
    Login,
    LogOut,
    setLoading,
    createUser,
    updateUserProfile,
    GoogleSignIn
}

    return (
       <AuthContext.Provider value={authInfo}>
        {
            children
        }
       </AuthContext.Provider>
    );
};

export default AuthProvider;
