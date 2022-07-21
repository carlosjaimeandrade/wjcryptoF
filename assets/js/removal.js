async function removal() {
    const msg = document.querySelector('[data-msg-removal]')
    const valueRemoval = document.querySelector('[data-value-removal]')

    if (valueRemoval.value == "") {
        msg.innerHTML = "Por favor preencha um valor"
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000)
        return
    }

    let valorRemoval = valueRemoval.value.replace(/[.]/g, "")
    valorRemoval = valorRemoval.replace(",", ".")

    if (valorRemoval <= 0.00) {
        msg.innerHTML = "Por favor escolha um valor"
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000)
        return
    }
    
    const accountValue = await checkValue();
    if(parseFloat(accountValue) < parseFloat(valorRemoval)){
        msg.innerHTML = "Você não possui esse saldo"
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000)
        return
    }

    const token = localStorage.getItem('token');
    let response = await fetch('http://localhost/removal', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            value: valorRemoval
        })
    })

    if (response.status != 200) {
        modalDanger()
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000)
        return
    }

    clearModal('removal')
    userInfo()
    modalSuccess()

}