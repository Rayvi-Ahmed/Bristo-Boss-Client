import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";


export const AuthContext=createContext(null)
const auth=getAuth(app)
    

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)



    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const Login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    const LogOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    // upadte Profile 

    // const UpdateProfile =()=>{
    //     return upda

    // }

    // Login / Logout Observer///

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
    createUser
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
