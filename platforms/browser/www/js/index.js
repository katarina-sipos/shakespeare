var app = {
  initialize: function() {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
    $(document).on("click", "#capture", this.capture);
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
        if (localStorage.getItem("language") == "SK") {
          navigator.notification.alert(
            localStorage.getItem("nonotenameSK"),
            function() {
              return;
            },
            localStorage.getItem("nonametitleSK"),
            "OK"
          );
        } else {
          navigator.notification.alert(
            localStorage.getItem("nonotenameENG"),
            function() {
              return;
            },
            localStorage.getItem("nonametitleENG"),

            "OK"
          );
          //alert(localStorage.getItem("nonotenameENG"));
        }
      } else {
        addNoteToDB(db, name, text);
      }
    });
    var select = document.getElementById("sel");
    $(document).on("change", "#sel", function() {
      var lang = select.options[select.selectedIndex].value;
      updateSettingsDb(lang, db);
    });
    $(document).on("click", "#meanslike", function() {
      callAPI("meanslike", $("#wordToSearch").val());
    });
    $(document).on("click", "#soundslike", function() {
      callAPI("soundslike", $("#wordToSearch").val());
    });
    $(document).on("click", "#rhymeswith", function() {
      callAPI("rhymeswith", $("#wordToSearch").val());
    });
    $(document).on("click", "#oppositeof", function() {
      callAPI("oppositeof", $("#wordToSearch").val());
    });
    $(document).on("click", "#definition", function() {
      callAPI("definition", $("#wordToSearch").val());
    });

    $(document).on("click", ".delete", function(elm) {
      var element = elm;
      var lang = localStorage.getItem("language");
      var itemTitle = "deleteNoteTitle";
      itemTitle = itemTitle.concat(lang);
      var itemMsg = "deleteNoteMsg";
      itemMsg = itemMsg.concat(lang);
      var itemCancel = "cancel";
      var itemDelete = "delete";
      var btnDelete = localStorage.getItem(itemDelete.concat(lang));
      var btnCancel = localStorage.getItem(itemCancel.concat(lang));
      navigator.notification.confirm(
        localStorage.getItem(itemMsg),
        function(buttonIndex) {
          if (buttonIndex == 1) {
            var toDelete = element.target.parentNode.id;
            deleteNote(db, toDelete);
            var parent = document.getElementById(element.target.parentNode.id);
            var grandparent = parent.parentElement;
            var toRemove = grandparent.parentElement;
            toRemove.remove();
          } else {
            return;
          }
        },
        localStorage.getItem(itemTitle),
        [btnDelete, btnCancel]
      );
    });
    $(document).on("click", ".edit", function(elm) {
      var name = elm.target.parentNode.id;
      loadNotefromDB(db, name);
    });
  },
  capture: function() {
    scan.scanDoc(onSuccess, onFail, {
      sourceType: 1,
      fileName: "myfilename",
      quality: 1.0,
      returnBase64: false
    });

    function onSuccess(imageURI) {
      textocr.recText(0, /*3,*/ imageURI, onSuccess, onFail);
      function onSuccess(recognizedText) {
        var arr = recognizedText["blocks"].blocktext;
        var result = "";
        var size = arr.length;
        for (var i = 0; i < size; i++) {
          result = result.concat(arr[i]);
        }
        result = result.toLowerCase();
        document.getElementById("wordToSearch").value = result;
        localStorage.setItem("tosearch", result);
      }
      function onFail(message) {
        alert("Failed because: " + message);
      }
    }
    function onFail(message) {
      alert("Failed because: " + message);
    }
  }
};

app.initialize();
