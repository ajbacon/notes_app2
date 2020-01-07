function testListCreatesNote() {
  var noteList = new NoteList();
  var newNote = noteList.add('1', '2', '3');
  var firstNote = noteList.showNotes()[0]
  assert.eq('1', firstNote);
};
testListCreatesNote();
