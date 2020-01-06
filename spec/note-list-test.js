// function testNotesReturnsNoteModels() {
//   var noteList = new NoteList();
//   assert.includes("Note1", noteList.notes());
// };
// testNotesReturnsNoteModels()

function testListCreatesNote() {
  var noteList = new NoteList();
  var newNote = noteList.createNote('Test text');
  assert.includes(newNote, noteList.notes());
};
testListCreatesNote();
