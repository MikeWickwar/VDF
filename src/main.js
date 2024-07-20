import {PLATFORM} from 'aurelia-pal';
import "./app.scss"

export function configure(aurelia) {

  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(process.env.NODE_ENV !== 'production' ? 'debug' : 'warn');

  if (process.env.NODE_ENV !== 'production') {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));

  if (process.env.NODE_ENV !== 'production') {
    aurelia.loader.baseUrl = '/';
  }
}
