const token = localStorage.getItem('token');
if(!token){
    window.location = "/wjcrypto/app/login"
}

fetch('http://localhost/auth', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}).then(response=>{
    if(response.status != 200){
        window.location = "/wjcrypto/app/login"
    }
})