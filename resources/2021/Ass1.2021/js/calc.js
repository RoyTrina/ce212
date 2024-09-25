//this is the previously calculated answer

//function to append digits onto the screen
function display(value) {
    if (document.getElementById("answer").value === "") {
        clear_r();
    } else {
        document.getElementById("answer").value += value;

//this part of the code is checked for more than one decimal point and setting the number to have exactly one digit after the decimal point
        if (document.getElementById("answer").value.includes(".")) {
            value.toFixed(1);
        } else {
            if ($(this).val().indexOf('.') !== -1) {
                alert('No more than one decimal point allowed.')
            }
        }
    }
}

//function to clear the screen
function clear_r() {
    document.getElementById("answer").value = "0";
}

//this is where the calculation is generated
function equals() {
    const number = document.getElementById("answer").value;
    document.getElementById("answer").value = eval(number);

}

//this is the function that out the previous answer
function lastAns() {
    const memory = equals().value;

    console.log(memory);


}