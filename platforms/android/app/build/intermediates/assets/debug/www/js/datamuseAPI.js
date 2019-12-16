let baseUrl = "http://api.datamuse.com/words";
let url ="";
async function callAPI(constraint, toSearch) {
  if (noConnection()) {
    window.open("nonet.html");
    return;
  }
  localStorage.setItem("tosearch", toSearch);
  setUrl(constraint,toSearch);
  try {
    const response = await fetch(url);
    var responseJson = await response.json();
    this.display(responseJson, constraint);
    if (responseJson.length == 0) {
      window.open("nothingfound.html");
    }
  } catch (error) {
    window.open("nothingfound.html");
  }
}
function display(responseJson, constraint) {
  var str = "";
  var indexOfTab;
  var wordType;
  var wordTypes = "";
  var wordDefinition = "";
  var wordDefinitions = "";

  if (constraint == "definition") {
    var definitions = responseJson[0].defs;
    for (i = 0; i < definitions.length; i++) {
      indexOfTab = definitions[i].indexOf("\t");
      wordType = definitions[i].slice(0, indexOfTab + 1);
      wordTypes = wordTypes.concat(wordType);
      wordTypes = wordTypes.concat(",");
      wordDefinition = definitions[i].slice(
        indexOfTab + 1,
        definitions[i].length
      );
      wordDefinitions = wordDefinitions.concat(wordDefinition);
      wordDefinitions = wordDefinitions.concat(",");
      localStorage.setItem("definitions", wordDefinitions);
      localStorage.setItem("wordtypes", wordTypes);
    }
  } else {
    responseJson.forEach(function(obj) {
      str = str.concat(obj.word);
      str = str.concat(",");
      localStorage.setItem("words", str);
    });
  }
  var openUrl = "display.html?constraint=";
  openUrl = openUrl.concat(constraint);
  window.open(openUrl);
}

function setUrl(constraint,toSearch) {
  switch (constraint) {
    case "meanslike":
      url = baseUrl.concat("?ml=");
      url = url.concat(toSearch);
      break;
    case "soundslike":
      url = baseUrl.concat("?sl=");
      url = url.concat(toSearch);
      break;
    case "rhymeswith":
      url = baseUrl.concat("?rel_rhy=");
      url = url.concat(toSearch);
      break;
    case "oppositeof":
      url = baseUrl.concat("?rel_ant=");
      url = url.concat(toSearch);
      break;
    case "definition":
      url = baseUrl.concat("?sp=");
      url = url.concat(toSearch);
      url = url.concat("&md=d");
      break;
    default:
      url = "";
      break;
  }
}

function noConnection() {
  var networkState = navigator.connection.type;
  return networkState === Connection.NONE;
}
