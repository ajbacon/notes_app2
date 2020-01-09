(function(exports) {
  function NoteList(){
    this.noteModels = [];
  };

  NoteList.prototype = {
    showNotes: function() {
      return this.noteModels.map(note => note)
    },

    add: function(...notes) {
      notes.forEach(note => {
        this.noteModels.push(new Note(note))
      })
    }
  };

  exports.NoteList = NoteList;
})(this);
