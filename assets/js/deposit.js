async function deposit() {
    const msg = document.querySelector('[data-msg-deposit]')
    const valueDeposit = document.querySelector('[data-value-deposit]')

    if (valueDeposit.value == "") {
        msg.innerHTML = "Por favor preencha um valor"
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000)
        return
    }

    let valorDeposit = valueDeposit.value.replace(/[.]/g, "")
    valorDeposit = valorDeposit.replace(",", ".")

    if (valorDeposit <= 0.00) {
        msg.innerHTML = "Por favor escolha um valor"
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000)
        return
    }

    const token = localStorage.getItem('token');
    let response = await fetch('http://localhost/deposit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            value: valorDeposit
        })
    })

    if (response.status != 200) {
        modalDanger()
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000)
        return
    }

    clearModal('deposit')
    userInfo()
    modalSuccess()

}