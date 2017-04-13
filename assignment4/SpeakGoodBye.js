"use strict";

var byeSpeaker = (function () {
  // imported definitions
  var log = console.log;

  // private definitions
  var speakWord = "Good Bye";

  // exported definitions
  return {
    speak: function (name) {
      log(speakWord + " " + name);
    }
  }
})();
