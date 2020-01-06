function testReadReturnsText(){
  var note = new Note("Test note")
  assert.eq("Test note", note.read())
};
testReadReturnsText();
