
var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        var db = null;
        db = window.sqlitePlugin.openDatabase({ name: "shakespeare.db" , androidDatabaseImplementation: 2});
        db.transaction(
          function(tx) {
            tx.executeSql(
              "CREATE TABLE IF NOT EXISTS app_settings (sett_id integer primary key,language text default 'ENG');"
            );
          },
          function(err) {
            alert("An error occurred while initializing the app");
          }
        );
        db.transaction(function(tx) {
            tx.executeSql("SELECT (language) FROM app_settings;", [], function(tx,res){
                alert(res.rows.item(0));
            });
        }, function(err){
            alert("An error occured getting language");
        });
        // db.transaction(
        //     function(tx) {
        //       tx.executeSql(
        //         "INSERT INTO app_settings (sett_id, language) VALUES (1,'SK')",
        //         function(tx, res) {
        //           alert("Note Added");
        //         }
        //       );
        //     },
        //     function(err) {
        //       alert("An error occured while saving the note");
        //     }
        //   );
    
    }
};

app.initialize();
