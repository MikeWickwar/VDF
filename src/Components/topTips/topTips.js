import "./topTips.css"
import $ from "jquery"

export class topTips {
  onLoad = () => {
    console.log("topTips onload...")
  }
}

const _topTips = new topTips();
$(document).ready(() => { _topTips.onLoad()})
