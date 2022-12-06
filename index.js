/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appname} from './app.json';
// import Sample from './src/Sample';
// import Splash from './src/Screens/Splash';

AppRegistry.registerComponent(appname, () => App);
