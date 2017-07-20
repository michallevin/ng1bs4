// Import Angular Resources
import template from './menu.html';
import controller from './menu.controller.js';

// Import Raw Files
import TemplateRaw from '!raw-loader!./menu.html';
import ControllerRaw from '!raw-loader!./menu.controller.js';
import MarkdownRaw from '!raw-loader!./menu.md';

// manipulate controller to pass raw files up to demo
controller.prototype.$onInit = function() {
  this.demo.html = TemplateRaw;
  this.demo.js = ControllerRaw;
  this.demo.md = MarkdownRaw;
};

// Component definition
const Component = {
  require: {
    demo: '^demo',
  },
  template,
  controller
};

// Register module, register component and export name
export default angular
  .module('ng1bs4.docs.menuDemo', [])
  .component('menuDemo', Component)
  .name;
