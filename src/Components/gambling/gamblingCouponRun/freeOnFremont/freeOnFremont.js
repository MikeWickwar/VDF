import "./freeOnFremont.css"
import $ from "jquery"

export class freeOnFremont {
  onLoad = () => {
    console.log("freeOnFremont onload...")
  }
}

const _freeOnFremont = new freeOnFremont();
$(document).ready(() => { _freeOnFremont.onLoad()})
