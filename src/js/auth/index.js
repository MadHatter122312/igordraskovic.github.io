import angular from 'angular';

//create the module where functionality attaches to
let authModule = angular.module('app.auth', []);

//Include our ui-router config
import AuthConfig from './auth.config';
authModule.config(AuthConfig);

// include controller
import AuthCtrl from './auth.controller';
authModule.controller('AuthCtrl', AuthCtrl);


export default authModule;
