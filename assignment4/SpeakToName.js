/*
 * assuming 'helloSpeaker' and 'byeSpeaker' globals
 * contain the expected external modules
 */

"use strict";  // just for fun! ;-)

var mySpeaker = (function () {
  // imported definitions
  var sayHelloTo = helloSpeaker.speak;
  var sayByeTo = byeSpeaker.speak;

  // private definitions
  var byeInitialLetter = 'j';
  function shallSayByeTo(name) {
    return name[0].toLowerCase() == byeInitialLetter;
  }

  // exported definitions
  return {
    speakTo: function (name) {
      if (shallSayByeTo(name)) {
        sayHelloTo(name);
      } else {
        sayByeTo(name);
      }
    }
  };
})()
