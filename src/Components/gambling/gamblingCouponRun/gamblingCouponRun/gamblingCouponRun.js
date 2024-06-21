import "./gamblingCouponRun.css"
import $ from "jquery"

export class gamblingCouponRun {
  onLoad = () => {
    console.log("gamblingCouponRun onload...")
  }
}

const _gamblingCouponRun = new gamblingCouponRun();
$(document).ready(() => { _gamblingCouponRun.onLoad()})
