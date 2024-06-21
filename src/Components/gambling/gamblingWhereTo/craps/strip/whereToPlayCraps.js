import "./whereToPlayCraps.css"
import $ from "jquery"

export class whereToPlayCraps {
  onLoad = () => {
    console.log("whereToPlayCraps onload...")
  }
}

const _whereToPlayCraps = new whereToPlayCraps();
$(document).ready(() => { _whereToPlayCraps.onLoad()})
