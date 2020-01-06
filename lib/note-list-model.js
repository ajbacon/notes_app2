(function(exports) {
  function NoteList(noteModels){
    this.noteModels = noteModels
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
