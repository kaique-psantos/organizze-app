import { AppRegistry } from 'react-native';
import App from './App'; // ou o caminho correto para o seu componente principal
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
