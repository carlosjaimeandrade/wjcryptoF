function showModal($msg) {
    const modalContainerMsg = document.querySelector('.modal-container-msg')
    const close = document.querySelector('.close-modal')
    const msgIns = document.querySelector('.msg-ins')
    msgIns.innerHTML = $msg
    modalContainerMsg.style.display = 'flex'

    setTimeout(()=>{
        close.parentNode.parentNode.style.display = 'none'
    },4000)

    close.onclick = () => {
        close.parentNode.parentNode.style.display = 'none'
    }
}