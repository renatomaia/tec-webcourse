"use strict";

var helloSpeaker = (function () {
  // imported definitions
  var log = console.log;

  // private definitions
  var speakWord = "Hello";

  // exported definitions
  return {
    speak: function (name) {
      log(speakWord + " " + name);
    }
  }
})();
