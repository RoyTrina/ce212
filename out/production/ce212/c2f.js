function conversionTable(tagId, from, to) {
    const conv = document.getElementById(tagId);
    const pre = document.createElement("pre");
    conv.appendChild(pre);
    const tab = pre.appendChild(document.createElement("table"));
    const head = tab.appendChild(document.createElement("thead"));
    var row = head.appendChild(document.createElement("tr"));
    var h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Celsius"));
    h = row.appendChild(document.createElement("th"));
    h.appendChild(document.createTextNode("Fahrenheit"));

    var body = tab.appendChild(document.createElement("tbody"));
    for (var i = from; i < to; i++) {
        row = body.appendChild(document.createElement("tr"));
        if (i % 2 === 0) {
            row.setAttribute("class", "even");
        }
        else {
            row.setAttribute("class", "odd");
        }
        var data = row.appendChild(document.createElement("td"));
        data.appendChild(document.createTextNode(i));
        data = row.appendChild(document.createElement("td"));
        data.appendChild(document.createTextNode(c2f(i)));
    }
}

function c2f(c) {
    return (c * 9 / 5 + 32)
}