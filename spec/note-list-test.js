function testNotesReturnsNoteModels() {
  var noteList = new NoteList(["Note1", "Note2", "Note3"]);
  assert.includes("Note1", noteList.notes());
};
testNotesReturnsNoteModels()

function testListCreatesNote() {
  var noteList = new NoteList(["Note1", "Note2", "Note3"]);
  var newNote = noteList.createNote('Test text');
  assert.includes(newNote, noteList.notes());
};
testListCreatesNote();
