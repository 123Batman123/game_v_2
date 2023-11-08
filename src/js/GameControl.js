export default class gameControl {
  constructor(quantityCells) {
    this.parentClass = document.querySelector(".hole-game");
    this.allElementClassHole = [...this.parentClass.querySelectorAll(".hole")];

    this.statusVinNotVin = document.querySelector("#status");

    this.lastNumber = undefined;
    this.quantityCells = quantityCells;
    this.vin = 0;
    this.notVin = 0;

    this.gameStart();

    this.onBtnClick = this.onBtnClick.bind(this);
    this.parentClass.addEventListener("click", this.onBtnClick);
  }

  onBtnClick(e) {
    const statusVin = this.statusVinNotVin.querySelector("#dead");
    const statusNotVin = this.statusVinNotVin.querySelector("#lost");
    let target = e.target;
    if (target.classList.contains("hole_has-mole")) {
      target.classList.remove("hole_has-mole");
      this.vin += 1;
    } else {
      this.notVin += 1;
    }
    this.counterVinNotVin();
    statusVin.textContent = this.vin;
    statusNotVin.textContent = this.notVin;
  }

  counterVinNotVin() {
    if (this.vin == 5) {
      alert("vin");
      this.resetCounter();
    }
    if (this.notVin == 5) {
      alert("notVin");
      this.resetCounter();
    }
  }

  resetCounter() {
    this.vin = 0;
    this.notVin = 0;
  }

  randomChange() {
    const randomElement = Math.floor(Math.random() * this.quantityCells);
    if (this.lastNumber == randomElement) {
      this.randomChange();
      return;
    }
    if (this.lastNumber === undefined) {
      this.allElementClassHole[randomElement].classList.add("hole_has-mole");
      this.lastNumber = randomElement;
    } else {
      this.allElementClassHole[this.lastNumber].classList.remove(
        "hole_has-mole"
      );
      this.allElementClassHole[randomElement].classList.add("hole_has-mole");
      this.lastNumber = randomElement;
    }
  }

  gameStart() {
    setInterval(() => {
      this.randomChange();
    }, 1200);
  }
}
