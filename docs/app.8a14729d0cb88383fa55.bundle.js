"use strict";(self.webpackChunkVegasDealFinder=self.webpackChunkVegasDealFinder||[]).push([[143],{app:function(e,n,o){o.r(n),o.d(n,{App:function(){return s}});var t=o(9755),a=o.n(t);o(9079),o(9909);class s{onLoad(){console.log("App onload..."),a()(window).scroll((()=>{window.pageYOffset>255?a()("#topNav").addClass("fixed"):a()("#topNav").removeClass("fixed")}))}configureRouter(e,n){e.title="Vegas Deal Finder",e.map([{route:["","home"],name:"home",moduleId:"./components/home/home",nav:!0,title:"Home"},{route:["topdeals","topdeals"],name:"topdeals",moduleId:"./components/home/home",nav:!0,title:"Top 12 Deals"},{route:["toptips","topTips"],name:"toptips",moduleId:"./components/topTips/topTips",nav:!0,title:"Top 10 Tips"},{route:["hotels","hotels"],name:"hotels",moduleId:"./components/home/home",nav:!0,title:"Hotels",hotels:!0},{route:["entertainment","entertainment"],name:"entertainment",moduleId:"./components/home/home",nav:!0,title:"Entertainment"},{route:["foodanddrink","foodanddrink"],name:"foodanddrink",moduleId:"./components/home/home",nav:!0,title:"Food & Drink"},{route:["gambling","gambling"],name:"gambling",moduleId:"./components/home/home",nav:!0,title:"Gambling"},{route:["contactus","contactus"],name:"contactus",moduleId:"./components/home/home",nav:!0,title:"Contact Us"}]),this.router=n}}const i=new s;a()(document).ready((()=>{i.onLoad()}))},"components/home/home":function(e,n,o){o.r(n),o.d(n,{home:function(){return s}});var t=o(9755),a=o.n(t);class s{constructor(){this.onLoad=()=>{console.log("home onload...")}}}const i=new s;a()(document).ready((()=>{i.onLoad()}))},"components/topTips/topTips":function(e,n,o){o.r(n),o.d(n,{topTips:function(){return s}});var t=o(9755),a=o.n(t);class s{constructor(){this.onLoad=()=>{console.log("topTips onload...")}}}const i=new s;a()(document).ready((()=>{i.onLoad()}))},main:function(e,n,o){o.d(n,{configure:function(){return a}});var t=JSON.parse('{"f":false,"K":false}');function a(e){e.use.standardConfiguration().feature("resources/index"),e.use.developmentLogging(t.f?"debug":"warn"),t.K&&e.use.plugin("aurelia-testing"),e.start().then((()=>e.setRoot("app")))}o(1015)},"resources/index":function(e,n,o){function t(e){}o.r(n),o.d(n,{configure:function(){return t}})},"app.html":function(e,n,o){o.r(n);var t=o(7091),a=o.n(t),s=new URL(o(9162),o.b),i=new URL(o(6306),o.b),r='<template class-"MainAppTemplate">\n  <div class="contentContainer">\n    <video id="background-video" autoplay loop muted playsinline>\n      <source src="'+a()(s)+'" type="video/mp4">\n    </video>\n    <div class="centerMainImg center">\n      <img src="'+a()(i)+'" alt="">\n    </div>\n\n\n\n     <nav class="navbar navbar-expand-lg" id="topNav">\n       <div class="container-fluid">\n         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n           <span class="navbar-toggler-icon"></span>\n         </button>\n         <div class="collapse navbar-collapse" id="navbarSupportedContent">\n           <ul class="navbar-nav me-auto mb-2 mb-lg-0" >\n             <li repeat.for = "row of router.navigation"  class="nav-item">\n                <a href.bind = "row.href">${row.title}</a>\n             </li>\n             \x3c!-- <li class="nav-item dropdown">\n               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n                 Dropdown\n               </a>\n               <ul class="dropdown-menu">\n                 <li><a class="dropdown-item" href="#">Action</a></li>\n                 <li><a class="dropdown-item" href="#">Another action</a></li>\n                 <li><hr class="dropdown-divider"></li>\n                 <li><a class="dropdown-item" href="#">Something else here</a></li>\n               </ul>\n             </li> --\x3e\n           </ul>\n         </div>\n       </div>\n     </nav>\n\n     <router-view id="routerView" class="center"></router-view>\n\n  </div>\n\n  <div class="flex center afLink">\n    <a href="https://vegas.vdvm.net/c/2091782/271410/4221" id="271410" class="chainLink chainLinkFlank"><img src="//a.impactradius-go.com/display-ad/4221-271410" border="0" alt="" width="120" height="60"/></a><img height="0" width="0" src="//vegas.vdvm.net/i/2091782/271410/4221" style="position:absolute;visibility:hidden;" border="0" />\n    <a href="https://vegas.vdvm.net/c/2091782/268707/4221" id="268707" class="chainLink center"><img src="//a.impactradius-go.com/display-ad/4221-268707" class="afLinkImg" border="0" alt="" height="60"/></a><img height="0" width="0" src="//vegas.vdvm.net/i/2091782/268707/4221" style="position:absolute;visibility:hidden;" border="0" />\n    <a href="https://vegas.vdvm.net/c/2091782/271410/4221" id="271410" class="chainLink chainLinkFlank"><img src="//a.impactradius-go.com/display-ad/4221-271410" border="0" alt="" width="120" height="60"/></a><img height="0" width="0" src="//vegas.vdvm.net/i/2091782/271410/4221" style="position:absolute;visibility:hidden;" border="0" />\n  </div>\n\n</template>\n';n.default=r},"components/home/home.html":function(e,n,o){o.r(n);var t=o(7091),a=o.n(t),s=new URL(o(3997),o.b),i=new URL(o(5819),o.b),r=new URL(o(641),o.b),d=a()(s),l=a()(i),h='<template>\n  <div class="MainContainer">\n    <iframe width="70%" src="https://www.youtube.com/embed/kx7GkZivydM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n  <div class="info-split-duo">\n    <div class="first-container">\n      <h2> YOU CAN BEAT VEGAS! </h2>\n      <p>\n        <text>&emsp;Vegas Deal Finder was created by two Deal Finding Experts with over 60 combined years of winning trips to Las Vegas. With Money Saving Tips on Airfare & Transportation to earning FREE Hotel Rooms, Food & Drink, and Entertainment, VDF gives you a secret advantage to beating Vegas.</text>\n      </p>\n      <p>\n        <text>&emsp;Vegas Deal Finder provides hundreds of money saving tips and tricks with our Top Vegas Deals, Current Vegas Promotions & Specials, and Expert Information on Gambling Techniques, Advanced Strategies, Earning comps, What Games to Play and Way More!.  Let us show you where the party is and what\'s happening in Vegas.</text>\n      </p>\n      <p>\n        <text>&emsp;WANT YOUR TRIP TO VEGAS TO PAY FOR ITSELF?\n              Vegas Deal Finder is your guide to an affordable Sin City vacation. Become a member today and start learning how you too can beat Las Vegas.\n              MEMBERSHIP START AT ONLY $7.99\n              Members often save over $500 on their Vegas trips and actually win money using our strategies! </text>\n      </p>\n    </div>\n    <div class="second-container .d-md-none">\n      <div class="flex center afLink">\n        <a href="https://vegas.vdvm.net/c/2091782/268707/4221" id="268707" class="center"><img class="afLinkImg" src="//a.impactradius-go.com/display-ad/4221-268707" border="0" alt="" height="60"/></a><img height="0" width="0" src="//vegas.vdvm.net/i/2091782/268707/4221" style="position:absolute;visibility:hidden;" border="0" />\n      </div>\n      <img src="'+d+'" alt="">\n    </div>\n  </div>\n\n  <div class="single-wide moneyGreenBg">\n    <div class="titleWithImages">\n      <img src="'+l+'" alt="">\n      <h2>How to Beat Vegas and Actually Win Money!</h2>\n      <img src="'+a()(r)+'" alt="">\n    </div>\n    <p>\n      <text>\n        You can win money in Vegas, its possible.  You just need to know how and where to make bets with the mathematical advantage over the casino.  I know, this sounds impossible, but we do it every trip to Las Vegas!  Our strategy of using casino gambling promotions allows us to make wagers with an almost 2 to 1 house advantage.  We have put together the entire strategy, and made a game of it.  Using our printable scorecard, map, instruction sheet and the gambling coupons from the books we recommend, you can do a quick walk in downtown Las Vegas along Fremont street visiting 10 different casinos and make over 18 wagers with a massive mathematical advantage over the casinos.  We call it...\n\n        <h3 class="shimmer">\n          The Fabulous Fremont Street Coupon Run!\n        </h3>\n\n      </text>\n    </p>\n\n  </div>\n\n  <div class="single-wide">\n    <h2>Vegas Deal Finder Top 10 Tips</h2>\n\n    <p>\n      <h4> 1. Get Players Cards  </h4>\n      Vegas Deal Finder Members get step by step instructions to get and use Players Cards at each casino to earn free meals, hotel rooms, shows, and gambling deals.\n    </p>\n\n    <p>\n      <h4>2. Use Coupons</h4>\n      VDF Members get detailed instructions on how and where to get gambling coupons like Match Plays, Buy One Get One Free, and Free Play, that give you an advantage over the house.\n    </p>\n\n    <p>\n      <h4>3. Drink for Free</h4>\n      VDF Members get the best strategies for getting free drinks, like drink specials and happy hours, or best techniques to getting your drinks cheap.\n    </p>\n\n    <p>\n      <h4>4. Play the Percentages</h4>\n      VDF Members get expert advice on what games to play, how to play them, where to play, and tips to win at the games with the lowest Casino Advantage.\n    </p>\n\n    <p>\n      <h4>5. Pay Less for Shows  </h4>\n      VDF Members get specific tips so that they never pay full price for show tickets, plus reviews and advice on what shows to see and when to go. Even get free shows.\n    </p>\n\n    <p>\n      <h4>6. Find the Best Transportation   </h4>\n      VDF Members get all the information they need to find free shuttles and the best options for getting around town during their visit to Las Vegas.\n    </p>\n\n    <p>\n      <h4>7. Eat Free Meals   </h4>\n      VDF Members get the secrets to eating at amazing buffets using coupons, little known specials, or comped meals to ensure you eat well without paying for it.\n    </p>\n\n    <p>\n      <h4>8. Stay in Comped Hotel Rooms    </h4>\n      VDF Members get valuable lessons on how to stay at expensive hotels without paying the high prices, getting upgrades, or getting your room for free.\n    </p>\n\n    <p>\n      <h4>9. Have Safe Adult Fun </h4>\n      VDF Members get important tips and techniques for how to have an incredible time in Sin City without having to worry about a thing.\n    </p>\n\n    <p>\n      <h4>10. Receive Updates on New Deals   </h4>\n      VDF Members get to stay up to date on every deal, coupon, casino special, show offer, and new development being offered in Las Vegas.\n    </p>\n\n  </div>\n\n  <div class="single-wide moneyGreenBg flex trippleSplit">\n    <p>\n      "I had no idea there were so many ways to save money in Vegas. The coupon run was really fun. I can\'t wait to get back" <font color="#98370d"> <em>David - New Mexico</em></font>\n    </p>\n\n    <p>\n      "Thanks for sharing so much awesome information in one place. I changed my BJ game and loved the progressive strategy" <font color="#98370d"> <em>Mark - South Carolina </em></font>\n    </p>\n\n    <p>\n      "My wife and I each earned a Free hotel night, a free buffet and $50 in free slot play. So glad I found VDF. I Love Deals". <font color="#98370d"> <em>Roger - California    </em></font>\n    </p>\n\n  </div>\n\n  <div id="chipInfo" class="single-wide flex center">\n    <img src="'+l+'" height="200px">\n    <p>Look for our VDF Best Bet chip, for our favorite pick in every category!!  We have searched thousands of deals and offers in Las Vegas and these Best Bet chips provide the quickest and easiest way to find a great Deal! </p>\n  </div>\n\n\n</div>\n</template>\n';n.default=h},"components/topTips/topTips.html":function(e,n,o){o.r(n);var t=o(7091),a=o.n(t),s=new URL(o(1579),o.b),i='\n<template>\n  <div class="MainContainer">\n    <div class="TitleImg center">\n      <img src="'+a()(s)+"\" alt=\"\">\n    </div>\n\n    <div class=\"single-wide\">\n      <p>\n        <h4>#1 - Use Players Cards: </h4>VDF TIP: Always signup for and use casino players cards.(They are Free). One of the most important moves when coming to Vegas and looking to start creating your own deals is to get a players card and use it where & when you play.  Most casinos offers some type of Free give away just for signing up. This could be free play, match plays, free food, or other trinkets.  Getting a players card allows the casino to track your gambling which can in turn generate comps (free complimentary things, like food, shows, rooms and more).  You might also start to receive additional offers from the casino for rooms, food and more via the mail and e-mail.  This is the easiest way to take advantage of all of the casinos promotional offers like coupons and giveaways. You can sign up at the casinos players club, make it the first stop at every casino.  For a list of Casinos with great sign up promotions,  Join VDF today and start mapping out your assault on Vegas !\n      </p>\n\n      <p>\n        <h4>#2 - Use Coupons:</h4>  At VDF we recommend utiziling every possible coupon offer available to you as a consumer.  Yes coupons in Vegas!! Buy one Get one free's, Casino Matchplay's, 1/2 Off Deals, Freebies and more. Many coupons are available from local guide books and directly from the casinos at check in.  Always use any gambling coupons that give you an advantage over the casino.  At VDF we purchase and use 2 specific coupon books every year and have for 15+ years. We strongly suggest you purchase these coupon books prior to your trip and take advantage of some truly amazing deals. These books are filled with great coupons, including everything you need to do the Fabulous VDF Fremont Street Coupon Run. (info available to our paid members.) Join VDF and save hundreds!!\n      </p>\n      <p>\n      <h4>#3 - Get complimentary drinks:</h4> Drinks are expensive in Vegas but they don't have to be. Casinos offer free drinks to customers who are gambling... or look like their gambling.  Simply put your players card and some money in a machine and order your cocktail.  We suggest playing near the cocktail station for quicker service and remember to always tip a minimum of one dollar per drink.  At VDF we recommend you not purchasing any drinks from the casino bars unless they are running a special, happy hour or just serve cheap drinks. Let VDF show you the Best Happy Hours on and off the Strip.  Be creative in where you purchase your drinks.  As a VDF Membership you have access to our best tips and techniques for getting free drinks with very little gambling involved. Join today and find out this and tons of other great techquies to save you money. Want drinks faster? Join VDF and let us show you how to drink quality Free beverages as fast as you want them.\n      </p>\n      <p>\n      <h4>#4 - Playing the percentages:</h4> Only play the games that offer the lowest Casino Advantage. The casino is packed with lights and sounds to draw you in. Knowing what games to play can make all the difference in the world.  VDF is here to show you exactly what games to play, how to play them and the best VDF strategies to actual win in Vegas. Cut the casino house advantage down to almost zero. Stay away from easy to play games like slots and the big wheel. These games are where the casinos make all their money. The easier to play the bigger the casino advantage. Let us teach you everything you need to know to minimize the house advantage. It's so important to learn and utilize the basic strategy and correct fundamental play for each game.  Using  perfect play strategies combined with free play and matchplay coupons gives the player a mathematical advantage over the casino.  At VDF we always want to wager when you have the advantage over the house.  Join today and try our Fremont Street Coupon run with a group of friends and see who wins more!! Average winnings are about $250 per person. Winning is fun! Or Rent a car and hit the off strip Run.\n      </p>\n      <p>\n      <h4>#5 - Shows:</h4> Don't pay full price for show tickets! Checkout both travelzoo.com and smartervegas.com for great option on discounted tickets.  For same day shows go to the Tix4tonight booths located on the Vegas strip and find shows for that night at less than half the cost.  For even more savings, in our member section we provide several suggestions on how to get even better discounts amd sometimes free show tickets.   Free shows are always better. Check it out by joining today.\n      </p>\n      <p>\n      <h4>#6 - Transportation:</h4> At VDF we feel using Uber and Lyft are always the better option over a cab. But there are even cheaper options.  If you want to really save every nickel on transportation then join today and checkout our members transportation section..  We provide a complete list of all the transportation options including buses and free shuttles that allow travel to and from the airport and around Vegas for free and close to free. Plus our VDF Top Pick to get from the airport to the Strip or Downtown for only $2. Become a VDF member now and learn how! Knowledge is power!\n      </p>\n      <p>\n      <h4>#7 - Food:</h4> Using a coupon or knowing where the best food is for the cheapest price is always the best option. Getting Free meals beats everything.  Breakfast buffets are a great way to save money. Get your coffee, juice, water and all the food you can eat for $10-$20. This is usually about the same as the cost of a Starbucks Venti and a muffin.  These all your can eat buffet options are even better with a two for one coupon.   Vegas offers every possible food option, we have found the meals and deals we like best and provide all that information in our member section. Find out the best places to eat on the Strip and on Fremont St in our members section. Join today!!! Let us show you how to eat for super cheap to free.\n      </p>\n      <p>\n      <h4>#8 - Drink Cheaply:</h4> If you want to save money in Vegas then avoid purchasing any drinks from expensive casino bars. By simply purchasing your booze in advance at a liquor store on the way to your hotel will always save you money. All casinos provide free ice to their hotel guests. Buy beers and liquor from the numerous Walgreens, CVS  and liquor stores on the strip and downtown.  You can walk down the Vegas strip with an open container without any problems.  At VDF we're always on the lookout for the best Happy Hour, secret promotions and drink specials along with bars with the cheapest drinks. Our members have access to the best deals in Vegas for drinking, happy hours, specials and just about everything else.  It's really easy to spend hundreds of dollars on drinks in Vegas. With so much fun and excitement the cocktails go down fast and easy. Become a VDF member and save hundreds on your next trip just on drinks.\n      </p>\n      <p>\n      <h4>#9 - Rooms:</h4> How to get a great room for free or very cheap.  There are several ways to get free rooms in Las Vegas. By gambling lots of money for a long time is the most common way. But there are other ways to get free rooms without gambling your hard earned money.  As a VDF member simply checkout our tips in the Hotel deal section to learn the tricks for getting free rooms, free upgrades and great views. Don't book a room or check in without learning our strategies first and let us show exacly where to book for the lowest rates. Join VDF today and start saving big!!!\n      </p>\n      <p>\n      <h4>#10 - Adult Entertainment:</h4>  At VDF we take our partying seriously. What happens in Vegas stays in Vegas.  With so many options for adult entertainment in Vegas is can be tough to know where to go, how to get there and what to expect. VDF members get access to the cheapest and best way to get to the clubs, get in for free and not spend all your money on one girl. We're committed to making your Vegas experience one to remember. Although prostitution appears legal in  Vegas.... it is not. However there are legal options if you know how and where. Join today and so many tips for saving big bucks. Learn all the tips for maximizing your money by joining today!!!\n      </p>\n      <p>\n      <h4>BONUS - The VDF top 12:</h4>  Get VDF's Best 12 Deals each and every month. Simply join VDF today and get access to Vegas Deal Finders Top 12 Best Deals in Vegas. Get deals and steals from rooms, food, shows, drinks, tours, transportation and so many more deals. The VDF Top 12 Deals is just one of so many great pages of amazing information. Get our 12 best deals of the month now by joining today!!!\n      </p>\n      <p>\n      <h4>BONUS - Your Ultimate Vegas Travel Site:</h4> You could spend a thousand hours (Thats 41.6 Days) surfing the net trying to get 3/4 of the information VDF Offers. Time is money and wasting your time digging through page after page of the same generic outdated information while maneuvering through hundreds of ad's, endless links, old pages with deals that don't exist anymore and articles written by the paid advertisers themselves. Or worse.... yelp.  They just give you the 10 highest paid advertisers. If you see an ad on our pages its because its actually an amazing deal. Often only for VDF members.  Our links go directly to the best way to access the lowest prices on rooms, shows, tours and more. Get all this now by joining today!!!\n      </p>\n    </div>\n  </div>\n\n</template>\n";n.default=i},9162:function(e,n,o){e.exports=o.p+"1583fb1fb2ab71a5dd42.mp4"},641:function(e,n,o){e.exports=o.p+"15e4bd98174dcb4934ee.png"},5819:function(e,n,o){e.exports=o.p+"4fd31babc07a37b2bfa7.png"},6306:function(e,n,o){e.exports=o.p+"ce821238c9f8746bda2b.png"},1579:function(e,n,o){e.exports=o.p+"676090cc878c079d3509.png"},3997:function(e,n,o){e.exports=o.p+"1ae52c70ec0bd406406a.jpg"}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[778,146,171,885,529,259,755,704],(function(){return n(4639),n(3231),n(7062)})),e.O()}]);