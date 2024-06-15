import axios from 'axios';

//ATENÇÃO MUDAR URL DE ACORCO COM O IP DA MAQUINA!!!!
const api = axios.create({
  baseURL: 'http://192.168.37.101:3333',
});

export default api;
