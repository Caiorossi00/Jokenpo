const placarJokenpo = JSON.parse(localStorage.getItem("placar")) || {
  Vitorias: 0,
  Derrotas: 0,
  Empates: 0,
};

function resetPlacarJokenpo() {
  placarJokenpo.Vitorias = 0;
  placarJokenpo.Derrotas = 0;
  placarJokenpo.Empates = 0;

  atualizarPlacar();

  localStorage.setItem("placar", JSON.stringify(placarJokenpo));
}

function escolhaJogador(escolha) {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "Pedra";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Papel";
  } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
    computerMove = "Tesoura";
  }

  let result = "";

  if (computerMove === escolha) {
    result = "Empate!";
    placarJokenpo.Empates += 1;
  } else if (
    (computerMove === "Pedra" && escolha === "Papel") ||
    (computerMove === "Papel" && escolha === "Tesoura") ||
    (computerMove === "Tesoura" && escolha === "Pedra")
  ) {
    result = "Você venceu!";
    placarJokenpo.Vitorias += 1;
  } else {
    result = "Você perdeu!";
    placarJokenpo.Derrotas += 1;
  }

  document.querySelector(
    ".js-score"
  ).innerHTML = `Vitórias: ${placarJokenpo.Vitorias}, Derrotas: ${placarJokenpo.Derrotas}, Empates: ${placarJokenpo.Empates}`;

  localStorage.setItem("placar", JSON.stringify(placarJokenpo));

  alert(`O computador escolheu: ${computerMove}. ${result}`);
}

function atualizarPlacar() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Vitórias: ${placarJokenpo.Vitorias}, Derrotas: ${placarJokenpo.Derrotas}, Empates: ${placarJokenpo.Empates}`;
}

window.addEventListener("load", function () {
  atualizarPlacar();
});
