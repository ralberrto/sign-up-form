console.log("Hello world!")

const passwdA = document.getElementById("passwd");
const passwdB = document.getElementById("cpasswd");
const inputForms = Array.from(document.querySelectorAll(".ff-common"));

inputForms.map(x => x.addEventListener("input", setFilled));

[passwdA, passwdB].map(x => x.addEventListener("input", setValidity));

function setValidity() {
    if (!anyPasswdsEmpty() && !arePasswdsEqual()) {
        this.setCustomValidity("Passwords must match.");
        this.reportValidity();
        [passwdA, passwdB].map(x => {
            x.className = "error";
            x.classList.remove("no-error");});
    }
    else if (!anyPasswdsEmpty() && arePasswdsEqual()) {
        [passwdA, passwdB].map(x => x.className = "no-error")
    }
    else {
        [passwdA, passwdB].map(x => {
        x.setCustomValidity("");
        x.classList.remove("error");
        x.classList.remove("no-error");})
    }
}

function setFilled() {
    if (!isInputEmpty(this)) {
        this.className = "not-empty";
    }
    else { this.classList.remove("not-empty"); }
}

function isInputEmpty(inputNode) {
    console.log("You are here")
    return inputNode.value === "";
}

function arePasswdsEqual() {
    return passwdA.value === passwdB.value;
    //console.log(passwdA.value === passwdB.value);
};

function anyPasswdsEmpty() {
    return passwdA.value === "" || passwdB.value === "" ? true : false;
};