console.log("Hello world!")

const passwdA = document.getElementById("passwd");
const passwdB = document.getElementById("cpasswd");

[passwdA, passwdB].map(x => x.addEventListener("input", setValidity))

function setValidity() {
    if (!anyPasswdsEmpty() && !arePasswdsEqual()) {
        this.setCustomValidity("Passwords must match.");
        this.reportValidity();
        [passwdA, passwdB].map(x => x.className = "error")
    }
    else { [passwdA, passwdB].map(x => x.setCustomValidity("")) }
}

function arePasswdsEqual() {
    return passwdA.value === passwdB.value;
    //console.log(passwdA.value === passwdB.value);
};

function anyPasswdsEmpty() {
    return passwdA.value === "" || passwdB.value === "" ? true : false;
};