let start_range = document.getElementById("start_r"), end_range = document.getElementById("end_r");
let clear_table, text, alphabet;

//function for filtering input
function checkInput() {
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if (isNaN(start_range) && isNaN(end_range) || start_range.includes(alphabet) && end_range.includes(alphabet)) {
        text = "Please enter a number in the space provided.";
        alert(text);
    } else if (start_range.includes(".") && end_range.includes(".")) {
        parseFloat(start_range.toFixed(1));
        parseFloat(end_range.toFixed(1));
        alert("The inputs have been truncated.");
    } else {
        setInfo();
    }
}

//function to set information and presenting it
function setInfo() {
    const inputNode_start = document.getElementById("stat").innerHTML;
    const inputNode_end = document.getElementById("end").innerHTML;
    inputNode_start.setAttribute("number", start_range);
    inputNode_end.setAttribute("number", end_range);

    const inputNode = document.getElementById("");
    inputNode.appendChild(document.createTextNode(inputNode_start));
    inputNode.appendChild(document.createTextNode(inputNode_end));

    const outputNode = document.getElementById("pre");
    outputNode.textContent = inputNode_start.value;
    outputNode.textContent = inputNode_end.value

    const printingNode = document.getElementById("set_info");

    try {
        printingNode.textContent = "The start range is " + inputNode_start;
    } catch (y) {
        printingNode.textContent = y;
    }
}

//function to clear inputs and outputs
function clear() {
    start_range = $("#start_r").remove();
    end_range = $("#end_r").remove();

    clear_table = $("#conversionArea").empty();
}

//function to generate table and data
function conversionF(tagID, start_range, end_range) {
    const conversion = document.getElementById(tagID);
    const pre = document.createElement("pre");

    conversion.appendChild(pre);

    const table = pre.appendChild(document.createElement("table"));
    const table_head = pre.appendChild(document.createElement("thead"));
    let table_row = table_head.appendChild(document.createElement("tr"));
    let table_h = table_row.appendChild(document.createElement("th"));
    table_h.appendChild(document.createTextNode("Celsius"));
    table_h = table_row.appendChild(document.createElement("th"));
    table_h.appendChild(document.createTextNode("Fahrenheit"));


    const table_body = table.appendChild(document.createElement("tbody"));

    //function for calculation the Fahrenheit equivalent
    function celsiusToFahrenheit(s) {
        return (s * 9 / 5 + 32);
    }

    for (let i = start_range; i < end_range; i++) {
        table_row = table_body.appendChild(document.createElement("tr"));
        if (i % 2 === 0) {
            table_row.setAttribute("class", "even");
        } else {
            table_row.setAttribute("class", "odd");
        }

        let data = table_row.appendChild(document.createElement("td"));
        data.appendChild(document.createTextNode(i));
        data = table_row.appendChild(document.createElement("td"));
        data.appendChild(document.createTextNode(celsiusToFahrenheit(i)));
    }


}

function conversionC(tagID, start_range, end_range) {
    const conversion = document.getElementById(tagID);
    const pre = document.createElement("pre");

    conversion.appendChild(pre);

    const table = pre.appendChild(document.createElement("table"));
    const table_head = pre.appendChild(document.createElement("thead"));
    let table_row = table_head.appendChild(document.createElement("tr"));
    let table_h = table_row.appendChild(document.createElement("th"));
    table_h.appendChild(document.createTextNode("Fahrenheit"));
    table_h = table_row.appendChild(document.createElement("th"));
    table_h.appendChild(document.createTextNode("Celsius"));


    const table_body = table.appendChild(document.createElement("tbody"));


    //function for calculation the Celsius equivalent
    function fahrenheitToCelsius(s) {
        return (s - 32 / 5 * 9);
    }

    for (let i = start_range; i < end_range; i++) {
        table_row = table_body.appendChild(document.createElement("tr"));
        if (i % 2 === 0) {
            table_row.setAttribute("class", "even");
        } else {
            table_row.setAttribute("class", "odd");
        }

        let data = table_row.appendChild(document.createElement("td"));
        data.appendChild(document.createTextNode(i));
        data = table_row.appendChild(document.createElement("td"));
        data.appendChild(document.createTextNode(fahrenheitToCelsius(i)));
    }

}
//Celsius to Fahrenheit table
if (document.getElementById("CtoF")) {
    conversionF('conversionArea', start_range, end_range);
}

//Fahrenheit to Celsius table
if (document.getElementById("FtoC")) {
    conversionC('conversionArea', start_range, end_range);
}