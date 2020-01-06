(function(exports) {
  function NoteList(){
    this.noteModels = [];
  };

  NoteList.prototype = {
    notes: function() {
      return this.noteModels;
    },

    createNote: function(text) {
      var newNote = new Note(text);
      this.noteModels.push(newNote);
      return newNote;
    }
  };

  exports.NoteList = NoteList;
})(this);
