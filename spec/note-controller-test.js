describe('NoteController', () => {
  describe('.displayHtml', () => {
    it('should change the html on the page to what is inputted', () => {

      var noteList = new NoteList();
      noteList.add('note1 78910121416182021');
      var id = noteList.noteModels[0].getID()
      console.log(id)
      console.log(noteList.noteModels)
      var noteController = new NoteController(noteList);
      console.log(noteController)
      element = { innerHTML: 'Something' }
      noteController.displayHtml(element)
      expect(element.innerHTML).toEq(`<ul><li><a href='localhost:8080#notes/${id}'>note1 78910121416182</a></li></ul>`)
    })
  })
});


