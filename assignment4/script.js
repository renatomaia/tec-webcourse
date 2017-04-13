delete helloSpeaker.speak;  // silly attempt to
delete byeSpeaker.speak;    // free some memory

(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i=0; i<names.length; ++i) {
    mySpeaker.speakTo(names[i]);  // still works just fine
  }
})();
