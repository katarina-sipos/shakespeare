/*var select = document.getElementById('sel');
select.addEventListener("change",function(){
    var lang = select.options[select.selectedIndex].value;
    var db = null;
db = window.sqlitePlugin.openDatabase({ name: "shakespeare.db" , androidDatabaseImplementation: 2});
       
db.transaction(
    function(tx) {
      tx.executeSql(
        "INSERT OR REPLACE INTO app_settings (sett_id,language) VALUES (?,?)",[1,lang],function(tx, res) {
          }
      );
    },
    function(err) {
      alert("An error occurred while initializing the app2");
    }
  );
  translate();
});*/
 
