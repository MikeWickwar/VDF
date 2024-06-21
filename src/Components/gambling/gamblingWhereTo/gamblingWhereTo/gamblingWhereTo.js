import "./gamblingWhereTo.css"
import $ from "jquery"

export class gamblingWhereTo {
  onLoad = () => {
    console.log("gamblingWhereTo onload...")
  }
}

const _gamblingWhereTo = new gamblingWhereTo();
$(document).ready(() => { _gamblingWhereTo.onLoad()})
