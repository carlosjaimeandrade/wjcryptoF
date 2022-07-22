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
        <div container-deposit class="content-history">
            <div class="history-title">
                <div>Histórico de entrada</div>
            </div>
            <div class="overflow-auto"></div>
        </div>
        <div container-login class="content-history">
            <div class="history-title">
                <div>Histórico de login</div>
            </div>
            <div class="overflow-auto"></div>
        </div>
    </div>
    <div class="dashboard-content">
        <div container-removal class="content-history">
            <div class="history-title">
                <div>Histórico de saída</div>
            </div>
            <div class="overflow-auto"></div>
        </div>
        <div container-transfer class="content-history">
            <div class="history-title">
                <div>Histórico de transferencia</div>
            </div>
            <div class="overflow-auto"></div>
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
                <input data-email-transfer onblur="checkUserTransfer(event)" placeholder="Informe o e-mail do recebedor" type="text" data-deposit-email></input>
            </div>
            <input data-value-transfer onKeyPress="return(moeda(this,'.',',',event))" class="value-modal" placeholder="R$ 00,0" type="text">
            <span data-msg-transfer class="msg-modal"></span>
        </div>
        <div class="modal-action">
            <button onclick="transfer()" class="modal-success">Transferir</button>
            <button data-cancel>Cancelar</button>
        </div>
    </div>
</div>

<div data-deposit class="modal-options">
    <i class="fa-solid fa-xmark options-close"></i>
    <div class="options">
        <h2>Depositar</h2>
        <div class="info-options">
            <input data-value-deposit onKeyPress="return(moeda(this,'.',',',event))" class="value-modal" placeholder="R$ 00,0" type="text">
            <span data-msg-deposit class="msg-modal"></span>
        </div>
        <div class="modal-action">
            <button onclick="deposit()" class="modal-success">Depositar</button>
            <button data-cancel>Cancelar</button>
        </div>
    </div>
</div>

<div data-retiral class="modal-options">
    <i class="fa-solid fa-xmark options-close"></i>
    <div class="options">
        <h2>Retirada</h2>
        <div class="info-options">
            <input data-value-removal onKeyPress="return(moeda(this,'.',',',event))" class="value-modal" placeholder="R$ 00,0" type="text">
            <span data-msg-removal class="msg-modal"></span>
        </div>
        <div class="modal-action">
            <button onclick="removal()" class="modal-success">Retirar</button>
            <button data-cancel>Cancelar</button>
        </div>
    </div>
</div>

<?php require_once('../templates/footer.php') ?>

<script src="../../assets/js/mask.js"></script>
<script src="../../assets/js/modalUser.js"></script>
<script src="../../assets/js/help.js"></script>
<script src="../../assets/js/deposit.js"></script>
<script src="../../assets/js/removal.js"></script>
<script src="../../assets/js/transfer.js"></script>
