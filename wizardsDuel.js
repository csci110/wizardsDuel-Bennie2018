import {game, Sprite} from "./sgc/sgc.js";
game.setBackground("floor.png");
game.showScore = true;
//conditional Actions

//All Done
//------------------------------------------------------------------------------------------------
        //Player Classes
class PlayerWizard extends Sprite {
    constructor () {
        super();
        this.name = "Marcus the Wizad";
        this.setImage("marcusSheet.png");
        this.width = 48;
        this.height = 48;
        this.x = this.width;
        this.y = this.y;
        
        this.defineAnimation("down", 6, 8);
        this.defineAnimation("up",0,2);
        //this.defineAnimation("left",10,12);
        this.defineAnimation("right",3,5);
        this.speedWhenWalking = 100;
    }
    handleDownArrowKey() {
        //this.playAnimation("down",true);
// made it where the animation plays without player input 100% of the time
        this.playAnimation("down");
        this.speed = this.speedWhenWalking;
        this.angle = 270;
     }
   handleUpArrowKey() {
        //this.playAnimation("up",true); 
// made it where the animation plays without player input 100% of the time
        this.playAnimation("up");
        this.speed = this.speedWhenWalking;
        this.angle = 90 ;
    } 
    handleSpaceBar() { 
        let spell = new Spell();
        spell.x = this.width;  // this sets the position of the spell object equal to
        spell.y= this.y;  // the position of any object created from the PlayerWizard class
        spell.setImage("marcusSpellSheet.png");
        spell.angle = 0;
        this.playAnimation("right");
    }
    handleGameLoop() {
        this.y = Math.max(0, this.y);
        this.y = Math.min(552, this.y);
        // Keep Marcus in the display area 
    }
    
}

let marcus = new PlayerWizard();



//--------------------------------------------------------------------------------------------------

// A spell class stuff

class Spell extends Sprite {
     constructor () {
         super();
         this.speed = 200;
         this.width = 48;
         this.height = 48;
         this.defineAnimation("magic",0,7);
         this.playAnimation("magic",true);
     }
     handleBoundaryContact() {
      // Delete spell when it leaves display area
      game.removeSprite(this);
    }
}


//--------------------------------------------------------------------------------------------------

class NonPlayerWizard extends Sprite {
    constructor() {
        super();
        this.name = "The Mysteious Strnager";
        this.setImage("strangerSheet.png");
        this.width = 48;
        this.height = 48;
        this.x = game.displayWidth - 2 * this.width;
        this.y = this.height;
        this.angle = 270;
        this.speed = 150;
        this.defineAnimation("down",6,8);
        this.defineAnimation("up",0,2);
        }
    handleGameLoop() {
        if (this.y <= 0) {
        // Upward motion has reached top, so turn down
        this.y = 0;
        this.angle = 270;
        this.playAnimation("down",true);
        }

        if (this.y >= game.displayHeight - this.height) {
        // Downward motion has reached bottom, so turn up
            this.y = game.displayHeight - this.height;
        this.angle = 90;
        this.playAnimation("up",true);
        } 
    }
    
   /* if (condition1) {
    this.playAnimation("up");
    }
    if (condition2) {
    this.playAnimation("down");
    } */
}

let strnager = new NonPlayerWizard();

