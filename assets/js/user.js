

fetch('http://localhost/auth', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}).then(async response =>{
    let user = await response.json();
    const dataName = document.querySelector('[data-name]')
    const dataValue = document.querySelector('[data-value]')
    const dataAccount = document.querySelector('[data-account]')
    dataName.innerHTML = user.name
    dataValue.innerHTML = "R$ " + user.value
    dataAccount.innerHTML = user.account
})

