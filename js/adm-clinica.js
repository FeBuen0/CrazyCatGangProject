document.addEventListener("DOMContentLoaded", function() {
    const listaDoacoes = document.getElementById("listaDoacoes");
    const listaGatos = document.getElementById("listaGatos");

    const doacoesRecebidas = [
        { produto: "Alimento", quantidade: 10 },
        { produto: "Brinquedo", quantidade: 5 },
        { produto: "Cobertor", quantidade: 3 },
    ];

    function mostrarDoacoes() {
        listaDoacoes.innerHTML = "";
        doacoesRecebidas.forEach(doacao => {
            const item = document.createElement("div");
            item.className = "item2";
            item.textContent = `Produto: ${doacao.produto}, Quantidade: ${doacao.quantidade}`;
            listaDoacoes.appendChild(item);
        });
    }

    mostrarDoacoes();

    document.getElementById("botaoAdicionarGato").addEventListener("click", function() {
        const nome = document.getElementById("nomeGato").value;
        const idade = document.getElementById("idadeGato").value;
        const descricao = document.getElementById("descricaoGato").value;

        if (!nome || !idade || !descricao) {
            alert("Por favor, preencha todos os campos para adicionar um gato.");
            return;
        }

        const novoGato = document.createElement("div");
        novoGato.className = "item2";
        novoGato.textContent = `Nome: ${nome}, Idade: ${idade} anos, Descrição: ${descricao}`;

        listaGatos.appendChild(novoGato);

        document.getElementById("nomeGato").value = "";
        document.getElementById("idadeGato").value = "";
        document.getElementById("descricaoGato").value = "";

        alert("Gato adicionado com sucesso!");
    });
});
