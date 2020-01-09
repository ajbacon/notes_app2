(function(exports){
  function SingleNoteView(noteModel){
    this.noteModel = noteModel;
  };

  SingleNoteView.prototype = {
    displayHtml: function(){
      return "<div>" + this.noteModel.read() + '</div>'
    }
  }

  exports.SingleNoteView = SingleNoteView;
})(this);