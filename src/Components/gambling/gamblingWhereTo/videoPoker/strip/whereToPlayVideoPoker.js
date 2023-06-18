import "./whereToPlayVideoPoker.css"
import $ from "jquery"

export class whereToPlayVideoPoker {
  onLoad = () => {
    console.log("whereToPlayVideoPoker onload...")
  }
}

const _whereToPlayVideoPoker = new whereToPlayVideoPoker();
$(document).ready(() => { _whereToPlayVideoPoker.onLoad()})
