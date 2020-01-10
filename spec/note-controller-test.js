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

  describe('.displayHtml', () => {
    it('should change the html on the page to what is inputted', () => {
      var element = { innerHTML: 'Something' }
      var windowObject = {
        addEventListener: function (type, callback) {
          type = type
          cbFunc= callback
        },
        location: { hash: "<enter_url>"}
      }
      var noteList = new NoteList();
      noteList.add('note1 78910121416182021');
      var id = noteList.noteModels[0].getID()
      windowObject.location.hash = `#notes/${id}`

      var noteController = new NoteController(noteList);
      noteController.displayHtml(element)
      noteController.showNoteByUrl(windowObject, element)
      cbFunc()

      expect(element.innerHTML).toEq("note1 78910121416182021")
    })
  })
});


