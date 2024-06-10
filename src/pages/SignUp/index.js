import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator, Alert } from 'react-native';

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  TitleText
} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';


export default function SignUp() {

  const { signUp, loadingAuth } = useContext(AuthContext)

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
    if (nome === "") {
      Alert.alert(
        "Atenção!", // Título do alerta
        "Informe seu nome"   // Mensagem do alerta
      );
    } else if (email === "") {
      Alert.alert(
        "Atenção!",
        "Informe seu e-mail"
      );
    } else if (password === "") {
      Alert.alert(
        "Atenção!",
        "Informe uma senha"
      );
    } else {
      signUp(email, password, nome); // CHAMA A FUNÇÃO DE CADASTRO DO auth.js
    }
    
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        
        <TitleText>Crie sua conta</TitleText>
        
        <AreaInput>
          <Input
            placeholder="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Seu email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        
        <SubmitButton onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>Cadastrar</SubmitText>
            )
          }
        </SubmitButton>

      </Container>

    </Background>
  )
}

// lodingAuth: se ativo aparece o spinner se não aparece o texto