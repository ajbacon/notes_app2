(function(exports){
  function NoteController(noteListModel) {
    this.noteListModel = noteListModel
    // this.noteListModel.add("Favourite drink: seltzer")
    this.noteListView = new NoteListView(this.noteListModel);
  }

  NoteController.prototype.displayHtml = function(element = document.getElementById("app")) {
    var html = this.noteListView.htmlString();
    element.innerHTML = html;
  }

  exports.NoteController = NoteController
})(this)
