function displayResults() {
  var url = new URL(location.href);
  var constraint = url.searchParams.get("constraint");
  var htmlStr = "";
  var arr;
  var types;
  var arrTypes;
  if(constraint == "definition"){
    var storedDefs = localStorage.getItem("definitions");
    arr = storedDefs.split(",");
    types = localStorage.getItem("wordtypes");
    arrTypes =types.split(',');
  }
  else{
    var storedWords = localStorage.getItem("words");
     arr = storedWords.split(",");  
  }
  var lang = localStorage.getItem("language");
  var tosearch = localStorage.getItem("tosearch");
  var toGet = "";
  toGet = toGet.concat(constraint);
  toGet = toGet.concat(lang);
  var toRender = localStorage.getItem(toGet);
  toRender = toRender.concat(tosearch);
  $("#sentence").html("");
  $("#sentence").html(toRender);
  for (i = 0; i < arr.length; i++) {
    htmlStr = htmlStr.concat("<hr/>");
    if(arrTypes.length!=0){
      htmlStr = htmlStr.concat("<div style='color:teal;'>");
      htmlStr = htmlStr.concat(arrTypes[i]);
      htmlStr = htmlStr.concat("<div/>");
    }
    htmlStr = htmlStr.concat(arr[i]);
  }
  $("#here").html(htmlStr);

}
