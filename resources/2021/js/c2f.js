function conversionTable(tagID, from, to) {

    //the div element where the conversion table will be placed
    const conv = document.getElementById("tagID");

    //create a pre (formatted) tag and then put the conversion in plain text
    const pre = document.getElementById("pre");

    //add the tag to the pre node
    conv.appendChild(pre);
    for (let i = from; i <= to; i++) {
        pre.appendChild(document.createTextNode(i + " : " + c2f(i)))
        pre.appendChild(document.createTextNode(c2f(i)));
    }

}

function c2f(c) {
    return c * 9 / 5 + 32;
}

const r = document.createElement("tr");
if (i % 2) {
    r.setAttribute("class", "odd");
}