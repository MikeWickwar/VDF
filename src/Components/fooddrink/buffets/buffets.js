import "./buffets.css"
import $ from "jquery"

export class buffets {
  onLoad = () => {
    console.log("buffets onload...")
  }
}

const _buffets = new buffets();
$(document).ready(() => { _buffets.onLoad()})
