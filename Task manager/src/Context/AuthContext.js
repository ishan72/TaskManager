import React,{createContext, useState, useEffect} from 'react';
import firebase from '../firebase';

//initialize state
const initialState = {
};

export const AuthContext = createContext(initialState);

export const AuthProvider =({children})=>{
    const [user,setUser]=useState(firebase.User | null);
    const [loadingAuthState, setLoadingAuthState]=useState(true);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            setUser(user);
            setLoadingAuthState(false);
        })
    })

    return(
        <AuthContext.Provider value={{
            user,
            authenticated: user !== null,
            setUser,
            loadingAuthState
        }}>
            {children}
        </AuthContext.Provider>
    )
}
