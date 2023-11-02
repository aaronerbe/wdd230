const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#password2");
const message = document.querySelector("#pw_message");

pw2.addEventListener("focusout", checkSame);
pw1.addEventListener("input", pw2Clear);

//checks if passwords match, if they do, set happy background.  else sad
function checkSame() {
	if (pw1.value !== pw2.value) {
		message.textContent = "PASSWORDS DO NOT MATCH!";
		//message.style.visibility = "show";
        message.style.display = "block";
		pw2.style.backgroundColor = "#fff0f3";
        pw1.style.backgroundColor = "#fff0f3";
		pw1.value = "";
        pw2.value = "";
		pw1.focus();
	} else if(pw1.value == pw2.value) {
		message.style.display = "none";
		pw2.style.backgroundColor = "#fff";
        pw1.style.backgroundColor = "#fff";
        pw1.style.color = "#000";
		pw2.style.color = "#000";
	}
}

//clears pw2 if they start typing in pw1
//also clear the password mismatch warning
function pw2Clear(){
    pw2.value = "";
    message.style.display = "none";
}



