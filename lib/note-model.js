(function(exports){
  var idcounter = 0
 function Note(text){
    this.text = text;
    this.id = idcounter++;
  };

  Note.prototype = {
    read: function() {
    return this.text;
    },

    getID: function() {
    return this.id;
    }
  };

  exports.Note = Note;
})(this);
