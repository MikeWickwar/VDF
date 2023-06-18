import "./stats101.css"
import $ from "jquery"

export class stats101 {
  onLoad = () => {
    console.log("stats101 onload...")
  }
}

const _stats101 = new stats101();
$(document).ready(() => { _stats101.onLoad()})
