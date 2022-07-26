<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../../assets/css/login.css">
    <link rel="stylesheet" href="../../../assets/css/reset.css">
    <link rel="stylesheet" href="../../../assets/css/app.css">
    <link rel="stylesheet" href="../../../assets/lib/fontawesome-free-6.1.1-web/css/all.css">
    <title>Wjcrypto Login</title>
</head>

<div class="modal-container-msg">
    <div class="modal-msg">
        <i class="fa-solid fa-xmark close-modal"></i>
        <p class="msg-ins">Por favor preencha todos os campos</p>
    </div>
</div>

<body>
    <form>
        <div class="create-container">
            <div class="create-banner">
                <img src="../../../assets/files/banner.svg">
            </div>
            <div class="create-content">
                <div class="create">
                    <img src="../../../assets/files/logo.png">
                    <div class="input">
                        <i class="fa-solid fa-user"></i>
                        <input data-email placeholder="Insira seu nome" id="name" required type="text">
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-envelope"></i>
                        <input data-email placeholder="Insira seu e-mail" required id="email" type="email">
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-id-badge"></i>
                        <select id="type">
                            <option value="">Selecione</option>
                            <option value="cpf">cpf</option>
                            <option value="cnpj">cnpj</option>
                        </select>
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-id-card"></i>
                        <input data-email placeholder="Insira seu cpf ou cnpj" id="cpf_cnpj" type="text">
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-id-card-clip"></i>
                        <input data-email placeholder="Insira sua ie ou rg" id="rg_ie" type="text">
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-calendar"></i>
                        <input data-email placeholder="Insira sua data de nascimento" id="date_birth" type="date">
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-mobile"></i>
                        <input data-email placeholder="Insira seu telefone" id="telephone" type="text">
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-location-dot"></i>
                        <input data-email placeholder="Insira seu endereço" id="address" type="text">
                    </div>
                    <div class="input">
                        <i class="fa-solid fa-lock"></i>
                        <input data-email placeholder="Insira sua senha" id="password" type="password">
                    </div>
                    <button onclick="createUser(event)">Cadastrar</button>
                </div>
            </div>
        </div>
    </form>
</body>

</html>

<script src="../../../assets/js/modalMsg.js"></script>
<script>
    async function createUser(event) {
        event.preventDefault();
        const values = document.querySelectorAll('input')
        const type = document.querySelector('#type').value

        const obj = {};
        values.forEach(value => {
            if (value.value == "") {
                showModal(`Por favor preencha todos os campos`)
            }
            console.log(value.id)
            obj[value.id] = value.value
        })

        obj['type'] = type;

        let response = await fetch('http://localhost/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })

           if (response.status != 200) {
            response = await response.json();
            if (response.error == "user already registered") {
                showModal("Esse usuário já possui cadastro")
                return
            }
            showModal("Não foi possivel cadastrar, verifique e tente novamente")
            return
        }

        showModal("Cadastro realizado com sucesso, aguarde...")
        setTimeout(()=>{
            window.location = "/wjcrypto/app/login"
        },3000)
     
    }
</script>