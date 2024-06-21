import "./roulette101.css"
import $ from "jquery"

export class roulette101 {
  onLoad = () => {
    console.log("roulette101 onload...")
  }
}

const _roulette101 = new roulette101();
$(document).ready(() => { _roulette101.onLoad()})
