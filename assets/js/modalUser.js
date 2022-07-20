function openTransfer(){
    const transfer = document.querySelector('[data-transfer]');
    transfer.style.display = "flex";
}

function openDeposit(){
    const deposit = document.querySelector('[data-deposit]');
    deposit.style.display = "flex";
}

function openRetiral(){
    const retiral = document.querySelector('[data-retiral]');
    retiral.style.display = "flex";
}

const closeModal = document.querySelectorAll('.options-close');
closeModal.forEach(e=>{
    e.onclick = (e) =>{
        e.target.parentNode.style.display = "none";
    }
})

const cancelModal = document.querySelectorAll('[data-cancel]');

cancelModal.forEach(e=>{
    e.onclick = (e) =>{
        e.target.parentNode.parentNode.parentNode.style.display = "none";
    }
})