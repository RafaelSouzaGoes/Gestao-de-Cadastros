
function cadastrarCliente() {

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cep = document.getElementById('cep').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let celular = document.getElementById('celular').value;
    
    let dados = JSON.parse(localStorage.getItem("cliente"));

    console.log(dados)
    if (dados == null) {
        localStorage.setItem("cliente", "[]");
        dados = [];
    }
    
    
    let cadastro = {
        
        nome:nome.value,
        email:email.value,
        cep:cep.value,
        endereco:endereco.value,
        numero:numero.value,
        celular:celular.value
        
    }

    dados.push(cadastro);

    localStorage.setItem("cliente", JSON.stringify(dados));
}

function cadastrarProduto() {

    let produto = document.getElementById('produto');
    let codProduto = document.getElementById('codigo do produto');
    let quantidade = document.getElementById('quantidade');
    let descricao = document.getElementById('descricao');
    
    
    let dados = JSON.parse(localStorage.getItem("produto"));

    console.log(dados)
    if (dados == null) {
        localStorage.setItem("produto", "[]");
        dados = [];
    }
    
    
    let cadastro = {
        
        produto:produto.value,
        codProduto:codProduto.value,
        quantidade:quantidade.value,
        descricao:descricao.value
        
        
        
    }

    dados.push(cadastro);

    localStorage.setItem("produto", JSON.stringify(dados));
}
