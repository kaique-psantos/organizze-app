import React, { createContext, useState, useEffect } from 'react';

import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null); 
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();


  // verifica se tem usuario logado
  useEffect(() => {
    async function loadStorage(){
      const storageUser = await AsyncStorage.getItem('@finToken');

      if(storageUser){
        // OBTEM OS DADOS DO USUARIO LOGADO
        const response = await api.get('/me', {
          headers:{
            'Authorization': `Bearer ${storageUser}`
          }
        })
        .catch(()=>{
          setUser(null); // ZERA O USUARIO PRA MANDAR DE VOLTA PRA TELA DE LOGIN
        })

        api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
        setUser(response.data);
        setLoading(false);

      }

      setLoading(false);

    }

    loadStorage();
  }, [])


  async function signUp(email, password, nome){
    setLoadingAuth(true); // ATIVA SPINNER DE CARREGAMENTO NO BOTÃO

    try{
      const response = await api.post('/users', {
       name: nome,
       password: password,
       email: email,
      })
      setLoadingAuth(false);

      navigation.goBack(); // VOLTA PARA A TELA DE LOGIN


    }catch(err){
      console.log("ERRO AO CADASTRAR", err);
      setLoadingAuth(false);  // DESATIVA SPINNER DE CARREGAMENTO NO BOTÃO
    }
  }

  async function signIn(email, password){
    setLoadingAuth(true); //  ATIVA SPINNER DE CARREGAMENTO NO BOTÃO

    try{
      const response = await api.post('/login', {
        email: email,
        password: password
      })

      const { id, name, token } = response.data;

      const data = {
        id,
        name,
        token,
        email,
      };

      await AsyncStorage.setItem('@finToken', token); // SALVA O USUARIO LOGADO

      api.defaults.headers['Authorization'] = `Bearer ${token}`; // ARMAZENA O TOKEN DO USUARIO

      setUser({
        id,
        name,
        email,
      })

      setLoadingAuth(false); // DESATIVA SPINNER DE CARREGAMENTO NO BOTÃO

    }catch(err){
      console.log("ERRO AO LOGAR ", err);
      setLoadingAuth(false);
    }

  }


  async function signOut(){
    await AsyncStorage.clear()
    .then(() => {
      setUser(null);
    })
  }

  // RETORNA AS FUNÇÕES PARA TER ACESSO EM TODO O SISTEMA
  return(
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut, loadingAuth, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

