export default class game {
  constructor(quantityCells) {
    this.parentConteiner = document.querySelector(".hole-game");
    this.quantityCells = quantityCells;
    this.rendering();
  }

  rendering() {
    for (let i = 1; i <= this.quantityCells; i++) {
      const div = document.createElement("div");
      div.classList.add("hole");
      div.id = `hole${i}`;
      this.parentConteiner.appendChild(div);
    }
  }
}
