function checkNumber(){
    let number;
    number = document.getElementById("numberInput").value;
    if (number > 0) {
        number = "Positive Number";
    } else if (number < 0) {
        number = "Negative Number";
    } else {
        number = "Zero";
    }
    document.getElementById("output").innerHTML = "Output is"+ " " + number;
}