import "./topDeals.css"
import $ from "jquery"

export class topDeals {
  onLoad = () => {
    console.log("topDeals onload...")
  }
}

const _topDeals = new topDeals();
$(document).ready(() => { _topDeals.onLoad()})
