import "./airfare.css"
import $ from "jquery"

export class airfare {
  onLoad = () => {
    console.log("airfare onload...")
  }
}

const _airfare = new airfare();
$(document).ready(() => { _airfare.onLoad()})
