"use strict";(self.webpackChunkvegas_deal_finder=self.webpackChunkvegas_deal_finder||[]).push([[956],{app:function(n,t,o){o.r(t),o.d(t,{App:function(){return s}});var e,i=o(4692),a=o.n(i),r=(o(8747),o(3178)),A=o(3888),l=o("aurelia-framework"),d=o(9671);o(6425);let s=(0,l.inject)("window")(e=class{async activate(){this.navItems=d.C}onLoad(){console.log("App onload..."),a()(window).scroll((()=>{window.pageYOffset>255?a()("#topNav").addClass("fixed"):a()("#topNav").removeClass("fixed")}))}onNavClick(n){window.scrollTo(0,0),window.innerWidth<=991&&a()("#navTogglerBtn").click(),window.location.href="/VDF/"+n}onHotelNavClick(n){window.scrollTo(0,0),window.innerWidth<=991&&a()("#navTogglerBtn").click();var t=`/#/hotels/${n}`;window.location.href="/VDF/"+t}parseHotelName(n){return[" ","Resort&Casino","Hotel&Casino","HotelAndCasino","of","LasVegas","Suites&Casino","Hotel,Casino&SkyPod","RadissonHotel","aDoubleTreebyHiltonHotel"].forEach((t=>{n=n.replaceAll(t,"")})),n.trim()}configureRouter(n,t){function o(){return o.run}n.title="Vegas Deal Finder",o.run=(n,t)=>("hotels"==n.config.name&&(n.config.settings.hotel=a().grep(this.router.hotels,(t=>t.name.replaceAll(" ","").toLowerCase()===n.params.childRoute.toLowerCase()))[0],n.config.settings.games=A.T),t()),n.addPreActivateStep(o),n.options.activationStrategy=r.Wg.invokeLifecycle,console.log("Nav Items:"+this.navItems),n.map(this.navItems),t.events.subscribe((async n=>{const t=n.getAllInstructions();for(const n of t){const t=n.viewModel;t&&"function"==typeof t.activate&&await t.activate(n.params,n.config)}})),t.settings={navItems:d.C},this.router=t,this.router.hotels=A.q,this.router.games=A.T}})||e;const p=new s;a()(document).ready((()=>{p.onLoad()}))},653:function(n,t,o){var e=o(1354),i=o.n(e),a=o(6314),r=o.n(a)()(i());r.push([n.id,"nav{width:80%;background-color:#000;color:#fff;align-self:center}.navbar-toggler-icon,.navbar-toggler-icon::before,.navbar-toggler-icon::after{background-color:#fff;border-radius:3px}nav *:not(:hover){color:#fff !important;text-decoration:solid}li:not(:has(a,b)),ul:not(:has(.nav-item)){display:none}ul.navbar-nav *:empty,ul.navbar-nav:empty{margin:0}.dropdown-submenu{position:relative}.dropdown-submenu .dropdown-menu{right:auto;left:70%}.navbar-nav li ul.dropdown-menu{display:block;right:auto;left:70%}#stripDropdown>li.freemont-item{display:none}.navbar-nav li>ul.dropdown-menu{opacity:0;transition:opacity 0s ease-in;display:none;pointer-events:none}.navbar-nav li:hover>ul.dropdown-menu{opacity:1;display:block;pointer-events:auto}nav a,nav nav-link:focus,nav .nav-link:hover,nav a.nav-link,nav a.nav-item,nav a:-webkit-any-link{color:#fff;text-decoration-color:#fff;cursor:pointer;text-decoration:none}ul.navbar-nav:not(:has(.nav-item)){margin-right:0 !important}nav li{margin:auto;font-size:14px}nav ul.dropdown-menu{background-color:#000}navbar.fixed,.fixed{position:fixed !important;z-index:1}nav .dropdown-menu li:not(:empty){padding:4px 8px}#navTogglerBtn{width:50px}#gamblingDropdown,#fAndDDropdown,#dealsDropdown,#fremontDropdown,#stripDropdown,#hotelsDropdown{padding:0;border:1px solid #fff;max-height:400px}#gamblingDropdown,#fAndDDropdown,#dealsDropdown,#fremontDropdown,#stripDropdown{overflow-y:scroll}#dealsDropdown{overflow:visible}@media(max-width: 480px){#dealsDropdown,#fremontDropdown,#fAndDDropdown,#gamblingDropdown,#stripDropdown,#hotelsDropdown{padding:0;border:1px solid #fff;max-height:400px;overflow:auto}}@media(max-width: 767px){#dealsDropdown,#fremontDropdown,#gamblingDropdown,#fAndDDropdown,#stripDropdown,#hotelsDropdown{padding:0;border:1px solid #fff;max-height:400px;overflow:auto}}.triple-wide,.info-split-duo{margin-top:30px;display:flex;flex-wrap:wrap;flex-flow:row;justify-content:center}.rooms.info-split-duo{flex-flow:column}.third-container,.first-container{align-content:center;padding:1.25em;min-width:50%}.triple-wide .first-container,.triple-wide .third-container{width:25%;min-width:inherit}.second-container{display:flex;justify-content:center;flex-wrap:wrap;padding:1.25em}.triple-wide .second-container{width:65%;min-width:inherit;flex-direction:column;justify-content:flex-start}body{width:100vw;height:100vh;padding:0;margin:0;padding-bottom:100px;background:linear-gradient(to bottom, #e0e0e0, #676767);backdrop-filter:grayscale(1);min-height:100vh;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover}body video{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;object-fit:cover}h2{text-align:center}ul{list-style-type:none;display:flex;justify-content:center;margin-left:0;padding-left:0}a{color:green}.flex{display:flex}.col{display:flex;flex-flow:column}.MainContainer{height:100%;width:100%;display:flex;align-items:center;flex-flow:column}.MainContainer>iframe{height:352px;background-color:#000}.TitleImg,.centerMainImg{margin-bottom:20px}.centerMainImg img{height:230px;width:100%;max-width:500px}.TitleImg img{width:100%;max-width:420px}.contentContainer{display:flex;flex-flow:column}.center{display:flex;align-self:center;align-items:center;justify-content:center}.afLink{justify-content:center;width:100%;margin-bottom:20px}.afLink>a:not(.chainLink){justify-content:center;width:100%}.afLinkImg{width:100%;max-width:468px}.titleWithImages{margin-top:1.25em;margin-bottom:4.25em;display:flex;width:100%;height:150px;justify-content:center}.titleWithImages>h2{padding-top:55px;margin-left:10px;margin-right:10px;justify-content:center}.moneyGreenBg{background-color:rgba(82,110,50,.2)}.single-wide{padding:1.25em;border-radius:25px;margin-top:40px;color:#000;width:90%}.single-wide>h3{display:flex;justify-content:center}.trippleSplit{display:flex;justify-content:space-between;flex-direction:row}.trippleSplit>p{width:28%}#routerView{background-color:rgba(250,255,255,.9);width:80%;display:flex;align-self:center;align-items:center;flex-flow:column}#footerNav{width:100%;margin-bottom:50px;display:flex;align-self:center;justify-content:center}.pokerChip{max-height:10em;max-width:10em}@media all and (max-width: 1250px){.info-split-duo{flex-flow:column;width:100%}.titleWithImages>h2{padding-top:0;margin-left:0;margin-right:0}}@media all and (max-width: 400px){.HomeContainer>iframe{height:255px}.afLinkImg,.centerMainImg{width:80%}.chainLinkFlank{display:none}#footerNav{width:100%}.titleWithImages{margin-bottom:70px}.triple-wide{flex-flow:column}.second-container,.third-container,.first-container{width:100% !important;padding:10px;min-width:0}.single-wide{width:100%;justify-content:center;flex-direction:column}.single-wide p{width:100%}.second-container{overflow:hidden}.second-container>img{overflow:hidden;width:80%}img.center{align-self:stretch}#fremontDropdown,#stripDropdown{left:0}}.shimmer{text-align:center;color:rgba(0,0,0,.7);background:-webkit-gradient(linear, left top, right top, from(#000), to(#fff), color-stop(0.3, green));background:-moz-gradient(linear, left top, right top, from(#000), to(#fff), color-stop(0.3, green));background:gradient(linear, left top, right top, from(#000), to(#fff), color-stop(0.3, green));-webkit-background-size:125px 100%;-moz-background-size:125px 100%;background-size:125px 100%;-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;-webkit-animation-name:shimmer;-moz-animation-name:shimmer;animation-name:shimmer;-webkit-animation-duration:4s;-moz-animation-duration:4s;animation-duration:4s;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;animation-iteration-count:infinite;background-repeat:no-repeat;background-position:0 0;background-color:#fff;cursor:pointer}@-moz-keyframes shimmer{0%{background-position:top left}100%{background-position:top right}}@-webkit-keyframes shimmer{0%{background-position:top left}100%{background-position:top right}}@-o-keyframes shimmer{0%{background-position:top left}100%{background-position:top right}}@keyframes shimmer{0%{background-position:top left}100%{background-position:top right}}","",{version:3,sources:["webpack://./src/scss/navbar.scss","webpack://./src/scss/variables.scss","webpack://./src/scss/trippleWide.scss","webpack://./src/app.scss","webpack://./src/scss/mixins.scss"],names:[],mappings:"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",sourcesContent:["nav{\n  width: 80%;\n  background-color: black;\n  color: $navLinkColor;\n  align-self: center;\n}\n.navbar-toggler-icon,\n.navbar-toggler-icon::before,\n.navbar-toggler-icon::after {\n  background-color: $navLinkColor;\n  border-radius: 3px;\n}\nnav{ *:not(:hover){\n    color: $navLinkColor !important;\n    text-decoration: solid;\n  }\n}\nli:not(:has(a, b)),\nul:not(:has(.nav-item)){\n  display: none;\n}\nul.navbar-nav *:empty,\nul.navbar-nav:empty{\n  margin: 0;\n}\n.dropdown-submenu {\n  position: relative;\n}\n\n.dropdown-submenu .dropdown-menu {\n  right: auto;\n  left: 70%;\n}\n\n.navbar-nav li ul.dropdown-menu {\n    display: block;\n    right: auto;\n    left: 70%;\n}\n#stripDropdown > li.freemont-item{\n  display: none;\n}\n.navbar-nav li > ul.dropdown-menu {\n  opacity: 0;\n  transition: opacity $navTransitionInTime ease-in;\n  display: none;\n  pointer-events: none; /* Disable pointer events to prevent interaction when submenu is hidden */\n}\n\n.navbar-nav li:hover > ul.dropdown-menu {\n  opacity: 1;\n  display: block;\n  pointer-events: auto; /* Enable pointer events when submenu is visible */\n}\nnav{\n  a,\n  nav-link:focus,\n  .nav-link:hover,\n  a.nav-link,\n  a.nav-item,\n  a:-webkit-any-link {\n      color: white;\n      text-decoration-color: $navLinkColor;\n      cursor: pointer;\n      text-decoration: none;\n  }\n}\n\nul.navbar-nav:not(:has(.nav-item)){\n  margin-right: 0 !important;\n}\n\nnav li{\n  margin: auto;\n  font-size: 14px;\n}\nnav ul.dropdown-menu {\n  background-color: black;\n}\n\nnavbar.fixed,\n.fixed{\n  position: fixed !important;\n  z-index: 1;\n}\nnav .dropdown-menu li:not(:empty){\n  padding: 4px 8px;\n}\n\n#navTogglerBtn{\n  width: 50px;\n}\n\n#gamblingDropdown,\n#fAndDDropdown,\n#dealsDropdown,\n#fremontDropdown,\n#stripDropdown,\n#hotelsDropdown{\n  padding: 0;\n  border: 1px solid $navLinkColor;\n  max-height: 400px;\n}\n\n#gamblingDropdown,\n#fAndDDropdown,\n#dealsDropdown,\n#fremontDropdown,\n#stripDropdown{\n  overflow-y: scroll;\n}\n#dealsDropdown{\n  overflow: visible;\n}\n#fremontDropdown,\n#stripDropdown{\n  // position: absolute;\n  /* width: 350px; */\n  // left: 132px;\n}\n\n/* Targets devices with a maximum width of 480px (common for cell phones) */\n@media (max-width: 480px) {\n  #dealsDropdown,\n  #fremontDropdown,\n  #fAndDDropdown,\n  #gamblingDropdown,\n  #stripDropdown,\n  #hotelsDropdown{\n    padding: 0;\n    border: 1px solid $navLinkColor;\n    max-height: 400px;\n    overflow: auto;\n  }\n}\n\n/* Targets devices with a maximum width of 767px (covering more cell phones and small tablets) */\n@media (max-width: 767px) {\n  #dealsDropdown,\n  #fremontDropdown,\n  #gamblingDropdown,\n  #fAndDDropdown,\n  #stripDropdown,\n  #hotelsDropdown{\n    padding: 0;\n    border: 1px solid $navLinkColor;\n    max-height: 400px;\n    overflow: auto;\n  }\n}\n","$background-image: url('../static/VegasBackground01.png');\n\n$primary-color: #020c30;\n$green-bg-color: rgba(82, 110, 50, 0.2);\n\n$navTransitionInTime: 0s;\n$navTransitionOutTime: 1s;\n\n$paddingBottomDefault: 4.25em;\n$paddingLeftRightDefault: 1.25em;\n$paddingTopDefault: 1.25em;\n$paddingDefault: 1.25em;\n\n$pokerChipHeightWidth: 10em;\n\n$navLinkColor: white;\n$linkColor: green;\n",".triple-wide,\n.info-split-duo{\n  margin-top: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: row;\n  justify-content: center;\n}\n.rooms.info-split-duo {\n    flex-flow: column;\n}\n.third-container,\n.first-container{\n  align-content: center;\n  padding: $paddingDefault;\n  min-width: 50%;\n}\n.triple-wide .first-container,\n.triple-wide .third-container{\n  width: 25%;\n  min-width: inherit;\n}\n.second-container{\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: $paddingDefault;\n}\n.triple-wide .second-container{\n  width: 65%;\n  min-width: inherit;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n","@import './scss/variables.scss';\n@import './scss/mixins.scss';\n@import './scss/navbar.scss';\n@import './scss/trippleWide.scss';\n\nbody{\n  width: 100vw;\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  padding-bottom: 100px;\n  background: linear-gradient(to bottom, #e0e0e0, #676767);\n  backdrop-filter: grayscale(1);\n  min-height: 100vh;\n  /* Create the parallax scrolling effect */  \n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nbody video{\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  object-fit: cover;\n}\nh2{\n  text-align: center;\n}\nul {\n  list-style-type: none;\n  display: flex;\n  justify-content: center;\n  margin-left: 0;\n  padding-left: 0;\n}\na{\n  color: $linkColor;\n}\n\n.flex{\n  @include flex;\n}\n.col{\n  @include flexCol;\n}\n\n.MainContainer{\n  height: 100%;\n  width: 100%;\n  @include flexCenterCol;\n}\n\n.MainContainer > iframe{\n    height: 352px;;\n    background-color: black;\n}\n.TitleImg,\n.centerMainImg{\n  margin-bottom: 20px;\n}\n.centerMainImg img{\n  height: 230px;\n  width: 100%;\n  max-width: 500px;\n}\n.TitleImg img{\n  width: 100%;\n  max-width: 420px;\n}\n.contentContainer{\n  display: flex;\n  flex-flow: column;\n}\n.center{\n  @include flexCenter;\n}\n\n.afLink{\n    justify-content: center;\n    width: 100%;\n    margin-bottom: 20px;\n}\n.afLink > a:not(.chainLink){\n  justify-content: center;\n  width: 100%;\n}\n\n.afLinkImg{\n  width: 100%;\n  max-width: 468px;\n}\n\n.titleWithImages{\n  margin-top: $paddingDefault;\n  margin-bottom: $paddingBottomDefault;\n  display: flex;\n  width: 100%;\n  height: 150px;\n  justify-content: center;\n}\n\n.titleWithImages > h2{\n  padding-top: 55px;\n  margin-left: 10px;\n  margin-right: 10px;\n  justify-content: center;\n\n}\n\n.moneyGreenBg{\n  background-color: rgba(82, 110, 50, .2);\n}\n\n.single-wide{\n  padding: $paddingDefault;\n  border-radius: 25px;\n  margin-top: 40px;\n  color: black;\n  width: 90%;\n}\n\n.single-wide > h3{\n  display: flex;\n  justify-content: center;\n}\n.trippleSplit{\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n}\n.trippleSplit > p{\n  width: 28%;\n}\n\n#routerView{\n  background-color: rgba(250, 255, 255, 0.9);\n  width: 80%;\n  display: flex;\n  align-self: center;\n  align-items: center;\n  flex-flow: column;\n}\n\n#footerNav{\n  width: 100%;\n  margin-bottom: 50px;\n  display: flex;\n  align-self: center;\n  justify-content: center;\n}\n\n.pokerChip{\n  max-height: $pokerChipHeightWidth;\n  max-width: $pokerChipHeightWidth;\n}\n\n@media all and (max-width: 1250px) {\n  .info-split-duo{\n    flex-flow: column;\n    width: 100%\n  }\n\n  .titleWithImages > h2{\n    padding-top: 0;\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n\n\n@media all and (max-width: 400px) {\n  .HomeContainer > iframe{\n    height: 255px;\n  }\n  .afLinkImg,\n  .centerMainImg{\n    width: 80%;\n  }\n  .chainLinkFlank{\n    display: none;\n  }\n  #footerNav{\n       width: 100%;\n   }\n\n   .titleWithImages{\n     margin-bottom: 70px;\n   }\n   .triple-wide{\n     flex-flow: column;\n   }\n   .second-container,\n   .third-container,\n   .first-container {\n       width: 100% !important;\n       padding: 10px;\n       min-width: 0;\n   }\n   .single-wide{\n     width: 100%;\n     justify-content: center;\n     flex-direction: column;\n   }\n   .single-wide p{\n     width: 100%;\n   }\n   .second-container{\n     overflow: hidden;\n   }\n   .second-container > img{\n     overflow: hidden;\n     width: 80%;\n   }\n   img.center {\n    align-self: stretch;\n  }\n  #fremontDropdown,\n  #stripDropdown {\n    left: 0;\n  }\n}\n\n\n.shimmer {\n\t\ttext-align: center;\n\t\tcolor: rgba(0, 0, 0, .7);\n\t\tbackground: -webkit-gradient(linear, left top, right top, from(#000), to(#fff), color-stop(0.3, green));\n\t\tbackground: -moz-gradient(linear, left top, right top, from(#000), to(#fff), color-stop(0.3, green));\n\t\tbackground: gradient(linear, left top, right top, from(#000), to(#fff), color-stop(0.3, green));\n\t\t-webkit-background-size: 125px 100%;\n\t\t-moz-background-size: 125px 100%;\n\t\tbackground-size: 125px 100%;\n\t\t-webkit-background-clip: text;\n\t\t-moz-background-clip: text;\n\t\tbackground-clip: text;\n\t\t-webkit-animation-name: shimmer;\n\t\t-moz-animation-name: shimmer;\n\t\tanimation-name: shimmer;\n\t\t-webkit-animation-duration: 4s;\n\t\t-moz-animation-duration: 4s;\n\t\tanimation-duration: 4s;\n\t\t-webkit-animation-iteration-count: infinite;\n\t\t-moz-animation-iteration-count: infinite;\n\t\tanimation-iteration-count: infinite;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: 0 0;\n\t\tbackground-color: #fff;\n    cursor: pointer;\n\n}\n\n@-moz-keyframes shimmer {\n\t\t0% {\n\t\t\t\tbackground-position: top left;\n\t\t}\n\t\t100% {\n\t\t\t\tbackground-position: top right;\n\t\t}\n}\n\n@-webkit-keyframes shimmer {\n\t\t0% {\n\t\t\t\tbackground-position: top left;\n\t\t}\n\t\t100% {\n\t\t\t\tbackground-position: top right;\n\t\t}\n}\n\n@-o-keyframes shimmer {\n\t\t0% {\n\t\t\t\tbackground-position: top left;\n\t\t}\n\t\t100% {\n\t\t\t\tbackground-position: top right;\n\t\t}\n}\n\n@keyframes shimmer {\n\t\t0% {\n\t\t\t\tbackground-position: top left;\n\t\t}\n\t\t100% {\n\t\t\t\tbackground-position: top right;\n\t\t}\n}\n","@mixin flex{\n  display: flex;\n}\n@mixin flexCol{\n  display: flex;\n  flex-flow: column;\n}\n@mixin flexCenterCol{\n  display: flex;\n  align-items: center;\n  flex-flow: column;\n}\n@mixin flexCenter{\n  display: flex;\n  align-self: center;\n  align-items: center;\n  justify-content: center;\n}\n"],sourceRoot:""}]),t.A=r},"app.html":function(n,t,o){o.r(t);var e=o(4385),i=o.n(e),a=new URL(o(7833),o.b),r=new URL(o(8646),o.b),A='<template class="MainAppTemplate">\n  <div class="contentContainer">\n    <video id="background-video" autoPlay loop muted playsinline src="'+i()(a)+'" type="video/mp4">\n    </video>\n    \x3c!-- <div class="washer">  </div> --\x3e\n    <div class="centerMainImg center">\n      <img src="'+i()(r)+'" alt="">\n    </div>\n\n    <nav class="navbar navbar-expand-lg" id="topNav">\n      <div class="container-fluid">\n        <button class="navbar-toggler" id="navTogglerBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n        <div class="collapse navbar-collapse" id="navbarSupportedContent">\n          <ul class="navbar-nav me-auto mb-2 mb-lg-0" repeat.for="row of router.settings.navItems">\n            <li class="nav-item dropdown" if.bind="row.topLvl && !row.hasSubMenu">\n              <a class="nav-link" href.bind="row.href" click.capture="onNavClick(row.href)">${row.title}</a>\n            </li>\n            <li class="nav-item dropdown dropend" if.bind="row.title == \'Top 12 Deals\'">\n              <a class="dropdown-toggle detailsLink" href="#" aria-expanded="false" data-bs-toggle="dropdown" data-bs-target="#dealsDropdown" aria-controls="dealsDropdown" >Top 12 Deals</a>\n              <ul id="dealsDropdown" class="dropdown-menu" aria-labelledby="dealsDropdown">\n                <li class="nav-item" repeat.for="subrow of router.settings.navItems">\n                  <a class="dropdown-item" if.bind="subrow.parent == \'topdeals\'" click.capture="onNavClick(subrow.href)">${subrow.title}</a>\n                </li>\n              </ul>\n            </li>\n            <li class="nav-item dropdown dropend" if.bind="row.title == \'Hotels\'">\n              <a class="nav-item dropdown-toggle hotelLink" aria-expanded="false" data-bs-toggle="dropdown" data-bs-target="#hotelsDropdown">${row.title}</a>\n              <ul id="hotelsDropdown" class="dropdown-menu" aria-labelledby="navbarDropdown">\n                <li class="nav-item dropdown">\n                  <a class="dropdown-toggle fremontLink" href="#" aria-expanded="false" data-bs-toggle="dropdown" data-bs-target="#fremontDropdown" aria-controls="fremontDropdown" >Hotels on Fremont</a>\n                  <ul id="fremontDropdown" class="dropdown-menu" aria-labelledby="fremontDropdown">\n                    <li repeat.for="subitem of router.hotels" if.bind="subitem.location == \'fremont\'">\n                      <a class="dropdown-item freemont-item" click.capture="onHotelNavClick(parseHotelName(subitem.name))">${subitem.title}</a>\n                    </li>\n                  </ul>\n                </li>\n                <li class="nav-item dropdown dropend">\n                  <a class="dropdown-toggle stripLink" href="#" aria-expanded="false" data-bs-toggle="dropdown" data-bs-target="#stripDropdown" aria-controls="stripDropdown" >Hotels on The Strip</a>\n                  <ul id="stripDropdown" class="dropdown-menu" aria-labelledby="stripDropdown">\n                    <li repeat.for="subitem of router.hotels" if.bind="subitem.location == \'strip\'"">\n                      <a class="dropdown-item strip-item"  click.capture="onHotelNavClick(parseHotelName(subitem.name))">${subitem.title}</a>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n            <li class="nav-item dropdown dropend" if.bind="row.title == \'Entertainment\'">\n              <a class="dropdown-toggle detailsLink" href="#" aria-expanded="false" data-bs-toggle="dropdown" data-bs-target="#dealsDropdown" aria-controls="dealsDropdown" >Entertainment</a>\n              <ul id="dealsDropdown" class="dropdown-menu" aria-labelledby="dealsDropdown">\n                <li class="nav-item" repeat.for="subrow of router.settings.navItems">\n                  <a class="dropdown-item" if.bind="subrow.parent == \'entertainment\'" click.capture="onNavClick(subrow.href)">${subrow.title}</a>\n                </li>\n                \x3c!-- <li class="nav-item dropdown dropend">\n                  <a class="dropdown-toggle stripLink" href="#" aria-expanded="false" data-bs-toggle="dropdown" data-bs-target="#aeDropdown" aria-controls="aeDropdown" >Adult Entertainment</a>\n                  <ul id="aeDropdown" class="dropdown-menu" aria-labelledby="aeDropdown">\n                    <li repeat.for="sr of router.settings.navItems">\n                      <a if.bind="sr.parent == \'ae\'" class="dropdown-item" click.capture="onNavClick(sr.href)">${sr.name}</a>\n                    </li>\n                  </ul>\n                </li> --\x3e\n              </ul>\n            </li>\n            <li class="nav-item dropdown dropend" if.bind="row.title == \'Food & Drink\'">\n              <a class="dropdown-toggle detailsLink" href="#" aria-expanded="false" data-bs-toggle="dropdown" data-bs-target="#fAndDDropdown" aria-controls="fAndDDropdown" >Food & Drink</a>\n              <ul id="fAndDDropdown" class="dropdown-menu" aria-labelledby="fAndDDropdown">\n                <li class="nav-item" repeat.for="subrow of router.settings.navItems">\n                  <a class="dropdown-item" if.bind="subrow.parent == \'foodanddrink\' || subrow.title == \'Coupons\'" click.capture="onNavClick(subrow.href)">${subrow.title}</a>\n                </li>\n              </ul>\n            </li>\n            <li class="nav-item dropdown dropend" if.bind="row.title == \'Gambling\'">\n              <a class="dropdown-toggle detailsLink" href="#" aria-expanded="false" data-bs-toggle="dropdown" data-bs-target="#gamblingDropdown" aria-controls="gamblingDropdown" >Gambling</a>\n              <ul id="gamblingDropdown" class="dropdown-menu" aria-labelledby="gamblingDropdown">\n                <li class="nav-item" repeat.for="subrow of router.settings.navItems" if.bind="subrow.parent == \'gambling\'">\n                  <a class="dropdown-toggle detailsLink" if.bind="subrow.parent == \'gambling\'" click.capture="onNavClick(subrow.href)" href="#" aria-expanded="false" data-bs-toggle="dropdown" data-bs-target="#gambling${subrow.title}Dropdown" aria-controls="gamblingDropdown" >${subrow.title}</a>\n                  <ul id=`#gambling${subrow.title}Dropdown` class="dropdown-menu" aria-labelledby=`#gambling${subrow.title}Dropdown`>\n                    <li class="nav-item" repeat.for="subrowmini of router.settings.navItems" if.bind="subrowmini.parent ==  subrow.name">\n                      <a class="dropdown-item" if.bind="subrowmini.parent == subrow.name" click.capture="onNavClick(subrowmini.href)">${subrowmini.title}</a>\n                    </li>\n                    <li class="nav-item" if.bind="subrow.name == \'gamblingWhereTo\'">\n                      <a class="dropdown-toggle detailsLink" href="#" aria-expanded="false" data-bs-toggle="gamblingWhereToDropdownStrip" data-bs-target="dropdown" aria-controls="gamblingWhereToDropdownStrip" > The Strip</a>\n                      <ul id="gamblingWhereToDropdownStrip" class="dropdown-menu" aria-labelledby="gamblingWhereToDropdownStrip">\n                        <li class="nav-item" repeat.for="subrowtwo of router.settings.navItems" if.bind="subrowtwo.parent ==  \'gamblingWhereToStrip\'">\n                          <a class="dropdown-item" if.bind="subrowtwo.parent ==  \'gamblingWhereToStrip\'" click.capture="onNavClick(subrowtwo.href)">${subrowtwo.title}</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li class="nav-item" if.bind="subrow.name == \'gamblingWhereTo\'">\n                      <a class="dropdown-toggle detailsLink" href="#" aria-expanded="false" data-bs-toggle="gamblingWhereToDropdownFremont" data-bs-target="dropdown" aria-controls="gamblingWhereToDropdownFremont" > Fremont St</a>\n                      <ul id="gamblingWhereToDropdownFremont" class="dropdown-menu" aria-labelledby="gamblingWhereToDropdownFremont">\n                        <li class="nav-item dropstart" repeat.for="subrowtwo of router.settings.navItems" if.bind="subrowtwo.parent == \'gamblingWhereToFremont\'">\n                          <a class="dropdown-item" if.bind="subrowtwo.parent == \'gamblingWhereToFremont\'" click.capture="onNavClick(subrowtwo.href)">${subrowtwo.title}</a>\n                        </li>\n                      </ul>\n                    </li>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n        </div>\n      </div>\n    </nav>\n\n   <router-view id="routerView" class="center"></router-view>\n\n  </div>\n\n  <div class="flex center afLink">\n    <a href="https://vegas.vdvm.net/c/2091782/271410/4221" id="271410" class="chainLink chainLinkFlank"><img src="//a.impactradius-go.com/display-ad/4221-271410" border="0" alt="" width="120" height="60"/></a><img height="0" width="0" src="//vegas.vdvm.net/i/2091782/271410/4221" style="position:absolute;visibility:hidden;" border="0" />\n    <a href="https://vegas.vdvm.net/c/2091782/268707/4221" id="268707" class="chainLink center"><img src="//a.impactradius-go.com/display-ad/4221-268707" class="afLinkImg" border="0" alt="" height="60"/></a><img height="0" width="0" src="//vegas.vdvm.net/i/2091782/268707/4221" style="position:absolute;visibility:hidden;" border="0" />\n    <a href="https://vegas.vdvm.net/c/2091782/271410/4221" id="271410" class="chainLink chainLinkFlank"><img src="//a.impactradius-go.com/display-ad/4221-271410" border="0" alt="" width="120" height="60"/></a><img height="0" width="0" src="//vegas.vdvm.net/i/2091782/271410/4221" style="position:absolute;visibility:hidden;" border="0" />\n  </div>\n\n</template>\n';t.default=A},3338:function(n,t,o){var e=o(5072),i=o.n(e),a=o(7825),r=o.n(a),A=o(7659),l=o.n(A),d=o(5056),s=o.n(d),p=o(540),c=o.n(p),g=o(1113),m=o.n(g),C=o(653),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),i()(C.A,f),C.A&&C.A.locals&&C.A.locals}}]);