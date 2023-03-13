import "./hotels.css"
import $ from "jquery"


export class hotels {
  onLoad = () => {
    console.log("hotels onload...")

  }
  activate(params, routeConfig, navigationInstruction) {
    this.hotel = routeConfig.settings.hotel;
    this.rooms = routeConfig.settings.hotel.rooms;
    console.log(this.hotel);
  }

}

const _hotels = new hotels();
$(document).ready(() => { _hotels.onLoad()})
