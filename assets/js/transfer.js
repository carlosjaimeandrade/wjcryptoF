function checkUserTransfer(event) {
        
    const token = localStorage.getItem('token');
    fetch(`http://localhost/user?email=${event.target.value}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(async response => {
        const msg = document.querySelector('[data-msg-transfer]')
        if(response.status != 200){
            event.target.parentNode.style.borderBottom = "1px solid rgb(231, 51, 6)"
            msg.innerHTML = "Esse e-mail não possui cadastro"
            return
        }
        event.target.parentNode.style.borderBottom = "1px solid rgb(152, 216, 4)"
        msg.innerHTML = "";
    })
}

async function transfer() {
const email = document.querySelector('[data-email-transfer]')
const msg = document.querySelector('[data-msg-transfer]')
const valueTransfer = document.querySelector('[data-value-transfer]')

if (email.value == "") {
    msg.innerHTML = "Por favor preencha um e-mail"
    setTimeout(() => {
        msg.innerHTML = "";
    }, 5000)
    return
}

if (valueTransfer.value == "") {
    msg.innerHTML = "Por favor preencha um valor"
    setTimeout(() => {
        msg.innerHTML = "";
    }, 5000)
    return
}

let valorTransfer = valueTransfer.value.replace(/[.]/g, "")
valorTransfer = valorTransfer.replace(",", ".")

if (valorTransfer <= 0.00) {
    msg.innerHTML = "Por favor escolha um valor"
    setTimeout(() => {
        msg.innerHTML = "";
    }, 5000)
    return
}

const accountValue = await checkValue();
if(parseFloat(accountValue) < parseFloat(valorTransfer)){
    msg.innerHTML = "Você não possui esse saldo"
    setTimeout(() => {
        msg.innerHTML = "";
    }, 5000)
    return
}

const token = localStorage.getItem('token');
let response = await fetch('http://localhost/transfer', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
        email: email.value,
        value: valorTransfer
    })
})

if (response.status != 200) {
    modalDanger()
    setTimeout(() => {
        msg.innerHTML = "";
    }, 5000)
    return
}

clearModal('transfer')
email.value = ""
userInfo()
modalSuccess()

}