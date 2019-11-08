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
    translate();
    var db = null;
    db = window.sqlitePlugin.openDatabase({
      name: "shakespeare.db",
      androidDatabaseImplementation: 2
    });
    createDBS(db);
    retrieveSettingsFromDb(db);
    var select = document.getElementById("sel");
    select.addEventListener("change", function() {
      var lang = select.options[select.selectedIndex].value;
      updateSettingsDb(lang, db);
    });
  }
};

app.initialize();
