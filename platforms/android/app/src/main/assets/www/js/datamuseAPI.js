let baseUrl = 'http://api.datamuse.com/words';
let first;
let url;
async function callAPI(constraint,toSearch){
    localStorage.setItem("tosearch", toSearch);
    switch(constraint){
        case "meanslike":
            url=baseUrl.concat('?ml=');
            url=url.concat(toSearch);
            break;
        case "soundslike":
                url=baseUrl.concat('?sl=');
                url=url.concat(toSearch);
                break;
        case "rhymeswith":
            url=baseUrl.concat('?rel_rhy=');
            url=url.concat(toSearch);
            break;
        case "oppositeof":
                url=baseUrl.concat('?rel_ant=');
                url=url.concat(toSearch);
                break;
        case "definition":
                url=baseUrl.concat('?sp=');
                url=url.concat(toSearch);
                url = url.concat('&md=d');
                break;
        default: break;
    }
    const response = await fetch(url);
    var responseJson = await response.json();
    this.display(responseJson,constraint);
}
function display(responseJson, constraint){

    var str = "";
    if(constraint == "definition"){
        var definitions = responseJson[0].defs;
        var indexOfTab;
        var wordType;
        for(i =0; i<definitions.length;i++){
            str = str.concat(definitions[i]);
            indexOfTab = str.indexOf("\t");
            wordType = str.slice(0,indexOfTab+1);
            wordType = wordType.concat(',');
            str = str.slice(indexOfTab+1,str.length);
            str=str.concat(',');
            localStorage.setItem("definitions", str);
            localStorage.setItem("wordtypes",wordType);
        }
    }else{
        responseJson.forEach(function(obj) {
            str=str.concat(obj.word);
            str=str.concat(',');
            localStorage.setItem("words", str);
        });

    }
   
   //JSON.stringify(words));
    var openUrl = 'display.html?constraint=';
    openUrl = openUrl.concat(constraint);
    window.open(openUrl);
}