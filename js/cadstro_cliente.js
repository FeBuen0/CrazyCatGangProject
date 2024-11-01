async function cadastrar() {
    var form = document.getElementById("form-cadastro-cliente");
    var dados = new FormData(form);

    try {
        var response = await fetch("./php/cadstrocliente.php", {
            method: "POST",
            body: dados
        });

        var resposta = await response.json();
        
        if (resposta == "Usuário cadastrado com sucesso!") { // Verifica se a resposta indica sucesso
            alert("Cadastro realizado com sucesso, faça login para entrar.");
            window.location.href = "login.html"; // Redireciona para a página de login, se necessário
        } else {
            alert("Erro no cadastro: " + resposta.message);
        }

    } catch (error) {
        console.error("Erro ao realizar o cadastro:", error);
    }
}


// js/cadastro_cliente.js
function cadastrar_clinica(event) {
    event.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    const formData = new FormData(document.querySelector('#form-cadastro-clinica'));

    fetch('./php/cadastroclinica.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Cadastro realizado com sucesso!");
        } else {
            alert("Erro no cadastro: " + data.message);
        }
    })
    .catch(error => {
        console.error("Erro ao enviar dados:", error);
    });
}


function entrarClinica(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('form-login-clinica'));

    fetch('./php/loginclinica.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Login realizado com sucesso!");
            sessionStorage.setItem("idclinica", data.idclinica); // Salva o idclinica
            window.location.href = 'add-clinica.html';
        } else {
            alert("Erro no login: " + data.message);
        }
    })
    .catch(error => {
        console.error("Erro ao enviar dados:", error);
    });
}




function login_user() {
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;

    
    if (!email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const userData = {
        email: email,
        senha: senha
    };

  
    fetch('./php/loginuser.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            
            window.location.href = 'GridClin.html';
        }
    })
    .catch(error => {
        alert('Erro: ' + error.message);
    });
}


