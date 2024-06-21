import "./transportation.css"
import $ from "jquery"

export class transportation {
  onLoad = () => {
    console.log("transportation onload...")
  }
}

const _transportation = new transportation();
$(document).ready(() => { _transportation.onLoad()})
