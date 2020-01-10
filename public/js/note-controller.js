(function(exports){
  function NoteController(noteListModel = new NoteList()) {
    this.noteListModel = noteListModel
    // this.noteListModel.add("Favourite drink: seltzer")
    this.noteListView = new NoteListView(this.noteListModel);
  }

  NoteController.prototype.displayHtml = function(element = document.getElementById("app")) {
    var html = this.noteListView.htmlString();
    element.innerHTML = html;
  }
  NoteController.prototype.noteById = function(id) {
    return this.noteListModel.showNotes().find(note => note.id == id)
  }



  NoteController.prototype.showNoteByUrl = function () {
    var self = this;
    window.addEventListener("hashchange", showNoteForCurrentPage)

    function showNoteForCurrentPage () {
      showNote(getNoteFromUrl(window.location))
    }

    function getNoteFromUrl(location) {
      var id = location.hash.split("#notes/")[1]
      return self.noteById(id);
    };

    function showNote(note) {
      document.getElementById("note-view").innerHTML = note.read();
    };

  }

  exports.NoteController = NoteController
})(this)
