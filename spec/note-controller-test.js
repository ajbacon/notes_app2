describe('NoteController', () => {
  describe('.displayHtml', () => {
    it('should change the html on the page to what is inputted', () => {

      var noteList = new NoteList();
      noteList.add('note1 78910121416182021');
      var id = noteList.noteModels[0].getID()
      var noteController = new NoteController(noteList);
      element = { innerHTML: 'Something' }
      noteController.displayHtml(element)
      expect(element.innerHTML).toEq(`<ul><li><a href='#notes/${id}'>note1 78910121416182</a></li></ul>`)
    })
  })
});


