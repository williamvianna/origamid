// const curso = {
//   nome: "JavaScript",
//   completar() {
//     console.log(this.nome);
//   },
// };

// curso.completar();

// const ativar = document.querySelector(".ativar");

// /** @param {MouseEvent} event */
// function ativarAoClick(event) {
//   console.log(event.x);
// }

// ativar.addEventListener("click", ativarAoClick);
// console.log(ativar);

// const botao = document.querySelector(".botao");

// function mostrar() {
//   const texto = document.querySelector(".texto");
//   texto.classList.toggle("ativar");
// }

// botao.addEventListener("click", mostrar);

const larguraTela = window.innerWidth;

function coordenadaMouse(event) {
  const coordenadas = {
    x: event.x,
    y: event.y,
  };
  console.log(coordenadas);
}

window.addEventListener("mousemove", coordenadaMouse);

function scroll() {
  console.log("Usou o Scroll");
}

window.addEventListener("scroll", scroll);
