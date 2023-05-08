import "./freetosee.css"
import $ from "jquery"

export class freetosee {
  onLoad = () => {
    console.log("freetosee onload...")
  }
}

const _freetosee = new freetosee();
$(document).ready(() => { _freetosee.onLoad()})
