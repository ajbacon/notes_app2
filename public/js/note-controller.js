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
  NoteController.prototype.noteById = function(id) {
    console.log('noteById')
    console.log(this.noteListModel.showNotes().find(note => note.id == id))
    return this.noteListModel.showNotes().find(note => note.id == id)
  }

  NoteController.prototype.showNoteUrl = function () {
    window.addEventListener("hashchange", showNoteForCurrentPage)

    function showNoteForCurrentPage () {
      showNote(getNoteFromUrl(window.location))
    }

    function getNoteFromUrl(location) {
      console.log('getNoteFromUrl')
      console.log(location)
      var id = location.hash.split("#notes/")[1]
      console.log(id)
      return noteController.noteById(id);
    };

    function showNote(note) {
      document.getElementById("app").innerHTML = note.read();
    };

  }

  exports.NoteController = NoteController
})(this)
