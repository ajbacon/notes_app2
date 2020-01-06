(function(exports){
 function Note(text){
    this.text = text;
  };

  Note.prototype = {
    read: function() {
    return this.text;
    }
  };

  exports.Note = Note;
})(this);
