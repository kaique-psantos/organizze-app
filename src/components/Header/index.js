import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import { Container, Title, ButtonMenu} from './styles';

export default function Header({ title }){
  const navigation = useNavigation();
//3 Barrinhas laterais do menu e o Titulo da página
  return(
    <Container>
            <ButtonMenu onPress={ () => navigation.openDrawer() }>
        <Icon name="menu" size={35} color="#0583EB"/> 
      </ButtonMenu>

      { title && (
        <Title>
          {title}
        </Title>
      )}
    </Container>
  )
}