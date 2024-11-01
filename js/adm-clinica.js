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


    function carregarGatos() {
        const idClinica = sessionStorage.getItem("idclinica");

        fetch('./php/consultar_gatos_clinica.php?idclinica=' + idClinica)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    listaGatos.innerHTML = ""; 
                    data.gatos.forEach(gato => {
                        const gatoDiv = document.createElement("div");
                        gatoDiv.className = "item2";
                        gatoDiv.textContent = `Nome: ${gato.nome}, Idade: ${gato.idade} anos, Cor: ${gato.cor}, Raça: ${gato.raca}, Adotado: ${gato.adotado ? "Sim" : "Não"}`;
                        listaGatos.appendChild(gatoDiv);
                    });
                } else {
                    listaGatos.innerHTML = "Nenhum gato encontrado.";
                }
            })
            .catch(error => console.error("Erro ao carregar gatos:", error));
    }

    carregarGatos();
});
