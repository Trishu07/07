function login(){
    let username = document.getElementById("uname").value
    let password = document.getElementById("pwd").value
    if(username === "admin" && password === "admin"){
        alert("success");
    }else{ 
        alert("failed");
    }
}