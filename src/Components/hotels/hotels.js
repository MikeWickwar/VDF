import "./hotels.css"
import $ from "jquery"


export class hotels {
  onLoad = () => {
    console.log("hotels onload...")

  }
  getGame = (game) => {
    console.log("GAME: " + this.games[game])
    return this.games[game]
  }
  activate(params, routeConfig, navigationInstruction) {
    this.hotel = routeConfig.settings.hotel;
    if (routeConfig.settings.hotel) {
      this.rooms = routeConfig.settings.hotel.rooms;
    }
    this.games = routeConfig.settings.games;
    console.log(this.hotel);
  }
}

  const _hotels = new hotels();
$(document).ready(() => { _hotels.onLoad()})
