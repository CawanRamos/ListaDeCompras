//Puxando elementos do HTML

const addItem = document.getElementById("addItem");
const listItens = document.querySelector("ul");
const itemForList = document.getElementById("itemForList");
const warning = document.getElementById("warning");

//Criando o array
let itens = [];

addItem.addEventListener("click", (e) => {
  e.preventDefault();
  const item = itemForList.value.trim();

  if (item !== "") {
    itens.push(item);
    itemForList.value = "";
    renderList();
  }
});

function renderList() {
  listItens.innerHTML = "";
  itens.forEach((item, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const img = document.createElement("img");
    img.src = "../assets/icons/lixeira.svg";
    img.dataset.index = index; // Adiciona o índice como identificador
    span.textContent = item;
    li.appendChild(span);
    li.appendChild(img);
    listItens.appendChild(li);
  });

  console.log(itens);
}

listItens.addEventListener("click", (event) => {
  const itemClicado = event.target;
  if (itemClicado.tagName === "IMG") { // Verifica se o clique foi na imagem
    const index = itemClicado.dataset.index;
    deleteItem(index);
  }
});

function deleteItem(index) {
  itens.splice(index, 1); // Remove o item do array
  renderList(); // Atualiza a lista no HTML
  deleteWarning()
}

function deleteWarning() {

  if( warning.classList != "ativo") {
    warning.classList.add("ativo");
    console.log("entrou");
    setTimeout(() => {
      warning.classList.remove("ativo");
    }, 3000);
  }
 
}