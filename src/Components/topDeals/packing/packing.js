import "./packing.css"
import $ from "jquery"

export class packing {
  onLoad = () => {
    console.log("packing onload...")
  }
}

const _packing = new packing();
$(document).ready(() => { _packing.onLoad()})
