import { AppRegistry } from 'react-native';
import App from './App'; // Your main app component
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'), // This connects to your web HTML root
});