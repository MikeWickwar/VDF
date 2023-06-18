import "./whereToPlayRoulette.css"
import $ from "jquery"

export class whereToPlayRoulette {
  onLoad = () => {
    console.log("whereToPlayRoulette onload...")
  }
}

const _whereToPlayRoulette = new whereToPlayRoulette();
$(document).ready(() => { _whereToPlayRoulette.onLoad()})
