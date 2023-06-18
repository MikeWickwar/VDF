import "./craps101.css"
import $ from "jquery"

export class craps101 {
  onLoad = () => {
    console.log("craps101 onload...")
  }
}

const _craps101 = new craps101();
$(document).ready(() => { _craps101.onLoad()})
