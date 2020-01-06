(function(exports){
  function testReadReturnsText(){
    var note = new Note("Test note");
    if(note.text !== "Test note"){
      throw new Error("WRONG )^:<");
    };
  };
  testReadReturnsText();
})(this);
