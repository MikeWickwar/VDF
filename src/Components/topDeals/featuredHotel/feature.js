import "./feature.css"
import $ from "jquery"

export class feature {
  onLoad = () => {
    console.log("feature onload...")
  }
}

const _feature = new feature();
$(document).ready(() => { _feature.onLoad()})
