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
    db.transaction(function(tx) {
      
      document.getElementById("data-list").innerHTML="";
      tx.executeSql("SELECT (name),(data) FROM note", [], function(tx,res){
          for(var iii = 0; iii < res.rows.length; iii++)
          {
            var str = res.rows.item(iii).data;
            var sliced = str.slice(0, 30);
              document.getElementById("data-list").innerHTML =
                document.getElementById("data-list").innerHTML +
                "<div class=\"card h-100\"><div class=\"card-body\"></br><h4 class=\"card-title\">"+res.rows.item(iii).name+"</h4><p class=\"card-text\">"+sliced+"</p></div><div class=\"card-footer\"><div class=\"buttonsData\"></div></div></div></br>"
                
              /*"<li><a href='javascript:this.displayNote(\"" + res.rows.item(iii).name + "\")'>" + res.rows.item(iii).name + "</a><p>"+res.rows.item(iii).data+"</p></li>";*/
          }
      });
  }, function(err){
      //alert("An error occured while displaying saved notes");
  });
  retrieveSettingsFromDb(db);

    $( document ).on( "click", "#addNoteButton", function() {
      db.transaction(
        function(tx) {
          tx.executeSql(
            "CREATE TABLE IF NOT EXISTS note (name text primary key, data text)"
          );
        },
        function(err) {
          alert("An error occurred while initializing the app");
        }
      );
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

      db.transaction(
        function(tx) {
          tx.executeSql(
            "INSERT INTO note (name, data) VALUES (?,?)",
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
  
    });
    var select = document.getElementById("sel")
    $( document ).on( "change", "#sel", function() {

      var lang =select.options[select.selectedIndex].value;
      updateSettingsDb(lang, db);
    });

    /*var pridaj = document.getElementById("addNoteButton");
    pridaj.addEventListener("click", function() {
    });*/
    /*var select = document.getElementById("sel");
    select.addEventListener("change", function() {
      var lang = select.options[select.selectedIndex].value;
      updateSettingsDb(lang, db);
    });*/
  }

  /*db.transaction(
        function(tx) {
          tx.executeSql(
            "CREATE TABLE IF NOT EXISTS note (name text primary key, data text)"
          );
        },
        function(err) {
          alert("An error occurred while initializing the app");
        }
      );
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

      db.transaction(
        function(tx) {
          tx.executeSql(
            "INSERT INTO note (name, data) VALUES (?,?)",
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
    });*/
  //}
};

app.initialize();
