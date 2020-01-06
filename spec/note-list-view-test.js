function returnsHTMLString(){
  var noteList = new NoteList();
  noteList.createNote('note1');
  noteList.createNote('note2');
  noteList.createNote('note3');
  var noteListView = new NoteListView(noteList);
  assert.eq('<ul><li><div>note1</div></li><li><div>note2</div></li><li><div>note3</div></li></ul>', noteListView.htmlString());
};

returnsHTMLString();
