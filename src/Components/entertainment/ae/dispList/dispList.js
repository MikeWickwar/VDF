import "./dispList.scss"
import $ from "jquery"

export class dispList {
  onLoad = () => {
    console.log("dispList onload...")
  }
}

const _dispList = new dispList();
$(document).ready(() => { _dispList.onLoad()})
