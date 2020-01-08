describe('NoteController', () => {
  describe('.displayHtml', () => {
    it('should change the html on the page to what is inputted', () => {
      var noteController = new NoteController(new NoteList());
      element = { innerHTML: 'Something' }
      noteController.displayHtml(element)
      expect(element.innerHTML).toEq('<ul><li><div>Favourite drink: sel</div></li></ul>')
    })
  })
});
