var result = "";

function parseNode(startNode) {
    var result = ""
    for (var i = 0; i < startNode.childNodes.length; i++) {
        var child = startNode.childNodes[i];}
        result += "<tr>"
        + "<td>" + child.nodeType + "</td>"
        + "<td>" + child.nodeName + "</td>"
        + "<td>" + child.nodeValue + "</td>"
        + "<td>" + child.text + "</td>"
        + "</tr>";
    //todo
    //für jeden Kindknoten ab "startNode" eine Tabellenzeile (<tr><td>....</tr>) 
    //mit den gemäss Aufgabenstellung gewünschten Infos erstellen

    return "<table><tr><th>nodeType</th><th>nodeName</th><th>nodeValue</th><th>textContent</th></tr>" + result + "</table>";
}