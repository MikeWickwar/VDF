import "./tripsandtours.css"
import $ from "jquery"

export class tripsandtours {
  onLoad = () => {
    console.log("tripsandtours onload...")
  }
}

const _tripsandtours = new tripsandtours();
$(document).ready(() => { _tripsandtours.onLoad()})
