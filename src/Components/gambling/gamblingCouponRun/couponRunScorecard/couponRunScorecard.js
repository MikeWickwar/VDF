import "./couponRunScorecard.css"
import $ from "jquery"

export class couponRunScorecard {
  onLoad = () => {
    console.log("couponRunScorecard onload...")
  }
  printElm = (elem) => {
      var mywindow = window.open(document.getElementById("scoreCard").src, 'PRINT', 'height=1300,width=1000');

      mywindow.document.close(); // necessary for IE >= 10
      mywindow.focus(); // necessary for IE >= 10*/

      mywindow.print();
      //mywindow.close();

      return true;
  }
  printButtonClick = () => {
      this.printElm("scoreCard")
  }
}

const _couponRunScorecard = new couponRunScorecard();
$(document).ready(() => { _couponRunScorecard.onLoad()})
