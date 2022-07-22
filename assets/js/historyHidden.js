    
const arrows = document.querySelectorAll('.hidden-history')
arrows.forEach(arrow =>{
    arrow.onclick = (e =>{
        const container = e.target.parentNode.parentNode.parentNode.children[1]
        const hidden = e.target.parentNode.parentNode.parentNode.getAttribute('data-hidden')
        if(container.style.height == "0px"){
            arrow.classList.remove('fa-angle-down')
            arrow.classList.add('fa-angle-up')
            localStorage.removeItem(`hidden-${hidden}`)
            container.style.transition = "0.5s";
            container.style.height = "303px";

            return
        }
        arrow.classList.remove('fa-angle-up')
        arrow.classList.add('fa-angle-down')
        container.style.transition = "0.5s";
        container.style.height = "0px";
        localStorage.setItem(`hidden-${hidden}` , hidden)
    })
})

const hiddenLogin = localStorage.getItem('hidden-login')
const hiddenDeposit = localStorage.getItem('hidden-deposit')
const hiddenTransfer = localStorage.getItem('hidden-transfer')
const hiddenRemoval = localStorage.getItem('hidden-removal')
if(hiddenLogin){
    const container = document.querySelector(`[container-${hiddenLogin}]`)
    container.children[0].children[0].children[1].classList.remove('fa-angle-up')
    container.children[0].children[0].children[1].classList.add('fa-angle-down')
    container.children[1].style.transition = "0.0s"
    container.children[1].style.height = "0px"
}
if(hiddenDeposit){
    const container = document.querySelector(`[container-${hiddenDeposit}]`)
    container.children[0].children[0].children[1].classList.remove('fa-angle-up')
    container.children[0].children[0].children[1].classList.add('fa-angle-down')
    container.children[1].style.transition = "0.0s"
    container.children[1].style.height = "0px"
}
if(hiddenTransfer){
    const container = document.querySelector(`[container-${hiddenTransfer}]`)
    container.children[0].children[0].children[1].classList.remove('fa-angle-up')
    container.children[0].children[0].children[1].classList.add('fa-angle-down')
    container.children[1].style.transition = "0.0s"
    container.children[1].style.height = "0px"
}
if(hiddenRemoval){
    const container = document.querySelector(`[container-${hiddenRemoval}]`)
    container.children[0].children[0].children[1].classList.remove('fa-angle-up')
    container.children[0].children[0].children[1].classList.add('fa-angle-down')
    container.children[1].style.transition = "0.0s"
    container.children[1].style.height = "0px"
}