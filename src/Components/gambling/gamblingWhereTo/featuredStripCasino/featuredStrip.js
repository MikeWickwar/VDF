import "./featuredStrip.css"
import $ from "jquery"

export class featuredStrip {
  onLoad = () => {
    console.log("featuredStrip onload...")
  }
}

const _featuredStrip = new featuredStrip();
$(document).ready(() => { _featuredStrip.onLoad()})
