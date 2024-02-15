import React, { createContext, useEffect, useState } from 'react'
import App from '../firebase/Firebase.config'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth()
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    /* create user */
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* create user using gmail */
    const signupWithGmail = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    /* login */
    const login = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    //logout function 
    const logOut = () => {
        return signOut(auth);
    }

    //user is avaible or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoading(false)
        })
        return ( ) => {
            return unsubscribe()
        }
    })
 
    const authInfo = {
        user,
        loading,
        createUser,
        signupWithGmail,
        login,
        logOut
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
