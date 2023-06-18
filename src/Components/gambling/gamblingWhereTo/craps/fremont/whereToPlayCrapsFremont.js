import "./whereToPlayCrapsFremont.css"
import $ from "jquery"

export class whereToPlayCrapsFremont {
  onLoad = () => {
    console.log("whereToPlayCrapsFremont onload...")
  }
}

const _whereToPlayCrapsFremont = new whereToPlayCrapsFremont();
$(document).ready(() => { _whereToPlayCrapsFremont.onLoad()})
