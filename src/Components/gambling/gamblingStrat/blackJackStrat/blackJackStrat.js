import "./blackJackStrat.css"
import $ from "jquery"

export class blackJackStrat {
  onLoad = () => {
    console.log("blackJackStrat onload...")
  }
}

const _blackJackStrat = new blackJackStrat();
$(document).ready(() => { _blackJackStrat.onLoad()})
