function log_in(){
    let userName = document.getElementById("name").value;
    let userLastaName = document.getElementById("last-name").value;
    let userEmail = document.getElementById("email").value;
    let userPass = document.getElementById("pass").value;

    if(userName == "Taiel" && userLastaName == "Sagretti" && userEmail == "example@gmail.com" && userPass == "123"){
        window.location = "welcomePage.html";
    }
    else{
        alert("Invalid");
    }
}