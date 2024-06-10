import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #E6F6FF;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 12px;
`;

export const Tipo = styled.View`
  flex-direction: row;
`;

export const TipoText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-style: italic;
`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props => 
    props.tipo === 'despesa' ? 'rgba(198, 44, 54, 0.9)' : 'rgba(4, 147, 1, 0.8)'};
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 8px;
  margin-bottom: 2px;
`;

export const TextDescription = styled.Text`
  color: #121212;
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
   margin-bottom: 10px;
`;

export const ValorText = styled.Text`
  color: #121212;
  font-size: 20px;
`;
