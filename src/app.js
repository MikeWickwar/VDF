import $ from "jquery"
import 'bootstrap'
import {activationStrategy} from 'aurelia-router';
import hotelData from 'resources/hotels.json';
require('bootstrap/dist/css/bootstrap.min.css');
import { HttpClient } from 'aurelia-http-client';


function bindWindowScroll(){
  $(window).scroll(() => {
    if (window.pageYOffset > 255) {
      $("#topNav").addClass("fixed")
    }else{
      $("#topNav").removeClass("fixed")
    }

  })
}

function bindDropdownsInNav() {
  let dropdowns = document.querySelectorAll('.dropdown-toggle')
  dropdowns.forEach((dd)=>{
      dd.addEventListener('click', function (e) {
          var el = this.nextElementSibling
          el.style.display = el.style.display==='block'?'none':'block'
      })
  })
}




export class App {
  onLoad(){
    console.log("App onload...")
    bindWindowScroll()
    bindDropdownsInNav()
    this.loadData();
  }
  loadData() {
    const apiKey = 'AIzaSyCG9uRVzgyWOs4iI6X3kHcwNO8sd-ouVSE';
    const location = 'San Francisco, CA';
    const radius = 5000; // search radius in meters

    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${apiKey}&query=hotels+in+${location}&radius=${radius}`;
    const client = new HttpClient();

    client.jsonp(url)
      .then(response => {
        // handle the response data here
        debugger
        console.log(response.content);
      })
      .catch(error => {
        console.error(error);
      });

  }
  onNavClick(href){
    if(window.innerWidth <= 991){
      $('#navTogglerBtn').click()
    }
    window.location.href = href;
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
      { route: ['hotels',':id'], name: 'hotels', activationStrategy: activationStrategy.replace,
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
