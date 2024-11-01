document.getElementById("botaoAdicionarGato").addEventListener("click", cadastrarGato);

function cadastrarGato() {
    const idClinica = sessionStorage.getItem("idclinica");
    if (!idClinica) {
        alert("ID da clínica não encontrado. Por favor, faça login novamente.");
        return;
    }

    const nome = document.getElementById("nomeGato").value;
    const idade = document.getElementById("idadeGato").value;
    const cor = document.getElementById("descricaoGato").value;
    const raca = document.getElementById("descricaoGato").value;

    if (!nome || !idade || !cor || !raca) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("idade", idade);
    formData.append("cor", cor);
    formData.append("raca", raca);
    formData.append("idclinica", idClinica);

    fetch('./php/cadastrargato.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Gato cadastrado com sucesso!");
            
            document.getElementById("nomeGato").value = "";
            document.getElementById("idadeGato").value = "";
            document.getElementById("descricaoGato").value = "";
        } else {
            alert("Erro ao cadastrar gato: " + data.message);
        }
    })
    .catch(error => console.error("Erro ao enviar dados:", error));
}
