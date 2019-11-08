var menuDataENG = {
  headline: "Contents"
};
var menuDataSK = {
  headline: "Obsah"
};
var rendered;
translate();
function translate(){
    $.get("templates/template.mst", function(template) {
        if (language=="SK") {
          rendered = Mustache.render(template, menuDataSK);
        } else {
          rendered = Mustache.render(template, menuDataENG);
        }
        $("#HtmlResult").html("");
        $("#HtmlResult").html(rendered);
      });
}


