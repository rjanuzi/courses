function playPom() {
  document.querySelector("#som_tecla_pom").play();
}

const keysList = document.querySelectorAll(".tecla");

keysList[0].onclick = playPom;
