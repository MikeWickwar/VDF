import "./whereToPlayRouletteFremont.css"
import $ from "jquery"

export class whereToPlayRouletteFremont {
  onLoad = () => {
    console.log("whereToPlayRouletteFremont onload...")
  }
}

const _whereToPlayRouletteFremont = new whereToPlayRouletteFremont();
$(document).ready(() => { _whereToPlayRouletteFremont.onLoad()})
