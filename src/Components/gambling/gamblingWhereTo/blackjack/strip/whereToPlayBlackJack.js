import "./whereToPlayBlackJack.css"
import $ from "jquery"

export class whereToPlayBlackJack {
  onLoad = () => {
    console.log("whereToPlayBlackJack onload...")
  }
}

const _whereToPlayBlackJack = new whereToPlayBlackJack();
$(document).ready(() => { _whereToPlayBlackJack.onLoad()})
