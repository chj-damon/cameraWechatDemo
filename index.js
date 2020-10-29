import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as WeChat from 'react-native-wechat-lib';

WeChat.registerApp('wx62107788a5302d28', '');
AppRegistry.registerComponent(appName, () => App);
