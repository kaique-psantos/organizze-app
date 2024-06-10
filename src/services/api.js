import axios from 'axios';

//ATENÇÃO MUDAR URL DE ACORCO COM O IP DA MAQUINA!!!!
const api = axios.create({
  baseURL: 'http://10.0.0.18:3333',
});

export default api;
