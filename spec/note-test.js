function testReadReturnsText(){
  var note = new Note("Test note")
  assert.eq("Test note", note.read())
};
testReadReturnsText();


describe('NoteModel', () => {
  describe('.getID', () => {
    it('should return the specific ID of the note', () => {
      
      var note0 = new Note("Test note 1")
      var note1 = new Note("Test note 2")
      expect(note1.getID()).toEq(note0.getID() + 1)
    })
  })
})
