import "./rouletteStrat.css"
import $ from "jquery"

export class rouletteStrat {
  onLoad = () => {
    console.log("rouletteStrat onload...")
  }
}

const _rouletteStrat = new rouletteStrat();
$(document).ready(() => { _rouletteStrat.onLoad()})
