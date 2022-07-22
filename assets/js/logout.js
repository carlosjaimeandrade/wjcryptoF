function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('hidden-login');
    localStorage.removeItem('hidden-transfer');
    localStorage.removeItem('hidden-removal');
    localStorage.removeItem('hidden-deposit');
    window.location = "/wjcrypto/app/login"
}