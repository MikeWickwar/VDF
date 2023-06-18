import "./gambling101.css"
import $ from "jquery"

export class gambling101 {
  onLoad = () => {
    console.log("gambling101 onload...")
  }
}

const _gambling101 = new gambling101();
$(document).ready(() => { _gambling101.onLoad()})
