import styled from "styled-components/native";


export const Container = styled.View`
background-color: rgba(${props => {
    const hex = props.bg.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}, ${props.opacity || 0.8}`; // Permite definir a opacidade via prop
  }});
  margin-left: 14px;
  margin-right: 14px;
  border-radius: 15px;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
  padding-left: 14px;
`;

export const Label = styled.Text`
  color: #FFF;
  font-size: 21px;
  font-weight: bold;
`;

export const Balance = styled.Text`
  margin-top: 5px;
  font-size: 32px;
  color: #FFF;
`;