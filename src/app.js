import $ from "jquery"
import 'bootstrap'
import {activationStrategy} from 'aurelia-router';
import hotelData from 'resources/hotels.json';
require('bootstrap/dist/css/bootstrap.min.css');
import { inject } from 'aurelia-framework';
import { navItems } from 'navbarItems.js'

function bindWindowScroll(){
  $(window).scroll(() => {
    if (window.pageYOffset > 255) {
      $("#topNav").addClass("fixed")
    }else{
      $("#topNav").removeClass("fixed")
    }
  })
}

@inject('window')
export class App {
  async activate() {
    this.navItems = navItems;
  }
  onLoad(){
    console.log("App onload...")
    bindWindowScroll()
  }
  onNavClick(href){
    window.scrollTo(0, 0);
    if(window.innerWidth <= 991){
      $('#navTogglerBtn').click()
    }
    if (process.env.NODE_ENV === 'production') {
      window.location.href = "/VDF/" + href;
    }else{
      window.location.href = href;
    }
  }
  onHotelNavClick(name){
    window.scrollTo(0, 0);
    
    if(window.innerWidth <= 991){
      $('#navTogglerBtn').click()
    }
    var href = `/#/hotels/${name}`
    if (process.env.NODE_ENV === 'production') {
      window.location.href = "/VDF/" + href;
    }else{
      window.location.href = href;
    }
  }
  parseHotelName(name) {
    const replacements = [
      ' ', 'Resort&Casino', 'Hotel&Casino', 'HotelAndCasino', 'of', 'LasVegas', 
      'Suites&Casino', 'Hotel,Casino&SkyPod', 'RadissonHotel', 'aDoubleTreebyHiltonHotel'
    ];
  
    replacements.forEach(replacement => {
      name = name.replaceAll(replacement, '');
    });
  
    return name.trim();
  }
  configureRouter(config, router) {
    var that = this;
    config.title = 'Vegas Deal Finder';
    function step() {
       return step.run;
    }
    step.run = (navigationInstruction, next) => {
      if(navigationInstruction.config.name == "hotels"){
        navigationInstruction.config.settings.hotel = $.grep(this.router.hotels, (gItem) => { return  gItem.name.replaceAll(" ", "").toLowerCase() === navigationInstruction.params.childRoute.toLowerCase()})[0];
        navigationInstruction.config.settings.games = hotelData.CasinoGames;
      }

      return next();
    };

    //add step to populate data into the view when needed - based on :id
    config.addPreActivateStep(step)
    config.options.activationStrategy = activationStrategy.invokeLifecycle;
    console.log('Nav Items:' + this.navItems)
    config.map(this.navItems);
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
