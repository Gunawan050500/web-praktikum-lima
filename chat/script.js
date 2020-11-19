function kirim() {
    let pesan = document.getElementById("pesan").value;
    document.getElementById("isichat").innerHTML += pesan+"<br/>";
    document.getElementById("pesan").value = "";
    return false;
}