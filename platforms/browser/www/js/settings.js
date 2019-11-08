var language;
loadLanguage();
function loadLanguage(){

    var db2 =null;
    db2 =window.sqlitePlugin.openDatabase({ name: "shakespeare.db" , androidDatabaseImplementation: 2});
    db2.transaction(function(tx) {
        tx.executeSql("SELECT (language) FROM app_settings", [], function(tx,res){
            alert("mam");
        });
    }, function(err){
        alert("An error occured getting language");
    });
}

     
