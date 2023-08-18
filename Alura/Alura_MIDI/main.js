function playAudio(audioKey) {
  const element = document.querySelector(`#som_${audioKey}`);

  if (element && element.localName === "audio") {
    element.play();
  }
}

document.querySelectorAll(".tecla").forEach((key) => {
  let btnKeyClass = key.classList[1]; /* classes: "tecla tecla_pom" */

  /* Add play audio function */
  key.onclick = () => {
    playAudio(btnKeyClass);
  };

  /* Pressed event */
  key.onkeydown = (event) => {
    if (event.code === "Enter" || event.code === "Space") {
      key.classList.add("ativa");
    }
  };

  /* Unpressed event */
  key.onkeyup = (event) => {
    if (event.code === "Enter" || event.code === "Space") {
      key.classList.remove("ativa");
    }
  };
});
