var app = {
  initialize: function() {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
  },
  onDeviceReady: function() {
    var appLanguage = "";
    var db = openDB();
    createSettingsTable(db);
    displayNotes(db);
    retrieveSettingsFromDb(appLanguage, db);
    $(document).on("click", "#addNoteButton", function() {
      createTableNote(db);
      var name = $("#form1").val();
      var text = $("#form7").val(); 
      if (name == "") {
        return;
      }
      if (text == "") {
        return;
      }

      addNoteToDB(db, name, text);
    });
    var select = document.getElementById("sel");
    $(document).on("change", "#sel", function() {
      var lang = select.options[select.selectedIndex].value;
      updateSettingsDb(lang, db);
    });
    $(document).on("click", "#meanslike",function(){
      callAPI('meanslike',$('#wordToSearch').val()); 
    });
    $(document).on("click", "#soundslike",function(){
      callAPI('soundslike',$('#wordToSearch').val()); 
    });
    $(document).on("click", "#rhymeswith",function(){
      callAPI('rhymeswith',$('#wordToSearch').val()); 
    });
    $(document).on("click", "#oppositeof",function(){
      callAPI('oppositeof',$('#wordToSearch').val()); 
    });
    $(document).on("click", "#definition",function(){
      callAPI('definition',$('#wordToSearch').val()); 
    });
    $(document).on("click", ".delete", function(elm) {
      var toDelete = elm.target.parentNode.id;
      deleteNote(db, toDelete);
      var parent = document.getElementById(elm.target.parentNode.id);
      var grandparent = parent.parentElement;
      var toRemove = grandparent.parentElement;
      toRemove.remove();
    });
    $(document).on("click", ".edit", function(elm) {
      var name = elm.target.parentNode.id;
      loadNotefromDB(db, name);
    });
  }
  
};

app.initialize();
