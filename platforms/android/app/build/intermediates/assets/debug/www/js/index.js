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
    var db = null;
    db = window.sqlitePlugin.openDatabase({
      name: "shakespeare.db",
      androidDatabaseImplementation: 2
    });
    createSettingsTable(db);
    displayNotes(db);
    retrieveSettingsFromDb(appLanguage, db);

    $(document).on("click", "#addNoteButton", function() {
     /* db.transaction(
        function(tx) {
          tx.executeSql(
            "CREATE TABLE IF NOT EXISTS note (name text primary key, data text, created_at text)"
          );
        },
        function(err) {
          alert("An error occurred while initializing the app");
        }
      );*/
      createTableNote(db);
      var name = document.getElementById("form1").value;
      var text = document.getElementById("form7").value;
      if (name == "") {
        alert("Please enter name");
        return;
      }
      if (text == "") {
        alert("Please enter text");
        return;
      }
      addNoteToDB(db,name,text);
      /*db.transaction(
        function(tx) {
          tx.executeSql(
            "INSERT OR REPLACE INTO note (name, data,created_at) VALUES (?,?,CURRENT_TIMESTAMP)",
            [name, text],
            function(tx, res) {
              alert("Note Added");
            }
          );
        },
        function(err) {
          alert("An error occured while saving the note");
        }
      );*/
    });
    var select = document.getElementById("sel");
    $(document).on("change", "#sel", function() {
      var lang = select.options[select.selectedIndex].value;
      updateSettingsDb(lang, db);
    });
    $(document).on("click", ".delete", function(e) {
      var toDelete = e.target.parentNode.id;
      deleteNote(db,toDelete);
      /*db.transaction(
        function(tx) {
          tx.executeSql(
            "DELETE FROM note WHERE name = (?);",
            [toDelete],
            function(tx, res) {
              alert("Note deleted");
            }
          );
        },
        function(err) {
          alert("An error occured while deleting the note");
        }
      );*/
      var bs = document.getElementById(e.target.parentNode.id);
      var footer = bs.parentElement;
      var toRemove = footer.parentElement;
      toRemove.remove();
    });
    $(document).on("click", ".edit", function(e) {
      /*var str1 = "note.html?name=";
      var str2 = "&data=";*/
      var x = e.target.parentNode.id;
      loadNotefromDB(db,x);
      //var y = "";
      /*db.transaction(
        function(tx) {
          tx.executeSql(
            "SELECT (data) FROM note WHERE name = (?);",
            [x],
            function(tx, res) {
              y = res.rows.item(0).data;
              var url = str1 + x + str2 + y;
              window.open(url);
            }
          );
        },
        function(err) {
          alert("An error occured while deleting the note");
        }
      );*/
    });
  }
};

app.initialize();
