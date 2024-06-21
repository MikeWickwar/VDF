import $ from "jquery"

export class contactUs {
  onLoad = () => {
    console.log("contactUs onload...")
  }
}

const _contactUs = new contactUs();
$(document).ready(() => { _contactUs.onLoad()})
