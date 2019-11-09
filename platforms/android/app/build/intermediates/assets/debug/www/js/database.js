function createSettingsTable(db){
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

function retrieveSettingsFromDb(db){
  db.transaction(function(tx) {
      tx.executeSql("SELECT (language) FROM app_settings", [], function(tx,res){
          appLanguage=res.rows.item(0).language;
          translate(appLanguage);
      });
  }, function(err){
    translate();
  });
}

function updateSettingsDb(lang,db){
  db.transaction(
      function(tx) {
        tx.executeSql(
          "INSERT OR REPLACE INTO app_settings (sett_id,language) VALUES (?,?)",[1,lang],function(tx, res) {
            }
        );
        translate(lang);

      },
      function(err) {
        alert("An error occurred while initializing the app2");
      }
    );
}
