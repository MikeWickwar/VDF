import "./gamblingStrat.css"
import $ from "jquery"

export class gamblingStrat {
  onLoad = () => {
    console.log("gamblingStrat onload...")
  }
}

const _gamblingStrat = new gamblingStrat();
$(document).ready(() => { _gamblingStrat.onLoad()})
