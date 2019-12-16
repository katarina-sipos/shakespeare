function displayResults() {
  var url = new URL(location.href);
  var constraint = url.searchParams.get("constraint");
  var htmlStr = "";
  var arr = null;
  var types;
  var arrTypes = null;
  if (constraint == "definition") {
    var storedDefs = localStorage.getItem("definitions");
    arr = storedDefs.split(",");
    types = localStorage.getItem("wordtypes");
    arrTypes = types.split(",");
    for (i = 0; i < arrTypes.length; i++) {
      htmlStr = htmlStr.concat("<hr/>");
      htmlStr = htmlStr.concat("<div class='word-types'>");
      htmlStr = htmlStr.concat(arrTypes[i]);
      htmlStr = htmlStr.concat("</div>");

      htmlStr = htmlStr.concat(arr[i]);
    }
  } else {
    var storedWords = localStorage.getItem("words");
    arr = storedWords.split(",");
    for (i = 0; i < arr.length; i++) {
      htmlStr = htmlStr.concat("<hr/>");
      htmlStr = htmlStr.concat(arr[i]);
    }
  }
  var lang = localStorage.getItem("language");
  var tosearch = localStorage.getItem("tosearch");
  var toGet = "";
  toGet = toGet.concat(constraint);
  toGet = toGet.concat(lang);
  var toRender = localStorage.getItem(toGet);
  tosearch = tosearch.toLowerCase();
  toRender = toRender.concat(tosearch);
  $("#sentence").html("");
  $("#sentence").html(toRender);
  $("#here").html(htmlStr);
}
