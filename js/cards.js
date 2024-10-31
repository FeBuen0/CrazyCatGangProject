window.onload = async function (){
    var container = document.getElementById("lista-clinicas");

    var resposta = await fetch('./php/cards.php',{
        method: "GET",
    });

        
    var dados = await resposta.json();

    console.log(dados);

    for (var i = 0; i < dados.length; i++) {
        var card = `
        <a href="PagClinicaClicada.html?nome=${encodeURIComponent(dados[i].nome)}&rua=${encodeURIComponent(dados[i].rua)}&bairro=${encodeURIComponent(dados[i].bairro)}&telefone=${encodeURIComponent(dados[i].telefone)}">
            <div class="card-clinicas">
                <div class="parte-imagem-card">
                    <img src="imagens/sispet-dicas-clinica-veterinaria-sustentavel-768x512.webp" alt="" style="width: 270px; height: 100%; border-radius: 5px;">
                </div>
                <div class="parte-info-card">
                    <div class="txt-info-card"><p><b>Clínica: ${dados[i].nome}</b></p></div>
                    <div class="txt-info-card"><p><b>Endereço: ${dados[i].rua}, ${dados[i].bairro}</b></p></div>
                    <div class="txt-info-card"><p><b>Telefone: ${dados[i].telefone}</b></p></div>
                    <div class="txt-info-card"><p><b>Doações: precisa</b></p></div>
                </div>
            </div>
        </a>`;
        container.innerHTML += card;
    }
    
    
}