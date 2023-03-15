import axios from "axios";

import React, {createContext, useContext, useState, useEffect} from 'react';
import { getUser } from "../Utils/server/getInfo";

interface AuthContextProps {
  auth: boolean;
  changeAuth: ( auth: boolean ) => void;
  token: string;
  changeToken: (token: string) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}


export const AuthContext = createContext( {} as AuthContextProps );

export function AuthProvider ( { children }: AuthProviderProps ) {
 
  // Depois mudar o valor inicial para false
  const [ auth, setAuth ] = useState<boolean>(false)
  const [ token, setToken ] = useState<string>("")

  function changeAuth (auth: boolean) {
    setAuth(!auth)

  }

  function changeToken ( token: string ) {
    setToken(token)
    localStorage.setItem( "token",  token );
    getUser(token).then( response => {
      console.log(response[0])
      localStorage.setItem("user", JSON.stringify(response[0]))
    })
  }


   const baseURL = "http://172.27.12.171:3333"

  async function getToken (values: any ) {
    const token = axios( {
      method: 'post',
      baseURL: baseURL, 
      url: "/sessions",
      data: values,
    } )
    .then(response => {
     
    const token = response.data.token

    if ( token !== undefined ) {
      
      changeToken(  token );
      setAuth(true)
    // salvar o token nos cookies: usar ferramenta própria do nextJs
  
    }
  
    return token
  })

      
  }


  return (
    <AuthContext.Provider value={ { auth: auth, changeAuth: changeAuth, changeToken: changeToken, token: token }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  const authContext = useContext( AuthContext )

  return authContext;
}


