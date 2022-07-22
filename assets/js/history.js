function historyDeposit() {
    const token = localStorage.getItem('token');
    fetch(`http://localhost/history?category=deposit`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(async response => {
        let elements = "";
        const deposit = document.querySelector('[container-deposit]')
        const dataDeposit = document.querySelectorAll('[data-deposit-history]')
        
        if(dataDeposit){
            dataDeposit.forEach(e=>{
                e.remove()
            })
        }

        response = await response.json()
        response.forEach(data =>{
            elements +=  `
            <div data-deposit-history class="history">
                <p>${data.description}</p>
                <p>${data.createdAt}</p>
            </div>`
        })

        deposit.children[1].insertAdjacentHTML('beforeend', elements )
    })
}

function historyLogin() {
    const token = localStorage.getItem('token');
    fetch(`http://localhost/history?category=login`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(async response => {
        let elements = "";
        const login = document.querySelector('[container-login]')
        const dataLogin = document.querySelectorAll('[data-login-history]')
        
        if(dataLogin){
            dataLogin.forEach(e=>{
                e.remove()
            })
        }
      
        response = await response.json()
        response.forEach(data =>{
            elements +=  `
            <div data-login-history class="history">
                <p>${data.description}</p>
                <p>${data.createdAt}</p>
            </div>`
        })

        login.children[1].insertAdjacentHTML('beforeend', elements )
    })
}

function historyRemoval() {
    const token = localStorage.getItem('token');
    fetch(`http://localhost/history?category=removal`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(async response => {
        let elements = "";
        const removal = document.querySelector('[container-removal]')
        const dataRemoval = document.querySelectorAll('[data-removal-history]')
        
        if(dataRemoval){
            dataRemoval.forEach(e=>{
                e.remove()
            })
        }
      
        response = await response.json()
        response.forEach(data =>{
            elements +=  `
            <div data-removal-history class="history">
                <p>${data.description}</p>
                <p>${data.createdAt}</p>
            </div>`
        })

        removal.children[1].insertAdjacentHTML('beforeend', elements )
    })
}

function historyTransfer() {
    const token = localStorage.getItem('token');
    fetch(`http://localhost/history?category=transfer`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(async response => {
        let elements = "";
        const transfer = document.querySelector('[container-transfer]')
        const dataTransfer = document.querySelectorAll('[data-transfer-history]')
        
        if(dataTransfer){
            dataTransfer.forEach(e=>{
                e.remove()
            })
        }
      
        response = await response.json()
        response.forEach(data =>{
            elements +=  `
            <div data-transfer-history class="history">
                <p>${data.description}</p>
                <p>${data.createdAt}</p>
            </div>`
        })

        transfer.children[1].insertAdjacentHTML('beforeend', elements )
    })
}
historyLogin()
historyDeposit()
historyRemoval()
historyTransfer()