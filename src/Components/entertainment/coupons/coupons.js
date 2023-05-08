import "./coupons.css"
import $ from "jquery"

export class coupons {
  onLoad = () => {
    console.log("coupons onload...")
  }
}

const _coupons = new coupons();
$(document).ready(() => { _coupons.onLoad()})
