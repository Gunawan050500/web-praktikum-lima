function login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("Username / Password Tidak Boleh Kosong");
        return false;
    }
    else if (password.length < 6) {
        alert("Password Kurang dari 6");
        return false;
    }
    else if (username == "ipal" && password == "123456789") {
        window.location = "chat.html";
        return false;
    }else{
        alert("Username / Password anda salah");
    }
}