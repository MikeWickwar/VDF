import "./fremonthappyhour.css"
import $ from "jquery"

export class fremonthappyhour {
  onLoad = () => {
    console.log("fremonthappyhour onload...")
  }
}

const _fremonthappyhour = new fremonthappyhour();
$(document).ready(() => { _fremonthappyhour.onLoad()})
