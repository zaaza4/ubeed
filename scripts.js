function validateForm() {
    let name = document.forms["eduForm"]["name"].value;
    let email = document.forms["eduForm"]["email"].value;
    let nik = document.forms["eduForm"]["nik"].value;
    let nameRegex = /^[a-zA-Z\s]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let nikRegex = /^[0-9]{16}$/;
    let isValid = true;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("nikError").innerHTML = "";

    if (!nameRegex.test(name)) {
        document.getElementById("nameError").innerHTML = "Nama hanya boleh mengandung huruf dan spasi.";
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerHTML = "Email tidak valid.";
        isValid = false;
    }

    if (!nikRegex.test(nik)) {
        document.getElementById("nikError").innerHTML = "NIK harus 16 digit angka.";
        isValid = false;
    }

    return isValid;
}