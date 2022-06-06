// Created by: Evgeny
// Created on: may 2022
// This file contains the JS functions for index.html

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-07-HTML/sw.js", {
    scope: "/ICS2O-Unit5-07-HTML/",
  })
}

/**
 * This function calculates which movie rate you can watch.
 */
function calculate() {

  //input
  const number = parseInt(document.getElementById('number').value)
  var answer = 0

  // process
  for (repeat = 0; repeat <= number; repeat++) {
    answer += repeat
  }
  
  //output
  document.getElementById("answer").innerHTML = "The answer is: " + answer
}