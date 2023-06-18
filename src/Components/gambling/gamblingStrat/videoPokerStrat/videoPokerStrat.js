import "./videoPokerStrat.css"
import $ from "jquery"

export class videoPokerStrat {
  onLoad = () => {
    console.log("videoPokerStrat onload...")
  }
}

const _videoPokerStrat = new videoPokerStrat();
$(document).ready(() => { _videoPokerStrat.onLoad()})
