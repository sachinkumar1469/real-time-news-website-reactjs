import { auth } from '../config/firebase'


import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const authContext = createContext();

export function AuthContext({children}) {

    const [currUser,setCurrUser] = useState(null);

    const navigate = useNavigate();

    useEffect(()=>{
        const unSub = auth.onAuthStateChanged(user=>{
            setCurrUser(user);
        });

        return ()=>{
            unSub();
        }
    })
    return (
        
        <authContext.Provider value={{currUser,setCurrUser}}>
            {children}
        </authContext.Provider>
    )
}


