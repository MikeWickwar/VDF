import $ from "jquery"
import 'bootstrap'
import {activationStrategy} from 'aurelia-router';
import hotelData from 'resources/hotels.json';
require('bootstrap/dist/css/bootstrap.min.css');
import { inject } from 'aurelia-framework';
import { Loader } from '@googlemaps/js-api-loader';
import environment from '../config/environment.json';
import { HttpClient } from 'aurelia-fetch-client';

const stripRequest = `Hotels on las vegas blvd las vegas and the cromwell and Tropicana and the wynn` ;

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
  async activate() {
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
    config.title = 'Vegas Deal Finder';
    function step() {
       return step.run;
    }
    step.run = (navigationInstruction, next) => {
      if(navigationInstruction.config.name == "hotels"){
        navigationInstruction.config.settings.hotel = $.grep(hotelData.Hotels, (gItem) => { return  gItem.name.toLowerCase() === navigationInstruction.params.childRoute.toLowerCase()})[0];
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
    config.map([
      { route: ['/','home'],  name: 'home',
          moduleId: PLATFORM.moduleName('./components/home/home'),  nav: true, title:'Home'},
      { route: ['topdeals','topdeals'],  name: 'topdeals',
          moduleId: PLATFORM.moduleName('./components/topDeals/topDeals'),  nav: true, title:'Top 12 Deals' },
      { route: ['airfare','airfare'],  name: 'topdeals',
          moduleId: PLATFORM.moduleName('./components/topDeals/airfare/airfare'),  nav: true, title:'Airfare' },
      { route: ['toptips','toptips'],  name: 'toptips',
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
    router.events.subscribe(async navigationInstruction => {
      const instructions = navigationInstruction.getAllInstructions();

      for (const instruction of instructions) {
        const viewModel = instruction.viewModel;

        if (viewModel && typeof viewModel.activate === 'function') {
          await viewModel.activate(instruction.params);
        }
      }
    });

    this.router = router;
    this.router.hotels = hotelData.Hotels;

  }
}

const _app = new App();
$(document).ready(() => { _app.onLoad()})
