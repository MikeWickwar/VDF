import "./blackjack101.css"
import $ from "jquery"

export class blackjack101 {
  onLoad = () => {
    console.log("blackjack101 onload...")
  }
}

const _blackjack101 = new blackjack101();
$(document).ready(() => { _blackjack101.onLoad()})
