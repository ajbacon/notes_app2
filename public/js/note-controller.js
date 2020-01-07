(function(exports){
  function NoteController(noteListModel) {
    this.noteListModel = noteListModel
  }
  NoteController.prototype.displayHtml = function() {
    this.noteListModel.add("Favorite drink: seltzer")
    var noteListView = new NoteListView(this.noteListModel);
    var html = noteListView.htmlString();
    document.getElementById("app").innerText = html;
  }

  exports.NoteController = NoteController
})(this)
