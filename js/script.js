// Created by: Evgeny
// Created on: may 2022
// This file contains the JS functions for index.html

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-08-HTML/sw.js", {
    scope: "/ICS2O-Unit5-08-HTML/",
  })
}

/**
 * This function calculates which movie rate you can watch.
 */
function calculate() {

  //input
  const firstInput = parseInt(document.getElementById('first-input').value)
  const secondInput = parseInt(document.getElementById('second-input').value)
  var repeat = firstInput
  var fullNumber = 0

  // process
  if ((firstInput > 0) && (secondInput > 0)){
    while (repeat >= secondInput) {
      repeat = repeat - secondInput
      ++fullNumber
    }
  }
  else if ((firstInput < 0) && (secondInput < 0)){
    while (Math.abs(repeat) >= Math.abs(secondInput)) {
      repeat = Math.abs(repeat) - Math.abs(secondInput)
      ++fullNumber
    }
  }
  else if ((firstInput < 0) || (secondInput < 0)){
    while (Math.abs(repeat) >= Math.abs(secondInput)) {
      repeat = Math.abs(repeat) - Math.abs(secondInput)
      ++fullNumber
    }
    fullNumber = fullNumber * -1
  }

  //output
  if (repeat == 0){
    document.getElementById("answer").innerHTML = "The full number is " + fullNumber + " and there is no remainder."
  }
  else {
  document.getElementById("answer").innerHTML = "The full number is " + fullNumber + " and the remainder is " + repeat + "."
  }
}