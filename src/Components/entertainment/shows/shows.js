import "./shows.scss"
import $ from "jquery"

export class shows {
  onLoad = () => {
    console.log("shows onload...")
  }
}

const _shows = new shows();
$(document).ready(() => { _shows.onLoad()})
