import React, {createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config' 
import { createUserWithEmailAndPassword, getAuth , onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut} from "firebase/auth";


export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
  const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);  
    }
 
    // sign up with gmail
    const signUpWithGmail = () => {
      setLoading(true);
     return signInWithPopup(auth,googleProvider);
    }

    // lgin
    const login = (email, password) => {
      setLoading(true);
     return signInWithEmailAndPassword(auth,email, password)
    }

    // logout
    const logout = () => {
      return signOut(auth)
    }

    useEffect(()=> {
    const unsubsribe = onAuthStateChanged(auth,currentUser => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubsribe();
    }
    },[])

    const authInfo = {
        user,
        signUpWithGmail,
        createUser,
        login,
        logout
    }




  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider