describe('SingleNoteView', () => {
  describe('.displayHtml', () => {
    it('should change the html on the page to what is inputted', () => {
      var note = new Note('this is a note')
      var singleNoteView = new SingleNoteView(note)

      expect(singleNoteView.displayHtml()).toEq('<div>this is a note</div>')
    })
  })
})
