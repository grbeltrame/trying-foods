console.log("Script carregado com sucesso!");

// Substituir automaticamente as notas por emoticons
const tabelaComidas = document.getElementById("tabela-comidas");
const linhas = tabelaComidas.querySelectorAll("tbody tr");

linhas.forEach((linha) => {
  const celulaNota = linha.querySelector("td:nth-child(2)");
  const nota = parseInt(celulaNota.textContent, 10);

  // Mapear notas para emoticons
  const emoticons = [
    "images\\image_dislike.svg", // Nota 1
    "images\\image_dislike.svg", // Nota 2
    "images\\image_sad.svg", // Nota 3
    "images\\image_sad.svg", // Nota 4
    "images\\image_indif.svg", // Nota 5
    "images\\image_indif.svg", // Nota 6
    "images\\image_like.svg", // Nota 7
    "images\\image_like.svg", // Nota 8
    "images\\image_superlike.svg", // Nota 9
    "images\\image_superlike.svg", // Nota 10
  ];

  // Substituir a nota pela imagem correspondente
  celulaNota.innerHTML = `<img src="${
    emoticons[nota - 1]
  }" alt="Nota ${nota}" class="rating-img" />`;
});

// // Função para adicionar uma nova linha à tabela
// function adicionarNovaLinha(comida, nota, sentimento, explicacao) {
//   const tbody = tabelaComidas.querySelector("tbody");
//   const novaLinha = document.createElement("tr");
//   novaLinha.innerHTML = `
//     <td>${comida}</td>
//     <td>${nota}</td>
//     <td>${sentimento}</td>
//     <td>${explicacao}</td>
//   `;
//   tbody.appendChild(novaLinha);

//   // Atualizar as notas com os emoticons
//   const celulaNota = novaLinha.querySelector("td:nth-child(2)");
//   const notaInt = parseInt(nota, 10);
//   celulaNota.innerHTML = `<img src="${
//     emoticons[notaInt - 1]
//   }" alt="Nota ${notaInt}" class="rating-img" />`;
// }

// // Manipular o envio do formulário para adicionar nova comida
// const formNovaComida = document.getElementById("formNovaComida");
// formNovaComida.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const inputComida = document.getElementById("inputComida");
//   const inputNota = document.getElementById("inputNota");
//   const inputSentimento = document.getElementById("inputSentimento");
//   const inputExplicacao = document.getElementById("inputExplicacao");

//   adicionarNovaLinha(
//     inputComida.value,
//     inputNota.value,
//     inputSentimento.value,
//     inputExplicacao.value
//   );

//   // Limpar os campos do formulário
//   inputComida.value = "";
//   inputNota.value = "";
//   inputSentimento.value = "";
//   inputExplicacao.value = "";

//   // Fechar o modal
//   const adicionarModal = new bootstrap.Modal(
//     document.getElementById("adicionarModal")
//   );
//   adicionarModal.hide();
// });
