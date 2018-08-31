import {game, Sprite} from "./sgc/sgc.js";
game.setBackground("floor.png");
game.showScore = true;
//just Finshed the first class and Sprite for player
//------------------------------------------------------------------------------------------------
class PlayerWizard extends Sprite {
    constructor () {
        super();
        this.name = "Marcus the Wizad";
        this.setImage("marcusSheet.png");
        this.width = 48;
        this.height = 48;
        this.x = this.width;
        this.y = this.y;
    }
}

let marcus = new PlayerWizard();
marcus.speed = 0;


//--------------------------------------------------------------------------------------------------


