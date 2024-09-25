var id_array = [$("id1").val(), $("id2").val(), $("id3").val(), $("id4").val(), $("id5").val()];

function bigToSmall(number1, number2) {
    return number2 - number1;
}

id_array.sort(bigToSmall);

$('#sorted').val(id_array);


function validate() {
    var isValid = true;
    var name = $("n").text;
    if (name === "" || $.type(name) === !String) {
        alert("This is not the correct format");
        isValid = false;
    } else {
        isValid = true;
    }

    var ticket = $("t").val;
    var numbers = Array(10).keys();
    if (numbers.find(ticket)) {
        isValid = true;
    } else {
        alert("The number is not in range");
        isValid = false;
    }
}