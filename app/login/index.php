<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../assets/css/login.css">
    <link rel="stylesheet" href="../../assets/css/reset.css">
    <link rel="stylesheet" href="../../assets/css/app.css">
    <link rel="stylesheet" href="../../assets/lib/fontawesome-free-6.1.1-web/css/all.css">
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
        <div class="login-container">
            <div class="login-content">
                <img src="../../assets/files/logo.png">

                <div class="input">
                    <i class="fa-solid fa-user"></i>
                    <input data-email placeholder="Insira seu e-mail" required type="email">
                </div>
                <div class="input">
                    <i class="fa-solid fa-key"></i>
                    <input data-password placeholder="Insira seu e-mail" required type="password">
                </div>
                <button onclick="login(event)">Entrar</button>
                <p>Não possui conta? <a href="criar">Clique aqui</a>
            </div>
        </div>
    </form>
</body>

</html>

<script src="../../assets/js/modalMsg.js"></script>
<script src="../../assets/js/login.js"></script>