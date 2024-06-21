import "./featuredFremont.css"
import $ from "jquery"

export class featuredFremont {
  onLoad = () => {
    console.log("featuredFremont onload...")
  }
}

const _featuredFremont = new featuredFremont();
$(document).ready(() => { _featuredFremont.onLoad()})
