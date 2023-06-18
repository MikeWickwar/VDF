import "./whereToPlayVideoPokerFremont.css"
import $ from "jquery"

export class whereToPlayVideoPokerFremont {
  onLoad = () => {
    console.log("whereToPlayVideoPokerFremont onload...")
  }
}

const _whereToPlayVideoPokerFremont = new whereToPlayVideoPokerFremont();
$(document).ready(() => { _whereToPlayVideoPokerFremont.onLoad()})
