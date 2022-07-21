function clearModal(elementValue) {
    const closeModal = document.querySelectorAll('.modal-options');
    closeModal.forEach(e=>{
        e.style.display = 'none';
    })
    const value = document.querySelector(`[data-value-${elementValue}]`);
    value.value = "";
}

async function checkValue() {
    let response = await fetch('http://localhost/auth', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    response = await response.json()
    return response.value
}

function modalSuccess(){
    const element = `<div class="modal-info-operation">
                        <i class="fa-solid fa-xmark operation-close"></i>
                        <div class="modal-info">
                            <h2>Operação <br> realizada <br> com sucesso</h2>
                            <img src="../../assets/files/success.svg">
                        </div>
                    </div>` 

    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend',element);

    const close = document.querySelector('.operation-close')
    close.onclick = (event)=>{
        event.target.parentNode.remove()
    }
}

function modalDanger(){
    const element = `<div class="modal-info-operation">
                        <i class="fa-solid fa-xmark operation-close"></i>
                        <div class="modal-info-danger">
                            <h2>Ocorreu um <br> erro na <br>  operação</h2>
                            <img src="../../assets/files/danger.svg">
                        </div>
                    </div>` 

    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend',element);

    const close = document.querySelector('.operation-close')
    close.onclick = (event)=>{
        event.target.parentNode.remove()
    }
}