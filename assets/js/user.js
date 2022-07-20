

fetch('http://localhost/auth', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}).then(async response =>{
    let user = await response.json();
    console.log(user);
})

