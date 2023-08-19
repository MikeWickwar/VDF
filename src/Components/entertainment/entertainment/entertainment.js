import $ from "jquery"

export class entertainment {
  onLoad = () => {
    console.log("entertainment onload...")
  }
}

const _entertainment = new entertainment();
$(document).ready(() => { _entertainment.onLoad()})
