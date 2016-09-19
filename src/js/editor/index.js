import angular from 'angular';

// create module where functionality attaches
let editorModule = angular.module('app.editor', []);

//add ui-router config settings
import EditorConfig from './editor.config';
editorModule.config(EditorConfig);

//controllers
import EditorCtrl from './editor.controller';
editorModule.controller('EditorCtrl', EditorCtrl);

export default editorModule;
