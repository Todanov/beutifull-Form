import React, { createContext, useContext, useState } from 'react'


export const SingupFormContext = createContext()
export const useSingupFrom = ()=>useContext(SingupFormContext)

export function SingupFormContextProvider ({children}){
    const [profile, setProfile]=useState({})
    const [social,setSocial]=useState({})
 return(  
      <SingupFormContext.Provider value={{profile,setProfile,social,setSocial}}>
        {children}
    </SingupFormContext.Provider>
 )}