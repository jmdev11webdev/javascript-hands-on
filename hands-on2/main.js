function myToggle(){
    var x = document.getElementById("passwordInput");
    var y = document.getElementById("passwordInput");
    if (x.type === "password") {
        x.type = "text";
        y = "Hide Password";
    } else {
        x.type = "password";
        y = "Show Password"
    }
    document.getElementById("toggle").innerText = y;
}