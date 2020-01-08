(function(exports){
  function NoteListView(noteListModel){
    this.noteListModel = noteListModel;
  };

  NoteListView.prototype = {
    htmlString: function(){
      return "<ul>" + this.noteListModel.showNotes().map(note => {
        console.log()
        return `<li><a href='localhost:8080#notes/${note.getID()}'>` + note.read().substring(0, 20) + "</a></li>"
      }).join("") + "</ul>"
    }
  }

  exports.NoteListView = NoteListView;
})(this);
