import "./birthday.css"
import $ from "jquery"

export class birthday {
  onLoad = () => {
    console.log("birthday onload...")
  }
}

const _birthday = new birthday();
$(document).ready(() => { _birthday.onLoad()})
