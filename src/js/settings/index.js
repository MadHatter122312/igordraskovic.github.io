import angular from 'angular';

let settingsModule = angular.module('app.settings', []);

//config
import SettingsConfig from './settings.config'
settingsModule.config(SettingsConfig);

//controllers
import SettingsCtrl from './settings.controller';
settingsModule.controller('SettingsCtrl', SettingsCtrl);

export default settingsModule;
