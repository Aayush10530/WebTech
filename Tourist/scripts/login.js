function LoginPage() {
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if(email=="murtimehul@gmail.com" && password=="myPassword") {
        alert("Login Success!");
        window.open('../pages/index.html');
    }
}