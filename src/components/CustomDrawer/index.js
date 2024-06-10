import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

import { DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { AuthContext } from '../../contexts/auth';
//A brra lateral
export default function CustomDrawer(props){
  const { user, signOut } = useContext(AuthContext);

  return(
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../../assets/Logo.png')}
          style={{ width: 150, height: 100 }}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 18}}>
          Bem-vindo
        </Text>

        <Text 
        style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 14}}
        numberOfLines={1}
        >
          {user && user.name}
        </Text>
      </View>

      <DrawerItemList {...props} />

      { <DrawerItem
      {...props}
      label="Sair"
      onPress={signOut}
      labelStyle={styles.label}
      style={styles.drawerItem}
     />}
    <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto apresentado para a disciplina de Computação para Dispositivos Móveis do curso de Sistemas de Informação do UniRios.
        </Text>
      </View>
     
        
    
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerItem: {
    borderRadius: 5,
    marginVertical: 5,
  },
  label: {
    color: '#EF463A', // Cor do texto Sair
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
    marginBottom: 20,
    padding: 10,
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#777',
  },
});
