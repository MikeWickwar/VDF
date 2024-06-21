import $ from "jquery"

export class bestStrip {
  onLoad = () => {
    console.log("bestStrip onload...")
  }
}

const _bestStrip = new bestStrip();
$(document).ready(() => { _bestStrip.onLoad()})
