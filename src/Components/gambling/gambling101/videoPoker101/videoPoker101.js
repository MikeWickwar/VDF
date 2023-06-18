import "./videoPoker101.css"
import $ from "jquery"

export class videoPoker101 {
  onLoad = () => {
    console.log("videoPoker101 onload...")
  }
}

const _videoPoker101 = new videoPoker101();
$(document).ready(() => { _videoPoker101.onLoad()})
