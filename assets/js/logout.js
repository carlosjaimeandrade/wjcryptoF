function logout(){
    localStorage.removeItem('token');
    window.location = "/wjcrypto/app/login"
}