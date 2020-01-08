function returnsHTMLString(){
  var noteList = new NoteList();
  noteList.add('note1 78910121416182021', 'note2', 'note3');
  var noteListView = new NoteListView(noteList);
  assert.eq('<ul><li><div>note1 78910121416182</div></li><li><div>note2</div></li><li><div>note3</div></li></ul>', noteListView.htmlString());
};

returnsHTMLString();
