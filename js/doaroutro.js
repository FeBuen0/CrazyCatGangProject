document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoConfirmar").addEventListener("click", confirmarDoacao);

    function confirmarDoacao() {
        const produto = document.getElementById("produto").value;
        const quantidade = document.getElementById("quantidade").value;

        if (quantidade === "" || quantidade <= 0) {
            alert("Por favor, insira uma quantidade válida.");
            return;
        }

        alert("Obrigado pela sua doação de " + quantidade + " unidade(s) de " + produto + "!");
    }
});
