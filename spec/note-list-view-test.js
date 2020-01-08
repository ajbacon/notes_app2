function returnsHTMLString(){
  var noteList = new NoteList();
  noteList.add('note1 78910121416182021');
  var id1 = noteList.noteModels[0].getID()
  console.log(id1)
  var noteListView = new NoteListView(noteList);
  assert.includes(`<ul><li><a href='localhost:8080#notes/${id1}'>note1 78910121416182</a></li></ul>`, noteListView.htmlString());
};

returnsHTMLString();
