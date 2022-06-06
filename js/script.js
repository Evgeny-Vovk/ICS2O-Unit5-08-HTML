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
  const number1 = parseInt(document.getElementById('number1').value)
  const number2 = parseInt(document.getElementById('number2').value)
  var repeat = number1
  var fullNumber = 0

  // process
  if ((number1 > 0) && (number2 > 0)){
    while (repeat >= number2) {
      repeat = repeat - number2
      ++fullNumber
    }
  }
  else if ((number1 < 0) && (number2 < 0)){
    number2 = Math.abs(number2)
    repeat = Math.abs(repeat)
    while (repeat >= number2) {
      repeat = repeat - number2
      ++fullNumber
    }
  }
  
  //output
  document.getElementById("answer").innerHTML = "The answer is: " + fullNumber + " \nand the remaining is: " + repeat
}