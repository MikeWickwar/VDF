import $ from "jquery"
import hotelData from 'resources/hotels.json';
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

function bindWindowScroll(){
  $(window).scroll(() => {
    if (window.pageYOffset > 255) {
      $("#topNav").addClass("fixed")
    }else{
      $("#topNav").removeClass("fixed")
    }

  })
}

export class App {
  onLoad(){
    console.log("App onload...")
    bindWindowScroll()
  }
  onNavClick(href){
    if(window.innerWidth <= 991){
      $('#navTogglerBtn').click()
    }
    window.location.href = href
  }
  configureRouter(config, router) {
    config.title = 'Vegas Deal Finder';
    function step() {
       return step.run;
    }
    step.run = (navigationInstruction, next) => {
      if(navigationInstruction.config.name == "hotels"){
        navigationInstruction.config.settings.hotel = $.grep(hotelData.Hotels, (gItem) => { return  gItem.name.toLowerCase() === navigationInstruction.params.childRoute.toLowerCase()})[0];
      }
      return next();
    };
    //add step to populate data into the view when needed - based on :id
    config.addPreActivateStep(step)
    config.map([
      { route: ['','home'],  name: 'home',
          moduleId: PLATFORM.moduleName('./components/home/home'),  nav: true, title:'Home'},
      { route: ['topdeals','topdeals'],  name: 'topdeals',
          moduleId: PLATFORM.moduleName('./components/topDeals/topDeals'),  nav: true, title:'Top 12 Deals' },
      { route: ['toptips','topTips'],  name: 'toptips',
          moduleId: PLATFORM.moduleName('./components/topTips/topTips'),  nav: true, title:'Top 10 Tips' },
      { route: ['hotels',':id'], name: 'hotels',
          moduleId: PLATFORM.moduleName('./components/hotels/hotels'),  nav: true, title:'Hotels'},
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
    this.router.hotels = hotelData.Hotels;


  }
}

const _app = new App();
$(document).ready(() => { _app.onLoad()})
