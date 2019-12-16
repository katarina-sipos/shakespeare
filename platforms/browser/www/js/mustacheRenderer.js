var menuDataENG = {
  definition: "Definiton of...",
  find: "Find",
  soundslike: "Sounds like...",
  meanslike: "Means like...",
  rhymeswith: "Rhyme with...",
  oppositeof: "The opposite of..."
};
var menuDataSK = {
  definition: "Definícia...",
  find: "Vyhľadať",
  soundslike: "Znejúce ako...",
  meanslike: "Znamenajúce to, čo...",
  rhymeswith: "Rýmuje sa s...",
  oppositeof: "Opakom..."
};
var buttonsDataSK = {
  edit: "Upraviť",
  delete: "Vymazať"
};
var buttonsDataENG = {
  edit: "Edit",
  delete: "Delete"
};
var settingsDataSK = {
  language: "Jazyk"
};
var settingsDataENG = {
  language: "Language"
};
var draftNameENG = {
  draftName: "Draft name"
};

var draftTextENG = {
  yourDraft: "Your draft"
};
var addBtnENG = {
  addbtn: "Save draft"
};
var draftNameSK = {
  draftName: "Meno poznámky"
};
var draftTextSK = {
  yourDraft: "Vaša poznámka"
};
var addBtnSK = {
  addbtn: "Uložiť poznámku"
};
var rendered;
function translate(appLanguage) {
  $.get("templates/menu.mst", function(template) {
    if (appLanguage == "SK") {
      rendered = Mustache.render(template, menuDataSK);
    } else {
      rendered = Mustache.render(template, menuDataENG);
    }
    $("#menuData").html("");
    $("#menuData").html(rendered);
  });
  $.get("templates/buttons.mst", function(template) {
    if (appLanguage == "SK") {
      rendered = Mustache.render(template, buttonsDataSK);
    } else {
      rendered = Mustache.render(template, buttonsDataENG);
    }
    $(".buttonsData").html("");
    $(".buttonsData").html(rendered);
  });
  $.get("templates/settings.mst", function(template) {
    if (appLanguage == "SK") {
      rendered = Mustache.render(template, settingsDataSK);
    } else {
      rendered = Mustache.render(template, settingsDataENG);
    }
    $("#lanLabel").html("");
    $("#lanLabel").html(rendered);
  });
  $.get("templates/draftNameLabel.mst", function(template) {
    if (appLanguage == "SK") {
      rendered = Mustache.render(template, draftNameSK);
    } else {
      rendered = Mustache.render(template, draftNameENG);
    }

    $("#draftNameLabel").html("");
    $("#draftNameLabel").html(rendered);
  });
  $.get("templates/draftTextLabel.mst", function(template) {
    if (appLanguage == "SK") {
      rendered = Mustache.render(template, draftTextSK);
    } else {
      rendered = Mustache.render(template, draftTextENG);
    }
    $("#draftTextLabel").html("");
    $("#draftTextLabel").html(rendered);
  });
  $.get("templates/addNoteButton.mst", function(template) {
    if (appLanguage == "SK") {
      rendered = Mustache.render(template, addBtnSK);
    } else {
      rendered = Mustache.render(template, addBtnENG);
    }
    $("#addNoteButton").html("");
    $("#addNoteButton").html(rendered);
  });
}
