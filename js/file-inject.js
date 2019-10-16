function readFile(fileName) {
    var result = load(fileName);
    return result;
}

function injectFile(fileName) {
    var textFileAsString = readFile(fileName);
    console.log(getAllMethodsOfObejct(textFileAsString));
    console.log(textFileAsString);
    document.getElementsByTagName("body")[0].innerHTML += `${textFileAsString}`;
};

function loadHtml(elementId, fileName) {
    $(elementId).load(fileName, function() {
        alert( "Load was performed." );
    });
}


loadHtml("output", "./test.txt");
// injectFile("./test.txt");