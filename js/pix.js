document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("doacao").addEventListener("input", atualizarValor);
    document.getElementById("botaoDoar").addEventListener("click", exibirPix);
    document.getElementById("botaoConcluido").addEventListener("click", confirmarDoacao);

    function atualizarValor() {
        const valor = document.getElementById("doacao").value;
        document.getElementById("valor").textContent = valor;
    }

    function exibirPix() {
        // Exibe a chave PIX e aumenta a caixa
        document.getElementById("pix").style.display = "block";
        document.getElementById("caixa").style.maxWidth = "500px"; // aumenta o tamanho da caixa
    }

    function confirmarDoacao() {
        const valor = document.getElementById("doacao").value;
        alert("Obrigado por sua doação de R$ " + valor + ",00!");
        
        // Opcional: Ocultar a seção PIX e redefinir o estado da caixa após a confirmação
        document.getElementById("pix").style.display = "none";
        document.getElementById("caixa").style.maxWidth = "400px";
    }
});
