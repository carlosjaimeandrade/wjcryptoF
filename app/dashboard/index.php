<?php require_once('../templates/header.php') ?>

<div class="dashboard-container">
    <div class="dashboard-content">
        <div class="content-operations">
            <div class="value-content">
                <div class="value-info">
                    <p>Dinheiro disponível</p>
                    <p>Conta: <span data-account></span></p>
                </div>
                <div class="value">
                    <span data-value></span>
                </div>
            </div>
            <div class="operations">
                <button onclick="openDeposit()">Depositar</button>
                <button onclick="openRetiral()" class="mr-2">Retirar</button>
                <button onclick="openTransfer()">Transferir</button>
            </div>
        </div>
        <div class="content-history">
            <div class="history-title">
                <div>Histórico de entrada</div>
            </div>
            <div class="history">
                <p>Descrição da opeção</p>
                <p>20/05/2022 10:24:05</p>
            </div>
            <div class="history">
                <p>Descrição da opeção</p>
                <p>20/05/2022 10:24:05</p>
            </div>
        </div>
    </div>
    <div class="dashboard-content">
        <div class="content-history">
            <div class="history-title">
                <div>Histórico de saída</div>
            </div>
            <div class="history">
                <p>Descrição da opeção</p>
                <p>20/05/2022 10:24:05</p>
            </div>
            <div class="history">
                <p>Descrição da opeção</p>
                <p>20/05/2022 10:24:05</p>
            </div>
        </div>
        <div class="content-history">
            <div class="history-title">
                <div>Histórico de transferencia</div>
            </div>
            <div class="history">
                <p>Descrição da opeção</p>
                <p>20/05/2022 10:24:05</p>
            </div>
            <div class="history">
                <p>Descrição da opeção</p>
                <p>20/05/2022 10:24:05</p>
            </div>
        </div>
    </div>
</div>

<div data-transfer class="modal-options">
    <i class="fa-solid fa-xmark options-close"></i>
    <div class="options">
        <h2>Transferência</h2>
        <div class="info-options">
            <div class="input-border-bottom">
            <i class="fa-solid fa-envelope"></i>
                    <input placeholder="Informe o e-mail do recebedor" type="text" data-deposit-email></input>
            </div>
            <input onKeyPress="return(moeda(this,'.',',',event))" class="value-modal" placeholder="R$ 00,0" type="text">
        </div>
        <div class="modal-action">
            <button class="modal-success">Transferir</button>
            <button data-cancel >Cancelar</button>
        </div>
    </div>
</div>

<div data-deposit class="modal-options">
    <i class="fa-solid fa-xmark options-close"></i>
    <div class="options">
        <h2>Depositar</h2>
        <div class="info-options">
            <input onKeyPress="return(moeda(this,'.',',',event))" class="value-modal" placeholder="R$ 00,0" type="text">
        </div>
        <div class="modal-action">
            <button class="modal-success">Retirar</button>
            <button data-cancel >Cancelar</button>
        </div>
    </div>
</div>

<div data-retiral class="modal-options">
    <i class="fa-solid fa-xmark options-close"></i>
    <div class="options">
        <h2>Retirada</h2>
        <div class="info-options">
            <input onKeyPress="return(moeda(this,'.',',',event))" class="value-modal" placeholder="R$ 00,0" type="text">
        </div>
        <div class="modal-action">
            <button class="modal-success">Depositar</button>
            <button data-cancel >Cancelar</button>
        </div>
    </div>
</div>

<?php require_once('../templates/footer.php') ?>


<script src="../../assets/js/mask.js"></script>
<script src="../../assets/js/modalUser.js"></script>
