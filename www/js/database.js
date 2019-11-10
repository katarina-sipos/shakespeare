function createSettingsTable(db) {
  db.transaction(
    function(tx) {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS app_settings (sett_id integer primary key,language text);"
      );
    },
    function(err) {
      alert("An error occurred while initializing the app");
    }
  );
}

function retrieveSettingsFromDb(appLanguage,db) {
  db.transaction(
    function(tx) {
      tx.executeSql("SELECT (language) FROM app_settings", [], function(
        tx,
        res
      ) {
        appLanguage = res.rows.item(0).language;
        translate(appLanguage);
      });
    },
    function(err) {
      translate();
    }
  );
}

function updateSettingsDb(lang, db) {
  db.transaction(
    function(tx) {
      tx.executeSql(
        "INSERT OR REPLACE INTO app_settings (sett_id,language) VALUES (?,?)",
        [1, lang],
        function(tx, res) {}
      );
      translate(lang);
    },
    function(err) {
      alert("An error occurred while initializing the app2");
    }
  );
}

function displayNotes(db){
  db.transaction(
    function(tx) {
      document.getElementById("data-list").innerHTML = "";
      tx.executeSql(
        "SELECT * FROM note ORDER BY datetime(created_at) DESC;",
        [],
        function(tx, res) {
          for (var i = 0; i < res.rows.length; i++) {
            var str = res.rows.item(i).data;
            var sliced = str.slice(0, 93);
            var noteName = res.rows.item(i).name;
            document.getElementById("data-list").innerHTML =
              document.getElementById("data-list").innerHTML +
              '<div class="card h-100"><div class="card-body"></br><h4 class="card-title">' +
              noteName +
              '</h4><p class="card-text">' +
              sliced +
              '</p></div><div class="card-footer"><div class="buttonsData" id="' +
              noteName +
              '">&times;</div></div></div>';
          }
        }
      );
    },
    function(err) {}
  );
}

function createTableNote(db){
  db.transaction(
    function(tx) {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS note (name text primary key, data text, created_at text)"
      );
    },
    function(err) {
      alert("An error occurred while initializing the app");
    }
  );
}

function addNoteToDB(db,name,text){
  db.transaction(
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
  );
}

function deleteNote(db,toDelete){
  db.transaction(
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
  );
}

function loadNotefromDB(db,x){
  var str1 = "note.html?name=";
      var str2 = "&data=";
      var y = "";
  db.transaction(
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
  );
}
