import "./topfooddeals.css"
import $ from "jquery"

export class topfooddeals {
  onLoad = () => {
    console.log("topfooddeals onload...")
  }
}

const _topfooddeals = new topfooddeals();
$(document).ready(() => { _topfooddeals.onLoad()})
