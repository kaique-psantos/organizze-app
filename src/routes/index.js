import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../contexts/auth'

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes(){
  const { signed, loading } = useContext(AuthContext);

  if(loading){
    return(
      <View 
      style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F4FF'
      }}>
        <ActivityIndicator size="large" color="#131313" /> 
      </View>
    ) // SPINNER ASSIM QUE ABRE O APP E DA RELOAD ENQUANTO A APLICAÇÃO VERIFICA SE TEM USUÁRIO LOGADO
  }

  return(
    signed ? <AppRoutes/> : <AuthRoutes/>
  )
}

export default Routes;