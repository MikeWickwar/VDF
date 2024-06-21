import "./home.scss"
import $ from "jquery"

export class home {
  onLoad = () => {
    console.log("home onload...")

  }
}

const _home = new home();
$(document).ready(() => { _home.onLoad()})
