import game from "./Game";
import gameControl from "./GameControl";

const newGame = new game(16);
const start = new gameControl(newGame.quantityCells);
