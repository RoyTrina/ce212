function getDay(startDay, nDays) {
    let days = ["S", "M", "T", "W", "T", "F", "S"];
    let w = window.open();
    let d = w.document;
    d.write('<div id = "cal">');


    d.close();
    let tab = d.getElementById("cal").appendChild(document.createElement("table"));
    let head = tab.appendChild(document.createElement("thead"));
    let row = head.appendChild(document.createElement("tr"));

    for (let i = 0; i < 7; i++) {
        let h = row.appendChild(document.createElement("th"));
        h.appendChild(document.createTextNode(days[i]));
    }

    let body = tab.appendChild(document.createElement("tbody"));
    row = body.appendChild(document.createElement("tr"));
    for (let i = 0; i < startDay; i++) {
        row.appendChild(document.createElement("td"));
        // empty data cells - nothing to add
    }
    for (let i = 1; i <= nDays; i++) {
        let data = row.appendChild(document.createElement("td"));
        data.setAttribute("onclick", "window.opener.document.getElementById('selection').textContent =" + i + ";");
        data.appendChild(document.createTextNode(i));
        if ((i + startDay) % 7 === 0)
            row = body.appendChild(document.createElement("tr"));
    }
}
 