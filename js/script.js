//Array de produtos
let produtos = [
  {
    id: 0,
    imagem:
      "https://i.pinimg.com/564x/1a/fc/9f/1afc9f06395b78029d189416d10e58f7.jpg",
    produto: "Memória RAM Gamer XPG Spectrix",
    valor: 360.0,
  },
  {
    id: 1,
    imagem:
      "https://i.pinimg.com/564x/df/2f/9c/df2f9c4eac537bcdf03a27ebc1969204.jpg",
    produto: "Cadeira Gamer Pro Tgc12",
    valor: 880.0,
  },
  {
    id: 2,
    imagem:
      "https://i.pinimg.com/564x/a5/46/a9/a546a923a89147bcd2de99ca0ef10fd0.jpg",
    produto: "Microfone Gamer Fifine A6t",
    valor: 180.0,
  },
  {
    id: 3,
    imagem:
      "https://i.pinimg.com/564x/be/a4/86/bea486b3e66920e421bf8d8945c0f4a2.jpg",
    produto: "Headset Gamer Redragon Zeus X",
    valor: 560.0,
  },
  {
    id: 4,
    imagem:
      "https://i.pinimg.com/564x/67/56/24/6756244a2ab50a0e1620d81f77b17873.jpg",
    produto: "Monitor Gamer Asus Tuf Gaming",
    valor: 770.0,
  },
  {
    id: 5,
    imagem:
      "https://i.pinimg.com/564x/38/5d/6b/385d6b10cbdd5fda290d55a2cfb044f6.jpg",
    produto: "Mouse Gamer Logitech G 502",
    valor: 400.0,
  },
  {
    id: 6,
    imagem:
      "https://i.pinimg.com/564x/51/e5/fe/51e5feacc67549d251f5b329e1211386.jpg",
    produto: "Water Cooler Acegeek",
    valor: 460.0,
  },
  {
    id: 7,
    imagem:
      "https://i.pinimg.com/736x/83/27/ec/8327ecc11f73970688ec93b429271806.jpg",
    produto: "Placa de Video RX 7900",
    valor: 1200.0,
  },
  {
    id: 8,
    imagem:
      "https://i.pinimg.com/564x/57/93/1b/57931b34d996dd418984891f5d588d46.jpg",
    produto: "Fonte Cooler Master Elite Nex",
    valor: 360.0,
  },

  {
    id: 9,
    imagem:
      "https://i.pinimg.com/564x/3b/92/01/3b9201e96aab0b06257f52e105cda4e9.jpg",
    produto: "Gabinete Gamer Redragon Wheel Jack",
    valor: 270.0,
  },

  {
    id: 10,
    imagem:
      "https://i.pinimg.com/564x/55/0d/1c/550d1c4aa2df1deaba682f9ed4d7581f.jpg",
    produto: "SSD Nvme Kingston",
    valor: 220.0,
  },

  {
    id: 11,
    imagem:
      "https://i.pinimg.com/736x/3e/ce/fa/3ecefa0a54744565066f16156272aac6.jpg",
    produto: "Placa Mãe Asus B550",
    valor: 570.0,
  },
];

//Função para ler os produtos dos cards
function lerProdutos() {
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  produtos.forEach((produto) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img src="${produto.imagem}" alt="Imagen do produto">
            <div class="card-container--info">
                <p>${produto.produto}</p>
                <div class="card-container--value">
                    <p>R$ ${produto.valor.toFixed(2)}</p>
                    <img class="lixo" src="img/lixeira.png" alt="Ícone lixeira" onclick="deleteProduto(${
                      produto.id
                    })">
                    <img class="editar" src="img/editar.png" alt="Ícone de editar" onclick="updateProduto(${
                      produto.id
                    })">
                </div>
            </div>
        `;
    cards.appendChild(card);
  });
}

// Função para criar um novo produto
function createProduto() {
  const form = document.getElementById("form-produto");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const imagem = document.getElementById("imagem").value;
    if (nome && valor && imagem) {
      const novoProduto = {
        id: produtos.length,
        imagem,
        produto: nome,
        valor,
      };
      produtos.push(novoProduto);
      lerProdutos();
      form.reset();
    } else {
      alert("Preencha todos os campos!");
    }
  });
}

// Função para deletar um produto
function deleteProduto(id) {
  if (confirm("Tem certeza que deseja excluir o produto?")) {
    produtos = produtos.filter((produto) => produto.id !== id);
    lerProdutos();
    if (produtos.length === 0) {
      alert("Nenhum produto encontrado!");
    }
  }
}

// Função para atualizar um produto
function updateProduto(id) {
  const produto = produtos.find((produto) => produto.id === id);
  if (produto) {
    const nome = prompt("Novo nome do produto:");
    const valor = parseFloat(prompt("Novo valor do produto:"));
    const imagem = prompt("Nova imagem do produto:");
    if (nome && valor && imagem) {
      produto.produto = nome;
      produto.valor = valor;
      produto.imagem = imagem;
      lerProdutos();
      alert("Produto atualizado com sucesso!");
    } else {
      alert("Produto não encontrado!");
    }
  }
}

// Inicializar a leitura dos produtos
lerProdutos();

// Inicializar a criação de produtos
createProduto();
