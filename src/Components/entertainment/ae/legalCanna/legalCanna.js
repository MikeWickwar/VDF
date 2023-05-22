import "./legalCanna.css"
import $ from "jquery"

export class legalCanna {
  onLoad = () => {
    console.log("legalCanna onload...")
  }
}

const _legalCanna = new legalCanna();
$(document).ready(() => { _legalCanna.onLoad()})
