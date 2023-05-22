import "./happyhour.css"
import $ from "jquery"

export class happyhour {
  onLoad = () => {
    console.log("happyhour onload...")
  }
}

const _happyhour = new happyhour();
$(document).ready(() => { _happyhour.onLoad()})
