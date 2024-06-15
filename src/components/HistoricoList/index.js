import React from 'react';
import {
  Container,
  TipoText,
  Tipo,
  TextDescription,
  IconView,
  ValorText
} from './styles';
import { TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const formatValue = (value) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export default function HistoricoList({ data, deleteItem }) {
  function handleDeleteItem() {
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja deletar esse registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }

  if (!data) {
    console.error('Nenhum dado fornecido para HistoricoList.');
    return null;
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <Container>
        <Tipo>
          <IconView tipo={data.type}>
            <Icon
              name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
              size={20}
              color="#FFF"
            />
            <TipoText>{data.type}</TipoText>
          </IconView>
        </Tipo>

        <TextDescription>
          {data.description}
          {" - "}
          {data.date}
        </TextDescription>
        

        <ValorText>
          {formatValue(data.value)}
        </ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
}
