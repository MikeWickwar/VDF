import $ from "jquery"
import 'bootstrap'
import {activationStrategy} from 'aurelia-router';
import hotelData from 'resources/hotels.json';
require('bootstrap/dist/css/bootstrap.min.css');
import { inject } from 'aurelia-framework';
import { Loader } from '@googlemaps/js-api-loader';
import environment from '../config/environment.json';
import { HttpClient } from 'aurelia-fetch-client';

const stripRequest = `Hotels on las vegas blvd las vegas` ;
// const stripRequest = 'hotels on las vegas blvd in las vegas nv including The ARIA Resort And Casino, The Horseshoe,  Bellagio, Casino Royale Las Vegas, Caesars Palace Las Vegas, Circus Circus Las Vegas, The Cosmopolitan of Las Vegas, Ellis Island Hotel Las Vegas, Encore at Wynn Las Vegas, Excalibur Hotel and Casino, Flamingo Las Vegas, Harrah\'s Las Vegas, The LINQ Las Vegas, Luxor Las Vegas, Mandalay Bay Resort and Casino, MGM Grand Las Vegas, Park MGM Las Vegas, New York-New York Hotel and Casino, OYO Hotel and Casino Las Vegas, Paris Las Vegas Hotel & Casino, Planet Hollywood Resort & Casino Las Vegas, Sahara Las Vegas, The Cromwell Las Vegas, The Mirage Las Vegas, The STRAT Hotel, Casino & Skypod, The Venetian Resort Las Vegas, Treasure Island Las Vegas, Tropicana Las Vegas, Wynn Las Vegas';

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

function runRequest(location, that) {
  const loader = new Loader({
    apiKey: environment.apiKey,
    libraries: ['places']
  });

  // Now you can use the Places API to fetch data
  const keyword = `hotels on ${location}`;
  const service = new google.maps.places.PlacesService(document.createElement('div'));
  var lat = location.indexOf(stripRequest) > -1 ? 36.1147 : 36.1663;
  var lng = location.indexOf(stripRequest) > -1 ? -115.1728 : -115.1492;
  const request = {
    location: { lat: lat, lng: lng },
    radius: 3500,
    type: 'lodging',
    keyword: keyword
  };

  service.nearbySearch(request, (results, status, pagination) => {
    // handle the results

    if (status == "OK") {
      results = results.sort((r1, r2) => (r1.name > r2.name) ? 1 : (r1.name < r2.name) ? -1 : 0);
      if (location == stripRequest) {
        if (typeof that.gHotelStripInfo === "undefined") {
          that.gHotelStripInfo = [...results];
        }else{
          that.gHotelStripInfo = [...that.gHotelStripInfo, ...results];
        }
      }else{
        if (typeof that.gHotelFremontInfo === "undefined") {
          that.gHotelFremontInfo = [...results];
        }else{
          that.gHotelFremontInfo = [...that.gHotelFremontInfo, ...results];
        }
      }

      // Check if there are additional pages of results
      if (pagination.hasNextPage) {
        // Call the fetch() method to get the next page of results
        pagination.nextPage();
      }else{
        if (location == stripRequest) {
          that.gHotelStripInfo = that.gHotelStripInfo.sort((r1, r2) => (r1.name > r2.name) ? 1 : (r1.name < r2.name) ? -1 : 0);
          localStorage.setItem("LVD:stripHotels", JSON.stringify({"data": that.gHotelStripInfo}));
          populateStripDropDown(that)
        }else{
          that.gHotelFremontInfo = that.gHotelFremontInfo.sort((r1, r2) => (r1.name > r2.name) ? 1 : (r1.name < r2.name) ? -1 : 0);
          localStorage.setItem("LVD:fremontHotels", JSON.stringify({"data": that.gHotelFremontInfo}));
          populateFremontDropDown(that)
        }
      }
    }
  });
}

function populateStripDropDown(that) {
  $.each(that.gHotelStripInfo, (i, item) => {
    var hotelNameForLink = that.parseHotelName(item.name)
    $("#stripDropdown").append(`<li><a class="dropdown-item" href="#/hotels/${hotelNameForLink}">${item.name}</a></li>`)
  })
}

function populateFremontDropDown(that) {
  $.each(that.gHotelFremontInfo, (i, item) => {
    var hotelNameForLink = that.parseHotelName(item.name)
    $("#fremontDropdown").append(`<li><a class="dropdown-item" href="#/hotels/${hotelNameForLink}">${item.name}</a></li>`)
  })
}

function getHotelData(that) {
  var stripDataFromLs = localStorage.getItem("LVD:stripHotels")
  var fremontDataFromLs = localStorage.getItem("LVD:fremontHotels")


  if (stripDataFromLs !== null) {
    console.log("strip items are in local storage")
    stripDataFromLs = JSON.parse(stripDataFromLs).data
    that.gHotelStripInfo = stripDataFromLs;
  }else{
    runRequest(stripRequest, that);
  }

  if (fremontDataFromLs !== null) {
    console.log("fremont items are in local storage")
    fremontDataFromLs = JSON.parse(fremontDataFromLs).data
    that.gHotelFremontInfo = fremontDataFromLs;
  }else{
    runRequest("Downtown Las Vegaas", that);
  }

}

@inject('window')
export class App {
  async activate(params, routerConfig) {
    getHotelData(this)
  }
  onLoad(){
    console.log("App onload...")
    bindWindowScroll()
    bindDropdownsInNav()
  }
  onNavClick(href){
    if(window.innerWidth <= 991){
      $('#navTogglerBtn').click()
    }
    debugger
    if (!environment.debug) {
      window.location.href = "/VDF/" + href;
    }else{
      window.location.href = href;
    }
  }
  onHotelNavClick(name){
    if(window.innerWidth <= 991){
      $('#navTogglerBtn').click()
    }
    var href = `/#/hotels/${name}`
    if (!environment.debug) {
      window.location.href = "/VDF/" + href;
    }else{
      window.location.href = href;
    }
  }
  parseHotelName (name){
    name = name.replaceAll(' ', '');
    name = name.replaceAll('Resort&Casino', '');
    name = name.replaceAll('Hotel&Casino', '');
    name = name.replaceAll('HotelAndCasino', '');
    name = name.replaceAll('of', '');
    name = name.replaceAll('LasVegas', '');
    name = name.replaceAll('Suites&Casino', '');
    name = name.replaceAll('Hotel,Casino&SkyPod', '');
    name = name.replaceAll('-TI,aRadissonHotel', '');
    name = name.replaceAll('-aDoubleTreebyHiltonHotel', '');

    return name.trim()
  }
  configureRouter(config, router) {
    var that = this;
    var navItems = [
      { route: ['/','home'],  name: 'home', href: '/#',
          moduleId: PLATFORM.moduleName('./components/home/home'),  nav: true, title:'Home', topLvl: true, hasSubMenu: false},
      { route: ['topdeals','topdeals'],  name: 'topdeals', href: '/#/topDeals',
          moduleId: PLATFORM.moduleName('./components/topDeals/topDeals'),  nav: true, title:'Top 12 Deals', topLvl: true, hasSubMenu: true, parent: "topdeals" },
      { route: ['airfare','airfare'],  name: 'airfare', href: '/#/airfare',
          moduleId: PLATFORM.moduleName('./components/topDeals/airfare/airfare'),  nav: true, title:'Airfare', topLvl: false, hasSubMenu: false, parent: "topdeals"},
      { route: ['packing','packing'],  name: 'packing', href: '/#/packing',
          moduleId: PLATFORM.moduleName('./components/topDeals/packing/packing'),  nav: true, title:'Packing', topLvl: false, hasSubMenu: false, parent: "topdeals" },
      { route: ['transportation','transportation'],  name: 'transportation', href: '/#/transportation',
          moduleId: PLATFORM.moduleName('./components/topDeals/transportation/transportation'),  nav: true, title:'Transportation', topLvl: false, hasSubMenu: false, parent: "topdeals" },
      { route: ['feature','feature'],  name: 'feature', href: '/#/feature',
          moduleId: PLATFORM.moduleName('./components/topDeals/featuredHotel/feature'),  nav: true, title:'Featured Hotel', topLvl: false, hasSubMenu: false, parent: "topdeals" },
      { route: ['birthday','birthday'],  name: 'birthday', href: '/#/birthday',
          moduleId: PLATFORM.moduleName('./components/topDeals/birthday/birthday'),  nav: true, title:'Birthday', topLvl: false, hasSubMenu: false, parent: "topdeals" },
      { route: ['maps','maps'],  name: 'maps', href: '/#/maps',
          moduleId: PLATFORM.moduleName('./components/topDeals/maps/maps'),  nav: true, title:'Maps', topLvl: false, hasSubMenu: false, parent: "topdeals" },
      { route: ['toptips','toptips'],  name: 'toptips', href: '/#/toptips',
          moduleId: PLATFORM.moduleName('./components/topTips/topTips'),  nav: true, title:'Top 10 Tips', topLvl: true, hasSubMenu: false },
      { route: ['hotels',':id'], name: 'hotels', activationStrategy: activationStrategy.replace,
          moduleId: PLATFORM.moduleName('./components/hotels/hotels'),  nav: true, title:'Hotels', topLvl: true, hasSubMenu: true},
      { route: ['entertainment','entertainment'],  name: 'entertainment', href: '/#/entertainment',
          moduleId: PLATFORM.moduleName('./components/entertainment/entertainment/entertainment'),  nav: true, title:'Entertainment', topLvl: true, hasSubMenu: true, parent: "entertainment" },
      { route: ['shows','shows'],  name: 'shows', href: '/#/shows',
          moduleId: PLATFORM.moduleName('./components/entertainment/shows/shows'),  nav: true, title:'Shows', topLvl: false, hasSubMenu: false, parent: "entertainment" },
      { route: ['tripsandtours','tripsandtours'],  name: 'tripsandtours', href: '/#/tripsandtours',
          moduleId: PLATFORM.moduleName('./components/entertainment/tripsandtours/tripsandtours'),  nav: true, title:'Tours and Trips', topLvl: false, hasSubMenu: false, parent: "entertainment" },
      { route: ['freetosee','freetosee'],  name: 'freetosee', href: '/#/freetosee',
          moduleId: PLATFORM.moduleName('./components/entertainment/freetosee/freetosee'),  nav: true, title:'Free To See', topLvl: false, hasSubMenu: false, parent: "entertainment" },
      { route: ['coupons','coupons'],  name: 'coupons', href: '/#/coupons',
          moduleId: PLATFORM.moduleName('./components/entertainment/coupons/coupons'),  nav: true, title:'Coupons', topLvl: false, hasSubMenu: false, parent: "entertainment" },
      { route: ['bestStrip','bestStrip'],  name: 'Best Strip Clubs', href: '/#/bestStrip',
          moduleId: PLATFORM.moduleName('./components/entertainment/ae/bestStrip/bestStrip'),  nav: true, title:'bestStrip', topLvl: false, hasSubMenu: false, parent: "ae" },
      { route: ['legalCanna','legalCanna'],  name: 'Legal Cannabis', href: '/#/legalCanna',
          moduleId: PLATFORM.moduleName('./components/entertainment/ae/legalCanna/legalCanna'),  nav: true, title:'legalCanna', topLvl: false, hasSubMenu: false, parent: "ae" },
      { route: ['dispList','dispList'],  name: 'Dispensary List', href: '/#/dispList',
          moduleId: PLATFORM.moduleName('./components/entertainment/ae/dispList/dispList'),  nav: true, title:'dispList', topLvl: false, hasSubMenu: false, parent: "ae" },
      { route: ['euroPools','euroPools'],  name: 'European Pools', href: '/#/euroPools',
          moduleId: PLATFORM.moduleName('./components/entertainment/ae/euroPools/euroPools'),  nav: true, title:'euroPools', topLvl: false, hasSubMenu: false, parent: "ae" },
      { route: ['fooddrink','fooddrink'],  name: 'Food & Drink', href: '/#/fooddrink',
          moduleId: PLATFORM.moduleName('./Components/fooddrink/fooddrink/fooddrink'),  nav: true, title:'Food & Drink', topLvl: true, hasSubMenu: true },
      { route: ['fooddrink','fooddrink'],  name: 'Food & Drink Sub', href: '/#/fooddrink',
          moduleId: PLATFORM.moduleName('./Components/fooddrink/fooddrink/fooddrink'),  nav: true, title:'Food & Drink Summary', topLvl: false, hasSubMenu: false, hasSubMenu: false,  parent: "foodanddrink" },
      { route: ['topfooddeals','topfooddeals'],  name: 'Food & Drink', href: '/#/topfooddeals',
          moduleId: PLATFORM.moduleName('./Components/fooddrink/topfooddeals/topfooddeals'),  nav: true, title:'Top Food & Drink Deals', topLvl: false, hasSubMenu: false,  parent: "foodanddrink"},
      { route: ['buffets','buffets'],  name: 'Buffets', href: '/#/buffets',
          moduleId: PLATFORM.moduleName('./Components/fooddrink/buffets/buffets'),  nav: true, title:'Buffets', topLvl: false, hasSubMenu: false,  parent: "foodanddrink"},
      { route: ['happyhour','happyhour'],  name: 'Happy Hour', href: '/#/happyhour',
          moduleId: PLATFORM.moduleName('./Components/fooddrink/happyhour/happyhour'),  nav: true, title:'Happy Hour', topLvl: false, hasSubMenu: false,  parent: "foodanddrink"},
      { route: ['fremonthappyhour','fremonthappyhour'],  name: ' Fremont Happy Hour', href: '/#/fremonthappyhour',
          moduleId: PLATFORM.moduleName('./Components/fooddrink/fremonthappyhour/fremonthappyhour'),  nav: true, title:'Fremont Happy Hour', topLvl: false, hasSubMenu: false,  parent: "foodanddrink"},
      { route: ['gambling','gambling'],  name: 'gambling', href: '/#/gambling',
          moduleId: PLATFORM.moduleName('./components/home/home'),  nav: true, title:'Gambling', topLvl: true, hasSubMenu: false },
      { route: ['contactus','contactus'],  name: 'contactus', href: '/#/contactus',
          moduleId: PLATFORM.moduleName('./components/home/home'),  nav: true, title:'Contact Us', topLvl: true, hasSubMenu: false }
    ]
    config.title = 'Vegas Deal Finder';
    function step() {
       return step.run;
    }
    step.run = (navigationInstruction, next) => {
      if(navigationInstruction.config.name == "hotels"){
        navigationInstruction.config.settings.hotel = $.grep(hotelData.Hotels, (gItem) => { return  gItem.name.toLowerCase() === navigationInstruction.params.childRoute.toLowerCase()})[0];
        navigationInstruction.config.settings.games = hotelData.CasinoGames;
        navigationInstruction.config.settings.hotelGData = $.grep(that.gHotelStripInfo, (gItem) => { return that.parseHotelName(gItem.name).toLowerCase() === navigationInstruction.params.childRoute.toLowerCase()})[0];
        if (typeof navigationInstruction.config.settings.hotelGData === "undefined") {
          navigationInstruction.config.settings.hotelGData = $.grep(that.gHotelFremontInfo, (gItem) => { return that.parseHotelName(gItem.name).toLowerCase() === navigationInstruction.params.childRoute.toLowerCase()})[0];
        }
      }

      return next();
    };

    //add step to populate data into the view when needed - based on :id
    config.addPreActivateStep(step)
    config.options.activationStrategy = activationStrategy.invokeLifecycle;
    config.map(navItems);
    router.events.subscribe(async navigationInstruction => {
      const instructions = navigationInstruction.getAllInstructions();

      for (const instruction of instructions) {
        const viewModel = instruction.viewModel;

        if (viewModel && typeof viewModel.activate === 'function') {
          await viewModel.activate(instruction.params, instruction.config);
        }
      }
    });

    router.settings = {navItems: navItems}

    this.router = router;
    this.router.hotels = hotelData.Hotels;
    this.router.games = hotelData.CasinoGames;

  }
}

const _app = new App();
$(document).ready(() => { _app.onLoad()})
