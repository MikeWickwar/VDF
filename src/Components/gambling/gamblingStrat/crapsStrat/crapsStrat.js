import "./crapsStrat.css"
import $ from "jquery"

export class crapsStrat {
  onLoad = () => {
    console.log("crapsStrat onload...")
  }
}

const _crapsStrat = new crapsStrat();
$(document).ready(() => { _crapsStrat.onLoad()})
