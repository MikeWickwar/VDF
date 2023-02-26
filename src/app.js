require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

export class App {
    configureRouter(config, router) {
      config.title = 'Vegas Deal Finder';
      config.map([
        { route: ['','home'],  name: 'home',
            moduleId: PLATFORM.moduleName('./components/home/home'),  nav: true, title:'Home' },
        { route: ['topdeals','topdeals'],  name: 'topdeals',
            moduleId: PLATFORM.moduleName('./components/home/home'),  nav: true, title:'Top 12 Deals' },
        { route: ['toptips','toptips'],  name: 'topdeals',
            moduleId: PLATFORM.moduleName('./components/home/home'),  nav: true, title:'Top 10 Tips' },
        { route: ['hotels','hotels'],  name: 'hotels',
            moduleId: PLATFORM.moduleName('./components/home/home'),  nav: true, title:'Hotels' },
        { route: ['entertainment','entertainment'],  name: 'entertainment',
            moduleId: PLATFORM.moduleName('./components/home/home'),  nav: true, title:'Entertainment' },
        { route: ['foodanddrink','foodanddrink'],  name: 'foodanddrink',
            moduleId: PLATFORM.moduleName('./components/home/home'),  nav: true, title:'Food & Drink' },
        { route: ['gambling','gambling'],  name: 'gambling',
            moduleId: PLATFORM.moduleName('./components/home/home'),  nav: true, title:'Gambling' },
        { route: ['contactus','contactus'],  name: 'contactus',
            moduleId: PLATFORM.moduleName('./components/home/home'),  nav: true, title:'Contact Us' }
      ]);

      this.router = router;

    }
  }
