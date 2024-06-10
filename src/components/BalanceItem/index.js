import React, { useMemo } from 'react';
import { Container, Label, Balance } from './styles';

const formatValue = (value) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};


export default function BalanceItem({ data }){

  const labelName = useMemo(() => {
    if(data.tag === 'saldo'){
      return{
        label: 'Saldo atual',
        color: '#0583EB'
      }
    }else if(data.tag === 'receita'){
      return{
        label: 'Entradas de hoje',
        color: '00b94a'
      } 
    }else{
      return{
        label: 'Saídas de hoje',
        color: 'EF463a'
      }
    }
    
  }, [data])

  return(
    <Container bg={labelName.color}>
      <Label>{labelName.label}</Label>
      <Balance>
      {formatValue(data.saldo)}
      </Balance>
    </Container>
  )
}