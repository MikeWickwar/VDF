import $ from "jquery"
import 'bootstrap'
import {activationStrategy} from 'aurelia-router';
import hotelData from 'resources/hotels.json';
require('bootstrap/dist/css/bootstrap.min.css');
import { inject } from 'aurelia-framework';
import environment from '../config/environment.json';

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
  async activate(params, routerConfig) {

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
    if (!environment.debug) {
      window.location.href = "/VDF/" + href;
    }else{
      window.location.href = href;
    }
  }
  onHotelNavClick(name){
    window.scrollTo(0, 0);
    debugger

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
      { route: ['gambling','gambling'],  name: 'gambling', href: '/#/gambling101',
          moduleId: PLATFORM.moduleName('./Components/gambling/gambling101/gambling101/gambling101'),  nav: true, title:'Gambling', topLvl: true, hasSubMenu: true },
      { route: ['gambling','gambling101'],  name: 'gambling101', href: '/#/gambling101',
          moduleId: PLATFORM.moduleName('./Components/gambling/gambling101/gambling101/gambling101'),  nav: true, title:'Gambling 101', topLvl: false, hasSubMenu: true, parent: "gambling" },
      { route: ['gambling','craps101'],  name: 'craps101', href: '/#/craps101',
          moduleId: PLATFORM.moduleName('./Components/gambling/gambling101/craps101/craps101'),  nav: true, title:'Craps 101', topLvl: false, hasSubMenu: false, parent: "gambling101" },
      { route: ['gambling','blackjack101'],  name: 'blackjack101', href: '/#/blackjack101',
          moduleId: PLATFORM.moduleName('./Components/gambling/gambling101/blackjack101/blackjack101'),  nav: true, title:'Blackjack 101', topLvl: false, hasSubMenu: false, parent: "gambling101" },

      { route: ['gambling','roulette101'],  name: 'roulette101', href: '/#/roulette101',
          moduleId: PLATFORM.moduleName('./Components/gambling/gambling101/roulette101/roulette101'),  nav: true, title:'Roulette 101', topLvl: false, hasSubMenu: false, parent: "gambling101" },

      { route: ['gambling','videoPoker101'],  name: 'videoPoker101', href: '/#/videoPoker101',
          moduleId: PLATFORM.moduleName('./Components/gambling/gambling101/videoPoker101/videoPoker101'),  nav: true, title:'Video Poker 101', topLvl: false, hasSubMenu: false, parent: "gambling101" },

      { route: ['gambling','stats101'],  name: 'stats101', href: '/#/stats101',
          moduleId: PLATFORM.moduleName('./Components/gambling/gambling101/stats101/stats101'),  nav: true, title:'Gambling Mathmatics', topLvl: false, hasSubMenu: false, parent: "gambling101" },

      { route: ['gambling','gamblingStrat'],  name: 'gamblingStrat', href: '/#/gamblingStrat',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingStrat/gamblingStrat/gamblingStrat'),  nav: true, title:'Gambling Strategies', topLvl: false, hasSubMenu: true, parent: "gambling" },

      { route: ['gambling','blackjackStrat'],  name: 'blackjackStrat', href: '/#/blackjackStrat',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingStrat/blackJackStrat/blackJackStrat'),  nav: true, title:'Blackjack Strategies', topLvl: false, hasSubMenu: false, parent: "gamblingStrat" },

      { route: ['gambling','crapsStrat'],  name: 'crapsStrat', href: '/#/crapsStrat',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingStrat/crapsStrat/crapsStrat'),  nav: true, title:'Craps Strategies', topLvl: false, hasSubMenu: false, parent: "gamblingStrat" },

      { route: ['gambling','rouletteStrat'],  name: 'rouletteStrat', href: '/#/rouletteStrat',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingStrat/rouletteStrat/rouletteStrat'),  nav: true, title:'Roulette Strategies', topLvl: false, hasSubMenu: false, parent: "gamblingStrat" },

      { route: ['gambling','videoPokerStrat'],  name: 'videoPokerStrat', href: '/#/videoPokerStrat',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingStrat/videoPokerStrat/videoPokerStrat'),  nav: true, title:'Video Poker Strategies', topLvl: false, hasSubMenu: false, parent: "gamblingStrat" },

      { route: ['gambling','gamblingCouponRun'],  name: 'gamblingCouponRun', href: '/#/gamblingCouponRun',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingCouponRun/gamblingCouponRun/gamblingCouponRun'),  nav: true, title:'Gambling Coupon Run', topLvl: false, hasSubMenu: true, parent: "gambling" },

      { route: ['gambling','freeOnFremont'],  name: 'freeOnFremont', href: '/#/freeOnFremont',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingCouponRun/freeOnFremont/freeOnFremont'),  nav: true, title:'Free on Fremont', topLvl: false, hasSubMenu: false, parent: "gamblingCouponRun" },

      { route: ['gambling','couponRunScorecard'],  name: 'couponRunScorecard', href: '/#/couponRunScorecard',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingCouponRun/couponRunScoreCard/couponRunScorecard'),  nav: true, title:'Coupon Run Score Card', topLvl: false, hasSubMenu: false, parent: "gamblingCouponRun" },

      { route: ['gambling','gamblingWhereTo'],  name: 'gamblingWhereTo', href: '/#/gamblingWhereTo',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingWhereTo/gamblingWhereTo/gamblingWhereTo'),  nav: true, title:'Where to Gamble', topLvl: false, hasSubMenu: true, parent: "gambling" },

      { route: ['gamblingWhereTo','whereToPlayBlackJack'],  name: 'whereToPlayBlackJack', href: '/#/whereToPlayBlackJack',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingWhereTo/blackjack/strip/whereToPlayBlackJack'),  nav: true, title:'BlackJack', topLvl: false, hasSubMenu: false, parent: "gamblingWhereToStrip" },

      { route: ['gamblingWhereTo','whereToPlayBlackJackFremont'],  name: 'whereToPlayBlackJackFremont', href: '/#/whereToPlayBlackJackFremont',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingWhereTo/blackjack/fremont/whereToPlayBlackJackFremont'),  nav: true, title:'BlackJack', topLvl: false, hasSubMenu: false, parent: "gamblingWhereToFremont" },

      { route: ['gamblingWhereTo','whereToPlayCrapsFremont'],  name: 'whereToPlayCrapsFremont', href: '/#/whereToPlayCrapsFremont',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingWhereTo/craps/fremont/whereToPlayCrapsFremont'),  nav: true, title:'Craps', topLvl: false, hasSubMenu: false, parent: "gamblingWhereToFremont" },

      { route: ['gamblingWhereTo','whereToPlayCraps'],  name: 'whereToPlayCraps', href: '/#/whereToPlayCraps',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingWhereTo/craps/strip/whereToPlayCraps'),  nav: true, title:'Craps', topLvl: false, hasSubMenu: false, parent: "gamblingWhereToStrip" },

      { route: ['gamblingWhereTo','whereToPlayRoulette'],  name: 'whereToPlayRoulette', href: '/#/whereToPlayRoulette',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingWhereTo/roulette/strip/whereToPlayRoulette'),  nav: true, title:'Roulette', topLvl: false, hasSubMenu: false, parent: "gamblingWhereToStrip" },

      { route: ['gamblingWhereTo','whereToPlayRouletteFremont'],  name: 'whereToPlayRouletteFremont', href: '/#/whereToPlayRouletteFremont',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingWhereTo/roulette/fremont/whereToPlayRouletteFremont'),  nav: true, title:'Roulette', topLvl: false, hasSubMenu: false, parent: "gamblingWhereToFremont" },

      { route: ['gamblingWhereTo','whereToPlayVideoPokerFremont'],  name: 'whereToPlayVideoPokerFremont', href: '/#/whereToPlayVideoPokerFremont',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingWhereTo/videoPoker/fremont/whereToPlayVideoPokerFremont'),  nav: true, title:'Video Poker', topLvl: false, hasSubMenu: false, parent: "gamblingWhereToFremont" },

      { route: ['gamblingWhereTo','whereToPlayVideoPoker'],  name: 'whereToPlayVideoPoker', href: '/#/whereToPlayVideoPoker',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingWhereTo/videoPoker/strip/whereToPlayVideoPoker'),  nav: true, title:'Video Poker', topLvl: false, hasSubMenu: false, parent: "gamblingWhereToStrip" },

      { route: ['gamblingWhereTo','featuredFremont'],  name: 'featuredFremont', href: '/#/featuredFremont',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingWhereTo/featuredFremontCasino/featuredFremont'),  nav: true, title:'Featured Fremont', topLvl: false, hasSubMenu: false, parent: "gamblingWhereToFremont" },

      { route: ['gamblingWhereTo','featuredStrip'],  name: 'featuredStrip', href: '/#/featuredStrip',
          moduleId: PLATFORM.moduleName('./Components/gambling/gamblingWhereTo/featuredStripCasino/featuredStrip'),  nav: true, title:'Featured Strip', topLvl: false, hasSubMenu: false, parent: "gamblingWhereToStrip" },

      { route: ['contactUs','contactUs'],  name: 'contactUs', href: '/#/contactUs',
          moduleId: PLATFORM.moduleName('./components/contactUs/contactUs'),  nav: true, title:'Contact Us', topLvl: true, hasSubMenu: false }
    ]
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
