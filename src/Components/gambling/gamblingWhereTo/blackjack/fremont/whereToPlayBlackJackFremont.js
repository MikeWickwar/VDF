import "./whereToPlayBlackJackFremont.css"
import $ from "jquery"

export class whereToPlayBlackJackFremont {
  onLoad = () => {
    console.log("whereToPlayBlackJackFremont onload...")
  }
}

const _whereToPlayBlackJackFremont = new whereToPlayBlackJackFremont();
$(document).ready(() => { _whereToPlayBlackJackFremont.onLoad()})
