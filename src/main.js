import environment from '../config/environment.json';
import {PLATFORM} from 'aurelia-pal';
import "app.css"

export function configure(aurelia) {

  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }
  
  if (environment.production) {
    aurelia.loader.baseUrl = '/VDF/';
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
