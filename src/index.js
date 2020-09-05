import "./style.css";
import "./normalize.css";

window.onload = function(){
    const button = document.getElementById("log_in");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const section_modal = document.getElementById("section_modal");
    const section_sign_in = document.getElementById("section_sign_in");
    button.onclick = function(){
        console.log(window)
        if((username.checkValidity() && password.checkValidity()) == true){
            section_modal.style.display = "block";
            section_sign_in.style.display = "none";
        }else {
            console.log("All fields must be filled in.")
        }
    }
}