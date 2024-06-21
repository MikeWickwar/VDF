import "./fooddrink.css"
import $ from "jquery"

export class fooddrink {
  onLoad = () => {
    console.log("fooddrink onload...")
  }
}

const _fooddrink = new fooddrink();
$(document).ready(() => { _fooddrink.onLoad()})
