var menuDataENG = {
  headline: "Contents",
  synonyms: "Synonyms",
  antonyms: "Antonyms",
  definitions: "Definitions",
  drafts: "Your drafts",
  settings: "Settings"
};
var menuDataSK = {
  headline: "Obsah",
  synonyms: "Synonymá",
  antonyms: "Antonymá",
  definitions: "Definície",
  drafts: "Vaše poznámky",
  settings: "Nastavenia"
};
var buttonsDataSK={
    edit: "Upraviť",
    delete: "Vymazať"
};
var buttonsDataENG={
    edit: "Edit",
    delete: "Delete"
};
var settingsDataSK={
    language: "Jazyk"
}
var settingsDataENG={
    language: "Language"
}
var rendered;
function translate(appLanguage){
    $.get("templates/menu.mst", function(template) {
        if (appLanguage=="SK") {
          rendered = Mustache.render(template, menuDataSK);
        } else {
          rendered = Mustache.render(template, menuDataENG);
        }
        $("#HtmlResult").html("");
        $("#HtmlResult").html(rendered);
      });
      $.get("templates/buttons.mst", function(template) {
        if (appLanguage=="SK") {
          rendered = Mustache.render(template, buttonsDataSK);
        } else {
          rendered = Mustache.render(template, buttonsDataENG);
        }
        $(".btns").html("");
        $(".btns").html(rendered);
      });
      $.get("templates/settings.mst", function(template) {
        if (appLanguage=="SK") {
          rendered = Mustache.render(template, settingsDataSK);
        } else {
          rendered = Mustache.render(template, settingsDataENG);
        }
        $("#lanLabel").html("");
        $("#lanLabel").html(rendered);
      });
}


