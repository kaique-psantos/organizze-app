import { Firebase } from '../../services/firebaseConfig'
import { getAuth, signOut } from "firebase/auth";
import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'

export default function Account() {

  function logoff() {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigation.navigate('Login')
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.title}>Dados do usuários</Text>
      <Text style={StyleSheet.info}>Nome</Text>
      <Text style={StyleSheet.info}>Email</Text>

      <TouchableOpacity style={StyleSheet.button} onPress={logoff}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

