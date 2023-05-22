import "./euroPools.css"
import $ from "jquery"

export class euroPools {
  onLoad = () => {
    console.log("euroPools onload...")
  }
}

const _euroPools = new euroPools();
$(document).ready(() => { _euroPools.onLoad()})
