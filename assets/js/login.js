async function login(event) {
    event.preventDefault();
    const email = document.querySelector('[data-email]')
    const password = document.querySelector('[data-password]')

    if (email.value == "") {
        showModal("Por favor preencha o email")
        return
    }

    if (password.value == "") {
        showModal("Por favor preencha o password")
        return
    }

    let response = await fetch('http://localhost/auth', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    })

    if (response.status != 200) {
        showModal("E-mail ou senha inválidos")
        return
    }

    response = await response.json();
    localStorage.setItem('token', response.token);
    window.location = "/wjcrypto/app/dashboard"
}